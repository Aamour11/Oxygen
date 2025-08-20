import React from 'react';
import { Crown, Code, Instagram, MessageCircle, Mail } from 'lucide-react';

const ProfileSection: React.FC = () => {
  const profiles = [
    {
      role: 'Owner & Leader',
      name: 'CommanderO2',
      nickname: 'O2_Commander',
      photo: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
      description: 'Pemimpin strategis dengan pengalaman 8+ tahun dalam tactical gaming',
      social: {
        discord: 'CommanderO2#1234',
        instagram: '@commandero2',
        email: 'commander@o2clan.com'
      },
      icon: Crown
    },
    {
      role: 'Developer & Co-Leader',
      name: 'DevO2Tech',
      nickname: 'O2_Developer',
      photo: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
      description: 'Full-stack developer dan tactical analyst untuk sistem klan',
      social: {
        discord: 'DevO2Tech#5678',
        instagram: '@devo2tech',
        email: 'dev@o2clan.com'
      },
      icon: Code
    }
  ];

  return (
    <section id="profiles" className="py-20 bg-slate-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <Crown className="w-8 h-8 text-blue-400 mr-2" />
            <span className="text-cyan-400 font-semibold text-lg">TIM LEADERSHIP</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-black text-white mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
              Profil Tim
            </span>
            <br />
            Oxygen O2
          </h2>
          <p className="text-xl text-blue-200/80 max-w-3xl mx-auto leading-relaxed">
            Berkenalan dengan para pemimpin dan developer yang membangun komunitas O2 menjadi klan elit terdepan.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {profiles.map((profile, index) => {
            const Icon = profile.icon;
            return (
              <div
                key={index}
                className="bg-gradient-to-br from-slate-800/50 to-blue-900/30 backdrop-blur-sm border border-blue-500/20 rounded-2xl p-6 lg:p-8 hover:border-cyan-400/40 transition-all duration-300 hover:transform hover:scale-105 group"
              >
                <div className="flex flex-col items-center text-center">
                  {/* Profile Photo */}
                  <div className="relative mb-6">
                    <div className="w-32 h-32 lg:w-40 lg:h-40 rounded-full overflow-hidden border-4 border-blue-500/30 group-hover:border-cyan-400/50 transition-colors">
                      <img 
                        src={profile.photo} 
                        alt={profile.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="absolute -top-2 -right-2 w-12 h-12 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-full flex items-center justify-center">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                  </div>

                  {/* Profile Info */}
                  <div className="mb-6">
                    <div className="text-cyan-400 font-semibold text-sm mb-1">{profile.role}</div>
                    <h3 className="text-2xl font-bold text-white mb-2">{profile.name}</h3>
                    <div className="text-blue-300 font-medium mb-3">@{profile.nickname}</div>
                    <p className="text-blue-200/70 text-sm lg:text-base leading-relaxed">
                      {profile.description}
                    </p>
                  </div>

                  {/* Social Links */}
                  <div className="space-y-3 w-full">
                    <div className="flex items-center justify-center space-x-2 text-blue-300 hover:text-cyan-300 transition-colors">
                      <MessageCircle className="w-4 h-4" />
                      <span className="text-sm">{profile.social.discord}</span>
                    </div>
                    <div className="flex items-center justify-center space-x-2 text-blue-300 hover:text-cyan-300 transition-colors">
                      <Instagram className="w-4 h-4" />
                      <span className="text-sm">{profile.social.instagram}</span>
                    </div>
                    <div className="flex items-center justify-center space-x-2 text-blue-300 hover:text-cyan-300 transition-colors">
                      <Mail className="w-4 h-4" />
                      <span className="text-sm">{profile.social.email}</span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Clan Description */}
        <div className="mt-16 bg-gradient-to-r from-blue-900/30 to-cyan-900/30 backdrop-blur-sm border border-blue-500/20 rounded-2xl p-6 lg:p-12">
          <div className="text-center">
            <h3 className="text-2xl lg:text-3xl font-bold text-white mb-6">Tentang Tim Oxygen O2</h3>
            <p className="text-base lg:text-lg text-blue-200/80 leading-relaxed max-w-4xl mx-auto mb-8">
              Oxygen O2 adalah klan Delta Force elite yang didirikan dengan visi menciptakan komunitas gaming taktis terbaik di Indonesia. 
              Kami mengutamakan skill, strategi, dan sportivitas dalam setiap pertandingan. Tim kami terdiri dari pemain berpengalaman 
              yang siap membimbing member baru untuk berkembang menjadi operator taktis yang handal.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-3xl font-black text-cyan-400 mb-2">2019</div>
                <div className="text-blue-300">Tahun Berdiri</div>
              </div>
              <div>
                <div className="text-3xl font-black text-cyan-400 mb-2">50+</div>
                <div className="text-blue-300">Member Aktif</div>
              </div>
              <div>
                <div className="text-3xl font-black text-cyan-400 mb-2">1000+</div>
                <div className="text-blue-300">Kemenangan</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfileSection;