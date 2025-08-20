import React, { useState } from 'react';
import { Menu, X, Target, Users, UserPlus, Home } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigationItems = [
    { name: 'Beranda', href: '#home', icon: Home },
    { name: 'Tentang', href: '#about', icon: Target },
    { name: 'Profil Tim', href: '#profiles', icon: Users },
    { name: 'Daftar', href: '#register', icon: UserPlus },
  ];

  return (
    <header className="fixed top-0 w-full bg-slate-900/95 backdrop-blur-md border-b border-blue-500/20 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#home" className="flex items-center space-x-2 hover:scale-105 transition-transform">
            <div className="relative">
              <Target className="w-8 h-8 text-blue-400 animate-pulse" />
              <div className="absolute inset-0 w-8 h-8 border-2 border-cyan-400 rounded-full animate-ping opacity-30"></div>
            </div>
            <div>
              <span className="text-2xl font-black text-blue-400">O2</span>
              <span className="text-sm text-blue-300 ml-2">OXYGEN</span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigationItems.map((item) => {
              const Icon = item.icon;
              return (
                <a
                  key={item.name}
                  href={item.href}
                  className="flex items-center space-x-1 text-blue-300 hover:text-cyan-300 transition-all duration-300 group"
                >
                  <Icon className="w-4 h-4 group-hover:scale-110 transition-transform" />
                  <span className="font-medium">{item.name}</span>
                </a>
              );
            })}
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-blue-300 hover:text-cyan-300 transition-colors"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-blue-500/20">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigationItems.map((item) => {
                const Icon = item.icon;
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    className="flex items-center space-x-2 text-blue-300 hover:text-cyan-300 hover:bg-blue-900/30 px-3 py-2 rounded-md transition-all duration-300"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <Icon className="w-4 h-4" />
                    <span className="font-medium">{item.name}</span>
                  </a>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;