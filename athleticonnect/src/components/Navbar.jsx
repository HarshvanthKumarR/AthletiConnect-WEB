import React from 'react';

export default function Navbar({ currentPage, setCurrentPage, isSettingsOpen, setIsSettingsOpen, tourStep }) {
  
  const handleNavClick = (page) => {
    if (tourStep > 0) return; // Disable clicks during tour
    setCurrentPage(page);
    setIsSettingsOpen(false);
  };

  return (
    <header className={`navbar ${tourStep === 1 ? 'tour-highlight' : ''}`}>
      <div className="container">
        <h1 className="logo">AthletiConnect</h1>
        <ul className="nav-links">
          <li><a href="#" className={currentPage === 'home' && !isSettingsOpen ? 'active' : ''} onClick={(e) => { e.preventDefault(); handleNavClick('home'); }}><i className="fas fa-home"></i> Home</a></li>
          <li><a href="#" className={currentPage === 'communities' && !isSettingsOpen ? 'active' : ''} onClick={(e) => { e.preventDefault(); handleNavClick('communities'); }}><i className="fas fa-users"></i> Communities</a></li>
          <li><a href="#" className={currentPage === 'marketplace' && !isSettingsOpen ? 'active' : ''} onClick={(e) => { e.preventDefault(); handleNavClick('marketplace'); }}><i className="fas fa-store"></i> Marketplace</a></li>
          <li><a href="#" className={currentPage === 'profile' && !isSettingsOpen ? 'active' : ''} onClick={(e) => { e.preventDefault(); handleNavClick('profile'); }}><i className="fas fa-user"></i> Profile</a></li>
          <li>
            <a href="#" className={isSettingsOpen ? 'active' : ''} onClick={(e) => { e.preventDefault(); if(tourStep === 0) setIsSettingsOpen(!isSettingsOpen); }}>
              <i className={`fas fa-cog gear-icon ${isSettingsOpen ? 'spin' : ''}`}></i>
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
