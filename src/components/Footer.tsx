import React from 'react';
import { Target, MessageCircle, Users, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 border-t border-blue-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Target className="w-8 h-8 text-blue-400" />
              <div>
                <span className="text-2xl font-black text-blue-400">O2</span>
                <span className="text-sm text-blue-300 ml-2">OXYGEN</span>
              </div>
            </div>
            <p className="text-blue-200/70">
              Unit taktis Delta Force elite yang berdedikasi pada presisi, strategi, dan persaudaraan dalam operasi tempur.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold mb-4">Tautan Cepat</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="text-blue-300 hover:text-cyan-300 transition-colors">Beranda</a></li>
              <li><a href="#about" className="text-blue-300 hover:text-cyan-300 transition-colors">Tentang</a></li>
              <li><a href="#profiles" className="text-blue-300 hover:text-cyan-300 transition-colors">Profil Tim</a></li>
              <li><a href="#register" className="text-blue-300 hover:text-cyan-300 transition-colors">Bergabung</a></li>
              <li><a href="#admin" className="text-blue-300 hover:text-cyan-300 transition-colors">Admin</a></li>
            </ul>
          </div>

          {/* Community */}
          <div>
            <h3 className="text-white font-bold mb-4">Komunitas</h3>
            <ul className="space-y-2">
              <li className="flex items-center text-blue-300">
                <MessageCircle className="w-4 h-4 mr-2" />
                Server Discord
              </li>
              <li className="flex items-center text-blue-300">
                <Users className="w-4 h-4 mr-2" />
                Forum Klan
              </li>
              <li className="flex items-center text-blue-300">
                <Mail className="w-4 h-4 mr-2" />
                Jadwal Latihan
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-bold mb-4">Kontak</h3>
            <div className="space-y-2">
              <p className="text-blue-300">Kantor Rekrutmen</p>
              <p className="text-blue-200/70">discord.gg/oxygeno2</p>
              <p className="text-blue-200/70">recruitment@o2clan.com</p>
            </div>
          </div>
        </div>

        <div className="border-t border-blue-500/20 mt-12 pt-8 text-center">
          <p className="text-blue-300/70">
            © 2024 Klan Oxygen O2. Semua hak dilindungi. | Unit Taktis Delta Force Elite
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;