import React, { useState, useEffect } from 'react';
import LoadingScreen from './components/LoadingScreen';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ProfileSection from './components/ProfileSection';
import RegisterPage from './pages/RegisterPage';
import AdminDashboard from './pages/AdminDashboard';
import Footer from './components/Footer';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState<'home' | 'register' | 'admin'>('home');
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(false);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  const navigateToRegister = () => {
    setCurrentPage('register');
  };

  const navigateToHome = () => {
    setCurrentPage('home');
  };

  const navigateToAdmin = () => {
    // Simple admin authentication - in real app, use proper auth
    const password = prompt('Masukkan password admin:');
    if (password === 'admin123') {
      setIsAdminLoggedIn(true);
      setCurrentPage('admin');
    } else {
      alert('Password salah!');
    }
  };

  const handleAdminLogout = () => {
    setIsAdminLoggedIn(false);
    setCurrentPage('home');
  };

  useEffect(() => {
    // Smooth scrolling for anchor links
    const handleSmoothScroll = (e: Event) => {
      const target = e.target as HTMLAnchorElement;
      if (target.hash) {
        e.preventDefault();
        
        // Handle register link
        if (target.hash === '#register') {
          navigateToRegister();
        } else if (target.hash === '#admin') {
          navigateToAdmin();
        } else {
          // Navigate to home first if not already there
          if (currentPage !== 'home') {
            navigateToHome();
            setTimeout(() => {
              const element = document.querySelector(target.hash);
              if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
              }
            }, 100);
          } else {
            const element = document.querySelector(target.hash);
            if (element) {
              element.scrollIntoView({ behavior: 'smooth' });
            }
          }
        }
      }
    };

    document.addEventListener('click', handleSmoothScroll);
    return () => document.removeEventListener('click', handleSmoothScroll);
  }, [currentPage]);

  if (isLoading) {
    return <LoadingScreen onLoadingComplete={handleLoadingComplete} />;
  }

  if (currentPage === 'register') {
    return <RegisterPage onBack={navigateToHome} />;
  }

  if (currentPage === 'admin' && isAdminLoggedIn) {
    return <AdminDashboard onLogout={handleAdminLogout} />;
  }

  return (
    <div className="min-h-screen bg-slate-900">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <ProfileSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;