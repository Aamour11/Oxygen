import React from 'react';
import { Crosshair, Zap, Shield, Users } from 'lucide-react';

const HeroSection: React.FC = () => {
  return (
    <section id="home" className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 relative overflow-hidden flex items-center">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-75"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-128 h-128 border border-blue-400/20 rounded-full animate-spin-slow"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2 text-cyan-400 font-semibold">
                <Zap className="w-5 h-5" />
                <span>UNIT TAKTIS ELIT</span>
              </div>
              
              <h1 className="text-5xl lg:text-7xl font-black text-white leading-tight">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
                  OXYGEN
                </span>
                <br />
                <span className="text-blue-400">O2 CLAN</span>
              </h1>
              
              <p className="text-xl text-blue-200/80 max-w-lg leading-relaxed">
                Bergabunglah dengan unit taktis Delta Force paling elit. Rasakan presisi, strategi, dan persaudaraan dalam operasi tempur yang intens.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <a
                href="#register"
                className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white font-bold py-3 px-6 lg:py-4 lg:px-8 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-blue-500/25 text-sm lg:text-base"
              >
                GABUNG KLAN O2
              </a>
              <a
                href="#about"
                className="border-2 border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white font-bold py-3 px-6 lg:py-4 lg:px-8 rounded-lg transition-all duration-300 text-sm lg:text-base"
              >
                PELAJARI SELENGKAPNYA
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 lg:gap-8 pt-8">
              <div className="text-center">
                <div className="text-2xl lg:text-3xl font-black text-cyan-400">50+</div>
                <div className="text-blue-300 font-medium text-sm lg:text-base">Anggota Aktif</div>
              </div>
              <div className="text-center">
                <div className="text-2xl lg:text-3xl font-black text-cyan-400">1000+</div>
                <div className="text-blue-300 font-medium text-sm lg:text-base">Misi Menang</div>
              </div>
              <div className="text-center">
                <div className="text-2xl lg:text-3xl font-black text-cyan-400">#1</div>
                <div className="text-blue-300 font-medium text-sm lg:text-base">Klan Taktis</div>
              </div>
            </div>
          </div>

          {/* 3D Visual Element */}
          <div className="relative mt-12 lg:mt-0">
            <div className="relative w-full h-96 flex items-center justify-center">
              {/* Central Logo */}
              <div className="relative z-10" id="oxygen-logo">
                <div className="w-32 h-32 lg:w-48 lg:h-48 bg-gradient-to-br from-blue-600/20 to-cyan-600/20 backdrop-blur-sm border-2 border-blue-400/30 rounded-full flex items-center justify-center animate-float">
                  <div className="text-4xl lg:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
                    O2
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute inset-0">
                <div className="absolute top-8 left-8 animate-float-delayed">
                  <Crosshair className="w-8 h-8 lg:w-12 lg:h-12 text-blue-400/60" />
                </div>
                <div className="absolute top-16 right-16 animate-float-delayed-2">
                  <Shield className="w-6 h-6 lg:w-10 lg:h-10 text-cyan-400/60" />
                </div>
                <div className="absolute bottom-12 left-12 animate-float">
                  <Users className="w-6 h-6 lg:w-8 lg:h-8 text-blue-500/60" />
                </div>
                <div className="absolute bottom-8 right-8 animate-float-delayed">
                  <Zap className="w-6 h-6 lg:w-10 lg:h-10 text-cyan-500/60" />
                </div>
              </div>

              {/* Orbit Rings */}
              <div className="absolute inset-0 border-2 border-blue-400/20 rounded-full animate-spin-slow"></div>
              <div className="absolute inset-8 border border-cyan-400/20 rounded-full animate-reverse-spin"></div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
        }
        
        @keyframes float-delayed-2 {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-25px); }
        }
        
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        @keyframes reverse-spin {
          from { transform: rotate(360deg); }
          to { transform: rotate(0deg); }
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        
        .animate-float-delayed {
          animation: float-delayed 3s ease-in-out infinite;
          animation-delay: 0.5s;
        }
        
        .animate-float-delayed-2 {
          animation: float-delayed-2 3s ease-in-out infinite;
          animation-delay: 1s;
        }
        
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
        
        .animate-reverse-spin {
          animation: reverse-spin 15s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default HeroSection;