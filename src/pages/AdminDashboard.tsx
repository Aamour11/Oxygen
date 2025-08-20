import React, { useState, useEffect } from 'react';
import { Shield, Users, Mail, CheckCircle, XCircle, Eye, Settings, LogOut, Search, Filter } from 'lucide-react';

interface Member {
  id: string;
  uid: string;
  oldNickname: string;
  requestNickname: string;
  gender: string;
  email: string;
  discordUsername: string;
  description: string;
  grade: string;
  platform: string;
  photo: string | null;
  status: 'pending' | 'approved' | 'rejected';
  submittedAt: string;
  reviewedAt?: string;
  rejectionReason?: string;
}

interface AdminDashboardProps {
  onLogout: () => void;
}

const AdminDashboard: React.FC<AdminDashboardProps> = ({ onLogout }) => {
  const [members, setMembers] = useState<Member[]>([]);
  const [selectedMember, setSelectedMember] = useState<Member | null>(null);
  const [showRejectModal, setShowRejectModal] = useState(false);
  const [rejectionReason, setRejectionReason] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState<'all' | 'pending' | 'approved' | 'rejected'>('all');

  // Mock data - in real app, this would come from API
  useEffect(() => {
    const mockMembers: Member[] = [
      {
        id: '1',
        uid: '123456789',
        oldNickname: 'OldPlayer',
        requestNickname: 'O2_NewRecruit',
        gender: 'laki-laki',
        email: 'player1@email.com',
        discordUsername: 'player1#1234',
        description: 'Saya ingin bergabung dengan O2 karena saya suka bermain taktis dan ingin belajar lebih banyak.',
        grade: 'gold',
        platform: 'PC',
        photo: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=150',
        status: 'pending',
        submittedAt: '2024-01-15T10:30:00Z'
      },
      {
        id: '2',
        uid: '987654321',
        oldNickname: 'MobileGamer',
        requestNickname: 'O2_MobileElite',
        gender: 'perempuan',
        email: 'player2@email.com',
        discordUsername: 'player2#5678',
        description: 'Pengalaman 3 tahun bermain mobile, siap berkomitmen dengan jadwal latihan.',
        grade: 'platinum',
        platform: 'Mobile',
        photo: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150',
        status: 'approved',
        submittedAt: '2024-01-14T15:20:00Z',
        reviewedAt: '2024-01-15T09:00:00Z'
      }
    ];
    setMembers(mockMembers);
  }, []);

  const filteredMembers = members.filter(member => {
    const matchesSearch = member.requestNickname.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         member.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         member.uid.includes(searchTerm);
    const matchesStatus = statusFilter === 'all' || member.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const handleApprove = async (memberId: string) => {
    setMembers(prev => prev.map(member => 
      member.id === memberId 
        ? { ...member, status: 'approved' as const, reviewedAt: new Date().toISOString() }
        : member
    ));
    
    // In real app, send email invitation here
    const member = members.find(m => m.id === memberId);
    if (member) {
      alert(`Email undangan Discord telah dikirim ke ${member.email}`);
    }
  };

  const handleReject = async (memberId: string) => {
    if (!rejectionReason.trim()) {
      alert('Harap masukkan alasan penolakan');
      return;
    }

    setMembers(prev => prev.map(member => 
      member.id === memberId 
        ? { 
            ...member, 
            status: 'rejected' as const, 
            reviewedAt: new Date().toISOString(),
            rejectionReason 
          }
        : member
    ));
    
    setShowRejectModal(false);
    setRejectionReason('');
    setSelectedMember(null);
    
    // In real app, send rejection email here
    alert('Email penolakan telah dikirim ke member');
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'pending':
        return <span className="px-2 py-1 bg-yellow-500/20 text-yellow-300 rounded-full text-xs">Menunggu</span>;
      case 'approved':
        return <span className="px-2 py-1 bg-green-500/20 text-green-300 rounded-full text-xs">Diterima</span>;
      case 'rejected':
        return <span className="px-2 py-1 bg-red-500/20 text-red-300 rounded-full text-xs">Ditolak</span>;
      default:
        return null;
    }
  };

  const MemberDetailModal = ({ member }: { member: Member }) => (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-slate-800 border border-blue-500/20 rounded-2xl p-6 max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-start mb-6">
          <h3 className="text-2xl font-bold text-white">Detail Member</h3>
          <button
            onClick={() => setSelectedMember(null)}
            className="text-blue-300 hover:text-white"
          >
            <XCircle className="w-6 h-6" />
          </button>
        </div>

        <div className="space-y-4">
          {member.photo && (
            <div className="text-center">
              <img 
                src={member.photo} 
                alt="Profile" 
                className="w-24 h-24 rounded-full mx-auto border-4 border-blue-500/30"
              />
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            <div>
              <label className="text-blue-300 font-medium">UID:</label>
              <p className="text-white">{member.uid}</p>
            </div>
            <div>
              <label className="text-blue-300 font-medium">Nickname Lama:</label>
              <p className="text-white">{member.oldNickname || '-'}</p>
            </div>
            <div>
              <label className="text-blue-300 font-medium">Request Nickname:</label>
              <p className="text-white">{member.requestNickname}</p>
            </div>
            <div>
              <label className="text-blue-300 font-medium">Gender:</label>
              <p className="text-white capitalize">{member.gender}</p>
            </div>
            <div>
              <label className="text-blue-300 font-medium">Email:</label>
              <p className="text-white">{member.email}</p>
            </div>
            <div>
              <label className="text-blue-300 font-medium">Discord:</label>
              <p className="text-white">{member.discordUsername}</p>
            </div>
            <div>
              <label className="text-blue-300 font-medium">Grade:</label>
              <p className="text-white capitalize">{member.grade}</p>
            </div>
            <div>
              <label className="text-blue-300 font-medium">Platform:</label>
              <p className="text-white">{member.platform}</p>
            </div>
          </div>

          <div>
            <label className="text-blue-300 font-medium">Deskripsi:</label>
            <p className="text-white mt-1">{member.description}</p>
          </div>

          <div>
            <label className="text-blue-300 font-medium">Status:</label>
            <div className="mt-1">{getStatusBadge(member.status)}</div>
          </div>

          {member.rejectionReason && (
            <div>
              <label className="text-red-300 font-medium">Alasan Penolakan:</label>
              <p className="text-red-200 mt-1">{member.rejectionReason}</p>
            </div>
          )}

          {member.status === 'pending' && (
            <div className="flex space-x-4 pt-4">
              <button
                onClick={() => handleApprove(member.id)}
                className="flex-1 bg-green-600 hover:bg-green-500 text-white font-medium py-2 px-4 rounded-lg transition-colors flex items-center justify-center"
              >
                <CheckCircle className="w-4 h-4 mr-2" />
                Terima
              </button>
              <button
                onClick={() => {
                  setSelectedMember(member);
                  setShowRejectModal(true);
                }}
                className="flex-1 bg-red-600 hover:bg-red-500 text-white font-medium py-2 px-4 rounded-lg transition-colors flex items-center justify-center"
              >
                <XCircle className="w-4 h-4 mr-2" />
                Tolak
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );

  const RejectModal = () => (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-slate-800 border border-blue-500/20 rounded-2xl p-6 max-w-md w-full">
        <h3 className="text-xl font-bold text-white mb-4">Alasan Penolakan</h3>
        <textarea
          value={rejectionReason}
          onChange={(e) => setRejectionReason(e.target.value)}
          placeholder="Masukkan alasan penolakan..."
          rows={4}
          className="w-full bg-slate-700/50 border border-blue-500/30 rounded-lg px-4 py-3 text-white placeholder-blue-300/50 focus:border-cyan-400 focus:outline-none"
        />
        <div className="flex space-x-4 mt-4">
          <button
            onClick={() => {
              setShowRejectModal(false);
              setRejectionReason('');
            }}
            className="flex-1 bg-slate-600 hover:bg-slate-500 text-white font-medium py-2 px-4 rounded-lg transition-colors"
          >
            Batal
          </button>
          <button
            onClick={() => selectedMember && handleReject(selectedMember.id)}
            className="flex-1 bg-red-600 hover:bg-red-500 text-white font-medium py-2 px-4 rounded-lg transition-colors"
          >
            Tolak Member
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">
      {/* Header */}
      <div className="bg-slate-800/50 backdrop-blur-sm border-b border-blue-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-3">
              <Shield className="w-8 h-8 text-blue-400" />
              <div>
                <h1 className="text-2xl font-bold text-white">Admin Dashboard</h1>
                <p className="text-blue-300 text-sm">Panel Manajemen O2 Clan</p>
              </div>
            </div>
            <button
              onClick={onLogout}
              className="flex items-center space-x-2 bg-red-600 hover:bg-red-500 text-white px-4 py-2 rounded-lg transition-colors"
            >
              <LogOut className="w-4 h-4" />
              <span>Logout</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-slate-800/50 backdrop-blur-sm border border-blue-500/20 rounded-xl p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-blue-300 text-sm">Total Pendaftar</p>
                <p className="text-2xl font-bold text-white">{members.length}</p>
              </div>
              <Users className="w-8 h-8 text-blue-400" />
            </div>
          </div>
          <div className="bg-slate-800/50 backdrop-blur-sm border border-blue-500/20 rounded-xl p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-yellow-300 text-sm">Menunggu Review</p>
                <p className="text-2xl font-bold text-white">{members.filter(m => m.status === 'pending').length}</p>
              </div>
              <Eye className="w-8 h-8 text-yellow-400" />
            </div>
          </div>
          <div className="bg-slate-800/50 backdrop-blur-sm border border-blue-500/20 rounded-xl p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-green-300 text-sm">Diterima</p>
                <p className="text-2xl font-bold text-white">{members.filter(m => m.status === 'approved').length}</p>
              </div>
              <CheckCircle className="w-8 h-8 text-green-400" />
            </div>
          </div>
          <div className="bg-slate-800/50 backdrop-blur-sm border border-blue-500/20 rounded-xl p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-red-300 text-sm">Ditolak</p>
                <p className="text-2xl font-bold text-white">{members.filter(m => m.status === 'rejected').length}</p>
              </div>
              <XCircle className="w-8 h-8 text-red-400" />
            </div>
          </div>
        </div>

        {/* Filters */}
        <div className="bg-slate-800/50 backdrop-blur-sm border border-blue-500/20 rounded-xl p-6 mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-blue-400 w-4 h-4" />
                <input
                  type="text"
                  placeholder="Cari berdasarkan nickname, email, atau UID..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 bg-slate-700/50 border border-blue-500/30 rounded-lg text-white placeholder-blue-300/50 focus:border-cyan-400 focus:outline-none"
                />
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <Filter className="w-4 h-4 text-blue-400" />
              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value as any)}
                className="bg-slate-700/50 border border-blue-500/30 rounded-lg px-3 py-2 text-white focus:border-cyan-400 focus:outline-none"
              >
                <option value="all">Semua Status</option>
                <option value="pending">Menunggu</option>
                <option value="approved">Diterima</option>
                <option value="rejected">Ditolak</option>
              </select>
            </div>
          </div>
        </div>

        {/* Members Table */}
        <div className="bg-slate-800/50 backdrop-blur-sm border border-blue-500/20 rounded-xl overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-slate-700/50">
                <tr>
                  <th className="px-6 py-4 text-left text-blue-300 font-medium">Member</th>
                  <th className="px-6 py-4 text-left text-blue-300 font-medium">Platform</th>
                  <th className="px-6 py-4 text-left text-blue-300 font-medium">Grade</th>
                  <th className="px-6 py-4 text-left text-blue-300 font-medium">Status</th>
                  <th className="px-6 py-4 text-left text-blue-300 font-medium">Tanggal</th>
                  <th className="px-6 py-4 text-left text-blue-300 font-medium">Aksi</th>
                </tr>
              </thead>
              <tbody>
                {filteredMembers.map((member) => (
                  <tr key={member.id} className="border-t border-blue-500/10 hover:bg-slate-700/30">
                    <td className="px-6 py-4">
                      <div className="flex items-center space-x-3">
                        {member.photo && (
                          <img 
                            src={member.photo} 
                            alt="Profile" 
                            className="w-10 h-10 rounded-full border-2 border-blue-500/30"
                          />
                        )}
                        <div>
                          <p className="text-white font-medium">{member.requestNickname}</p>
                          <p className="text-blue-300 text-sm">{member.email}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-white">{member.platform}</td>
                    <td className="px-6 py-4 text-white capitalize">{member.grade}</td>
                    <td className="px-6 py-4">{getStatusBadge(member.status)}</td>
                    <td className="px-6 py-4 text-blue-300 text-sm">
                      {new Date(member.submittedAt).toLocaleDateString('id-ID')}
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex space-x-2">
                        <button
                          onClick={() => setSelectedMember(member)}
                          className="bg-blue-600 hover:bg-blue-500 text-white px-3 py-1 rounded text-sm transition-colors"
                        >
                          Detail
                        </button>
                        {member.status === 'pending' && (
                          <>
                            <button
                              onClick={() => handleApprove(member.id)}
                              className="bg-green-600 hover:bg-green-500 text-white px-3 py-1 rounded text-sm transition-colors"
                            >
                              Terima
                            </button>
                            <button
                              onClick={() => {
                                setSelectedMember(member);
                                setShowRejectModal(true);
                              }}
                              className="bg-red-600 hover:bg-red-500 text-white px-3 py-1 rounded text-sm transition-colors"
                            >
                              Tolak
                            </button>
                          </>
                        )}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Modals */}
      {selectedMember && !showRejectModal && <MemberDetailModal member={selectedMember} />}
      {showRejectModal && <RejectModal />}
    </div>
  );
};

export default AdminDashboard;