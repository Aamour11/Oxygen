import React, { useState } from 'react';
import { UserPlus, Upload, User, Hash, Clock, FileText, Image, ArrowLeft, Target, Mail, MessageCircle, Trophy } from 'lucide-react';

interface FormData {
  uid: string;
  oldNickname: string;
  requestNickname: string;
  gender: string;
  email: string;
  discordUsername: string;
  description: string;
  grade: string;
  platform: string;
  photo: File | null;
}

interface RegisterPageProps {
  onBack: () => void;
}

const RegisterPage: React.FC<RegisterPageProps> = ({ onBack }) => {
  const [formData, setFormData] = useState<FormData>({
    uid: '',
    oldNickname: '',
    requestNickname: '',
    gender: 'laki-laki',
    email: '',
    discordUsername: '',
    description: '',
    grade: 'bronze',
    platform: '',
    photo: null
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [photoPreview, setPhotoPreview] = useState<string | null>(null);
  const [showTerms, setShowTerms] = useState(false);
  const [acceptedTerms, setAcceptedTerms] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handlePhotoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFormData(prev => ({ ...prev, photo: file }));
      
      const reader = new FileReader();
      reader.onload = (e) => {
        setPhotoPreview(e.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!acceptedTerms) {
      alert('Anda harus menyetujui syarat dan ketentuan terlebih dahulu.');
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    alert('Pendaftaran berhasil dikirim! Kami akan meninjau aplikasi Anda dan menghubungi Anda segera.');
    
    // Reset form
    setFormData({
      uid: '',
      oldNickname: '',
      requestNickname: '',
      gender: 'laki-laki',
      email: '',
      discordUsername: '',
      description: '',
      grade: 'bronze',
      platform: '',
      photo: null
    });
    setPhotoPreview(null);
    setAcceptedTerms(false);
    setIsSubmitting(false);
  };

  const handlePlatformChange = (platform: string) => {
    setFormData(prev => ({ ...prev, platform }));
    setShowTerms(true);
  };

  const TermsModal = () => (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-slate-800 border border-blue-500/20 rounded-2xl p-6 max-w-2xl w-full max-h-[80vh] overflow-y-auto">
        <h3 className="text-2xl font-bold text-white mb-4">Syarat & Ketentuan - {formData.platform}</h3>
        <div className="space-y-4 text-blue-200/80 text-sm">
          {formData.platform === 'PC' ? (
            <>
              <h4 className="text-lg font-semibold text-cyan-400">Persyaratan PC:</h4>
              <ul className="list-disc list-inside space-y-2">
                <li>Minimal rank Bronze III</li>
                <li>KD ratio minimal 1.2</li>
                <li>Memiliki mikrofon yang jernih</li>
                <li>Koneksi internet stabil (ping &lt;50ms)</li>
                <li>Aktif minimal 3x seminggu</li>
                <li>Mengikuti latihan rutin setiap Sabtu</li>
                <li>Tidak toxic dan sportif</li>
              </ul>
            </>
          ) : (
            <>
              <h4 className="text-lg font-semibold text-cyan-400">Persyaratan Mobile:</h4>
              <ul className="list-disc list-inside space-y-2">
                <li>Minimal rank Silver II</li>
                <li>KD ratio minimal 1.0</li>
                <li>Device minimal 4GB RAM</li>
                <li>Koneksi internet stabil</li>
                <li>Aktif minimal 2x seminggu</li>
                <li>Mengikuti event mobile setiap Minggu</li>
                <li>Tidak toxic dan sportif</li>
              </ul>
            </>
          )}
        </div>
        <div className="flex space-x-4 mt-6">
          <button
            onClick={() => setShowTerms(false)}
            className="flex-1 bg-slate-600 hover:bg-slate-500 text-white font-medium py-2 px-4 rounded-lg transition-colors"
          >
            Tutup
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-75"></div>
      </div>

      {/* Header */}
      <div className="relative z-10 p-4 sm:p-6">
        <div className="max-w-4xl mx-auto">
          <button
            onClick={onBack}
            className="flex items-center text-blue-300 hover:text-cyan-300 transition-colors mb-6 group"
          >
            <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
            <span className="font-medium">Kembali ke Beranda</span>
          </button>

          <div className="flex items-center space-x-3 mb-2">
            <Target className="w-8 h-8 text-blue-400" />
            <div>
              <span className="text-2xl font-black text-blue-400">O2</span>
              <span className="text-sm text-blue-300 ml-2">OXYGEN</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 px-4 sm:px-6 pb-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8 sm:mb-12">
            <div className="flex items-center justify-center mb-4">
              <UserPlus className="w-6 h-6 sm:w-8 sm:h-8 text-blue-400 mr-2" />
              <span className="text-cyan-400 font-semibold text-base sm:text-lg">BERGABUNG DENGAN ELIT</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-4 sm:mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
                Daftar Sebagai
              </span>
              <br />
              Operator O2
            </h1>
            <p className="text-lg sm:text-xl text-blue-200/80 max-w-2xl mx-auto">
              Siap bergabung dengan barisan elit? Isi formulir aplikasi di bawah ini dan buktikan bahwa Anda memiliki apa yang diperlukan untuk menjadi bagian dari Oxygen O2.
            </p>
          </div>

          <div className="bg-slate-800/50 backdrop-blur-sm border border-blue-500/20 rounded-2xl p-4 sm:p-6 lg:p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Platform Selection */}
              <div>
                <label className="flex items-center text-blue-300 font-medium mb-2 text-sm sm:text-base">
                  <Hash className="w-4 h-4 mr-2" />
                  Platform Gaming *
                </label>
                <div className="grid grid-cols-2 gap-4">
                  <button
                    type="button"
                    onClick={() => handlePlatformChange('PC')}
                    className={`p-4 rounded-lg border-2 transition-all ${
                      formData.platform === 'PC'
                        ? 'border-cyan-400 bg-cyan-400/10 text-cyan-300'
                        : 'border-blue-500/30 bg-slate-700/50 text-blue-300 hover:border-blue-400'
                    }`}
                  >
                    <div className="font-bold text-lg">PC</div>
                    <div className="text-sm opacity-80">Desktop Gaming</div>
                  </button>
                  <button
                    type="button"
                    onClick={() => handlePlatformChange('Mobile')}
                    className={`p-4 rounded-lg border-2 transition-all ${
                      formData.platform === 'Mobile'
                        ? 'border-cyan-400 bg-cyan-400/10 text-cyan-300'
                        : 'border-blue-500/30 bg-slate-700/50 text-blue-300 hover:border-blue-400'
                    }`}
                  >
                    <div className="font-bold text-lg">Mobile</div>
                    <div className="text-sm opacity-80">Mobile Gaming</div>
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                {/* UID */}
                <div>
                  <label className="flex items-center text-blue-300 font-medium mb-2 text-sm sm:text-base">
                    <Hash className="w-4 h-4 mr-2" />
                    UID Game *
                  </label>
                  <input
                    type="text"
                    name="uid"
                    value={formData.uid}
                    onChange={handleInputChange}
                    required
                    className="w-full bg-slate-700/50 border border-blue-500/30 rounded-lg px-3 sm:px-4 py-2 sm:py-3 text-white placeholder-blue-300/50 focus:border-cyan-400 focus:outline-none transition-all duration-300 text-sm sm:text-base"
                    placeholder="Masukkan UID Delta Force Anda"
                  />
                </div>

                {/* Old Nickname */}
                <div>
                  <label className="flex items-center text-blue-300 font-medium mb-2 text-sm sm:text-base">
                    <Clock className="w-4 h-4 mr-2" />
                    Nickname Sebelumnya
                  </label>
                  <input
                    type="text"
                    name="oldNickname"
                    value={formData.oldNickname}
                    onChange={handleInputChange}
                    className="w-full bg-slate-700/50 border border-blue-500/30 rounded-lg px-3 sm:px-4 py-2 sm:py-3 text-white placeholder-blue-300/50 focus:border-cyan-400 focus:outline-none transition-all duration-300 text-sm sm:text-base"
                    placeholder="Nickname sebelumnya (jika ada)"
                  />
                </div>

                {/* Request Nickname */}
                <div>
                  <label className="flex items-center text-blue-300 font-medium mb-2 text-sm sm:text-base">
                    <User className="w-4 h-4 mr-2" />
                    Request Nickname *
                  </label>
                  <input
                    type="text"
                    name="requestNickname"
                    value={formData.requestNickname}
                    onChange={handleInputChange}
                    required
                    className="w-full bg-slate-700/50 border border-blue-500/30 rounded-lg px-3 sm:px-4 py-2 sm:py-3 text-white placeholder-blue-300/50 focus:border-cyan-400 focus:outline-none transition-all duration-300 text-sm sm:text-base"
                    placeholder="Nickname yang diinginkan"
                  />
                </div>

                {/* Gender */}
                <div>
                  <label className="flex items-center text-blue-300 font-medium mb-2 text-sm sm:text-base">
                    <User className="w-4 h-4 mr-2" />
                    Gender *
                  </label>
                  <select
                    name="gender"
                    value={formData.gender}
                    onChange={handleInputChange}
                    required
                    className="w-full bg-slate-700/50 border border-blue-500/30 rounded-lg px-3 sm:px-4 py-2 sm:py-3 text-white focus:border-cyan-400 focus:outline-none transition-all duration-300 text-sm sm:text-base"
                  >
                    <option value="laki-laki">Laki-laki</option>
                    <option value="perempuan">Perempuan</option>
                  </select>
                </div>

                {/* Email */}
                <div>
                  <label className="flex items-center text-blue-300 font-medium mb-2 text-sm sm:text-base">
                    <Mail className="w-4 h-4 mr-2" />
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full bg-slate-700/50 border border-blue-500/30 rounded-lg px-3 sm:px-4 py-2 sm:py-3 text-white placeholder-blue-300/50 focus:border-cyan-400 focus:outline-none transition-all duration-300 text-sm sm:text-base"
                    placeholder="email@example.com"
                  />
                </div>

                {/* Discord Username */}
                <div>
                  <label className="flex items-center text-blue-300 font-medium mb-2 text-sm sm:text-base">
                    <MessageCircle className="w-4 h-4 mr-2" />
                    Username Discord *
                  </label>
                  <input
                    type="text"
                    name="discordUsername"
                    value={formData.discordUsername}
                    onChange={handleInputChange}
                    required
                    className="w-full bg-slate-700/50 border border-blue-500/30 rounded-lg px-3 sm:px-4 py-2 sm:py-3 text-white placeholder-blue-300/50 focus:border-cyan-400 focus:outline-none transition-all duration-300 text-sm sm:text-base"
                    placeholder="username#1234"
                  />
                </div>

                {/* Grade */}
                <div>
                  <label className="flex items-center text-blue-300 font-medium mb-2 text-sm sm:text-base">
                    <Trophy className="w-4 h-4 mr-2" />
                    Grade/Rank Saat Ini *
                  </label>
                  <select
                    name="grade"
                    value={formData.grade}
                    onChange={handleInputChange}
                    required
                    className="w-full bg-slate-700/50 border border-blue-500/30 rounded-lg px-3 sm:px-4 py-2 sm:py-3 text-white focus:border-cyan-400 focus:outline-none transition-all duration-300 text-sm sm:text-base"
                  >
                    <option value="bronze">Bronze</option>
                    <option value="silver">Silver</option>
                    <option value="gold">Gold</option>
                    <option value="platinum">Platinum</option>
                    <option value="diamond">Diamond</option>
                    <option value="master">Master</option>
                    <option value="grandmaster">Grandmaster</option>
                  </select>
                </div>
              </div>

              {/* Photo Upload */}
              <div>
                <label className="flex items-center text-blue-300 font-medium mb-2 text-sm sm:text-base">
                  <Image className="w-4 h-4 mr-2" />
                  Foto Profil
                </label>
                <div className="border-2 border-dashed border-blue-500/30 rounded-lg p-4 sm:p-6 text-center hover:border-cyan-400/50 transition-colors">
                  {photoPreview ? (
                    <div className="space-y-4">
                      <img 
                        src={photoPreview} 
                        alt="Preview profil" 
                        className="w-24 h-24 sm:w-32 sm:h-32 rounded-full mx-auto object-cover border-4 border-blue-500/30"
                      />
                      <button
                        type="button"
                        onClick={() => {
                          setPhotoPreview(null);
                          setFormData(prev => ({ ...prev, photo: null }));
                        }}
                        className="text-red-400 hover:text-red-300 font-medium text-sm sm:text-base"
                      >
                        Hapus Foto
                      </button>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      <Upload className="w-8 h-8 sm:w-12 sm:h-12 text-blue-400 mx-auto" />
                      <div>
                        <label htmlFor="photo" className="cursor-pointer">
                          <span className="text-blue-300 hover:text-cyan-300 font-medium text-sm sm:text-base">
                            Klik untuk upload foto Anda
                          </span>
                          <input
                            id="photo"
                            type="file"
                            accept="image/*"
                            onChange={handlePhotoChange}
                            className="hidden"
                          />
                        </label>
                        <p className="text-blue-300/60 text-xs sm:text-sm mt-1">PNG, JPG maksimal 5MB</p>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Description */}
              <div>
                <label className="flex items-center text-blue-300 font-medium mb-2 text-sm sm:text-base">
                  <FileText className="w-4 h-4 mr-2" />
                  Ceritakan tentang diri Anda *
                </label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  required
                  rows={4}
                  className="w-full bg-slate-700/50 border border-blue-500/30 rounded-lg px-3 sm:px-4 py-2 sm:py-3 text-white placeholder-blue-300/50 focus:border-cyan-400 focus:outline-none transition-all duration-300 text-sm sm:text-base"
                  placeholder="Mengapa Anda ingin bergabung dengan O2? Ceritakan tentang pengalaman gaming, gaya bermain, dan komitmen Anda..."
                />
              </div>

              {/* Terms and Conditions */}
              <div className="flex items-start space-x-3">
                <input
                  type="checkbox"
                  id="terms"
                  checked={acceptedTerms}
                  onChange={(e) => setAcceptedTerms(e.target.checked)}
                  className="mt-1 w-4 h-4 text-cyan-600 bg-slate-700 border-blue-500/30 rounded focus:ring-cyan-500"
                />
                <label htmlFor="terms" className="text-blue-300 text-sm">
                  Saya menyetujui{' '}
                  <button
                    type="button"
                    onClick={() => setShowTerms(true)}
                    className="text-cyan-400 hover:text-cyan-300 underline"
                  >
                    syarat dan ketentuan
                  </button>
                  {' '}yang berlaku untuk platform {formData.platform || 'yang dipilih'}.
                </label>
              </div>

              {/* Submit Button */}
              <div className="text-center pt-6">
                <button
                  type="submit"
                  disabled={isSubmitting || !formData.platform || !acceptedTerms}
                  className="w-full sm:w-auto bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 disabled:from-slate-600 disabled:to-slate-600 text-white font-bold py-3 sm:py-4 px-8 sm:px-12 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-blue-500/25 disabled:cursor-not-allowed disabled:transform-none text-sm sm:text-base"
                >
                  {isSubmitting ? (
                    <div className="flex items-center justify-center">
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                      Memproses Aplikasi...
                    </div>
                  ) : (
                    'KIRIM APLIKASI'
                  )}
                </button>
                
                <p className="text-blue-300/60 text-xs sm:text-sm mt-4">
                  * Aplikasi akan ditinjau dalam 24-48 jam
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Terms Modal */}
      {showTerms && <TermsModal />}
    </div>
  );
};

export default RegisterPage;