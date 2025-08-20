import React from 'react';
import { Target, Shield, Zap, Trophy, Users, Crosshair } from 'lucide-react';

const AboutSection: React.FC = () => {
  const features = [
    {
      icon: Target,
      title: 'Taktik Presisi',
      description: 'Kuasai strategi tempur canggih dan teknik menembak yang presisi.'
    },
    {
      icon: Shield,
      title: 'Pertahanan Tim',
      description: 'Koordinasi operasi defensif dengan sinergi tim yang tak terkalahkan.'
    },
    {
      icon: Zap,
      title: 'Serangan Kilat',
      description: 'Eksekusi misi serangan cepat dengan koordinasi secepat kilat.'
    },
    {
      icon: Trophy,
      title: 'Fokus Kemenangan',
      description: 'Dominasi setiap medan perang dengan mentalitas juara dan skill tinggi.'
    }
  ];

  return (
    <section id="about" className="py-20 bg-slate-800 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <Crosshair className="w-8 h-8 text-blue-400 mr-2" />
            <span className="text-cyan-400 font-semibold text-lg">TENTANG KLAN O2</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-black text-white mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
              Pejuang Elit
            </span>
            <br />
            Bersatu Sebagai Satu
          </h2>
          <p className="text-xl text-blue-200/80 max-w-3xl mx-auto leading-relaxed">
            Oxygen O2 lebih dari sekedar klan - kami adalah persaudaraan operatif Delta Force elit 
            yang berdedikasi pada keunggulan taktis, dominasi strategis, dan loyalitas yang tak tergoyahkan.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-16">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="bg-gradient-to-br from-slate-700/50 to-blue-900/30 backdrop-blur-sm border border-blue-500/20 rounded-xl p-4 lg:p-6 hover:border-cyan-400/40 transition-all duration-300 hover:transform hover:scale-105 group"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg lg:text-xl font-bold text-white mb-2">{feature.title}</h3>
                <p className="text-sm lg:text-base text-blue-200/70">{feature.description}</p>
              </div>
            );
          })}
        </div>

        {/* Mission Statement */}
        <div className="bg-gradient-to-r from-blue-900/30 to-cyan-900/30 backdrop-blur-sm border border-blue-500/20 rounded-2xl p-6 lg:p-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-4">
                <Users className="w-8 h-8 text-cyan-400 mr-3" />
                <h3 className="text-xl lg:text-2xl font-bold text-white">Misi Kami</h3>
              </div>
              <p className="text-sm lg:text-base text-blue-200/80 leading-relaxed mb-6">
                Menciptakan pengalaman gaming taktis terbaik melalui pelatihan yang disiplin, 
                koordinasi strategis, dan saling menghormati. Kami berdiri bersama sebagai satu kekuatan yang bersatu, 
                siap menghadapi tantangan apapun yang disajikan medan perang.
              </p>
              <div className="space-y-2">
                <div className="flex items-center text-cyan-300 text-sm lg:text-base">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></div>
                  <span>Program pelatihan taktis profesional</span>
                </div>
                <div className="flex items-center text-cyan-300 text-sm lg:text-base">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></div>
                  <span>Dukungan komunitas aktif 24/7</span>
                </div>
                <div className="flex items-center text-cyan-300 text-sm lg:text-base">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></div>
                  <span>Turnamen dan acara rutin</span>
                </div>
              </div>
            </div>
            <div className="relative mt-8 lg:mt-0">
              <div className="aspect-square bg-gradient-to-br from-blue-600/20 to-cyan-600/20 backdrop-blur-sm border-2 border-blue-400/30 rounded-full flex items-center justify-center">
                <div className="text-6xl lg:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
                  O2
                </div>
              </div>
              <div className="absolute -top-4 -right-4 w-24 h-24 border-2 border-cyan-400/30 rounded-full animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 border-2 border-blue-400/30 rounded-full animate-pulse delay-75"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;