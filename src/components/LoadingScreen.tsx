import React, { useState, useEffect } from 'react';
import { Target, Zap } from 'lucide-react';

interface LoadingScreenProps {
  onLoadingComplete: () => void;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ onLoadingComplete }) => {
  const [progress, setProgress] = useState(0);
  const [loadingText, setLoadingText] = useState('Memuat...');

  const loadingTexts = [
    'Memuat...',
    'Menginisialisasi Sistem...',
    'Memuat Persenjataan...',
    'Menyiapkan Misi...',
    'Menghubungkan ke Base...',
    'Siap Bertempur!'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        const newProgress = prev + Math.random() * 15;
        
        // Update loading text based on progress
        const textIndex = Math.floor((newProgress / 100) * loadingTexts.length);
        setLoadingText(loadingTexts[Math.min(textIndex, loadingTexts.length - 1)]);
        
        if (newProgress >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            onLoadingComplete();
          }, 500);
          return 100;
        }
        return newProgress;
      });
    }, 200);

    return () => clearInterval(interval);
  }, [onLoadingComplete]);

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 flex items-center justify-center z-50">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-75"></div>
      </div>

      <div className="relative z-10 text-center">
        {/* Main Logo */}
        <div className="relative mb-8">
          <div className="w-32 h-32 mx-auto bg-gradient-to-br from-blue-600/20 to-cyan-600/20 backdrop-blur-sm border-2 border-blue-400/30 rounded-full flex items-center justify-center animate-pulse">
            <Target className="w-16 h-16 text-blue-400 animate-spin" style={{ animationDuration: '3s' }} />
          </div>
          
          {/* Orbit Ring */}
          <div className="absolute inset-0 border-2 border-blue-400/20 rounded-full animate-spin" style={{ animationDuration: '4s' }}></div>
          
          {/* Floating Elements */}
          <div className="absolute -top-4 -right-4">
            <Zap className="w-8 h-8 text-cyan-400 animate-bounce" />
          </div>
        </div>

        {/* Brand Text */}
        <div className="mb-8">
          <h1 className="text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300 mb-2">
            O2
          </h1>
          <p className="text-2xl font-bold text-blue-300 tracking-wider">
            OXYGEN
          </p>
          <p className="text-blue-400 font-medium mt-2">
            UNIT TAKTIS ELITE
          </p>
        </div>

        {/* Progress Bar */}
        <div className="w-80 mx-auto mb-6">
          <div className="bg-slate-700/50 rounded-full h-2 overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-blue-500 to-cyan-400 transition-all duration-300 ease-out"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          <div className="flex justify-between text-sm text-blue-300 mt-2">
            <span>{Math.round(progress)}%</span>
            <span>MEMUAT SISTEM</span>
          </div>
        </div>

        {/* Loading Text */}
        <p className="text-blue-200 font-medium animate-pulse">
          {loadingText}
        </p>

        {/* Tactical Elements */}
        <div className="absolute top-20 left-20 opacity-20">
          <div className="w-4 h-4 border-2 border-blue-400 rotate-45"></div>
        </div>
        <div className="absolute bottom-20 right-20 opacity-20">
          <div className="w-6 h-6 border-2 border-cyan-400 rounded-full"></div>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;