import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Marketplace from './components/Marketplace';
import Communities from './components/Communities';
import Profile from './components/Profile';
import Settings from './components/Settings';
import Login from './components/Login';
import ProfileModal from './components/ProfileModal';

export default function App() {
  const [appState, setAppState] = useState('login'); // 'login', 'setup', 'loading', 'main'
  const [currentPage, setCurrentPage] = useState('home');
  const [isSettingsOpen, setIsSettingsOpen] = useState(false); 
  const [isEditProfileOpen, setIsEditProfileOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true); 
  
  // Tour State
  const [tourStep, setTourStep] = useState(0); // 0 = off, 1 = Nav, 2 = Post, 3 = Bottom Bar
  
  const [currentUser, setCurrentUser] = useState(null);
  const [posts, setPosts] = useState([]);
  const [products, setProducts] = useState([]);
  const [communities, setCommunities] = useState([]);

  useEffect(() => {
    document.body.classList.toggle('dark-mode', isDarkMode);
  }, [isDarkMode]);

  const handleLogin = () => {
    setCurrentUser({}); 
    setAppState('setup');
  };

  const handleProfileSave = (updatedData) => {
    setCurrentUser({ ...currentUser, ...updatedData });
    if (appState === 'setup') {
      setAppState('loading'); // Trigger loading screen transition
      setTimeout(() => {
        setAppState('main');
        setTourStep(1); // Launch Walkthrough Tour
      }, 2500);
    }
    setIsEditProfileOpen(false);
  };

  const handleLogout = () => {
    setCurrentUser(null);
    setIsSettingsOpen(false);
    setIsEditProfileOpen(false);
    setTourStep(0);
    setAppState('login');
  };

  const goToEditProfile = () => {
    setIsSettingsOpen(false);
    setIsEditProfileOpen(true);
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home': return <Home currentUser={currentUser} posts={posts} setPosts={setPosts} tourStep={tourStep} />;
      case 'communities': return <Communities communities={communities} setCommunities={setCommunities} />;
      case 'marketplace': return <Marketplace products={products} setProducts={setProducts} />;
      case 'profile': return <Profile currentUser={currentUser} posts={posts} goToEditProfile={goToEditProfile} />;
      default: return <Home currentUser={currentUser} posts={posts} setPosts={setPosts} tourStep={tourStep} />;
    }
  };

  const renderWalkthrough = () => {
    if (tourStep === 0) return null;
    let title, desc;
    if (tourStep === 1) { title = "Navigation Hub"; desc = "Jump between your feed, sport communities, and the marketplace."; }
    if (tourStep === 2) { title = "Share Your Wins"; desc = "Post your latest PRs, match results, and updates right here."; }
    if (tourStep === 3) { title = "Quick ID"; desc = "Your active profile username stays docked at the bottom of the screen."; }

    return (
      <div className="walkthrough-overlay">
        <div className="card walkthrough-box" style={{ zIndex: 3002, position: 'relative', textAlign: 'center', maxWidth: '400px', marginTop: tourStep === 1 ? '150px' : '0' }}>
          <h3 style={{ color: 'var(--accent-blue)' }}>{title}</h3>
          <p style={{ color: 'var(--text-muted)', margin: '1rem 0' }}>{desc}</p>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '1.5rem' }}>
            <button className="danger-outline" onClick={() => setTourStep(0)}>Skip Tour</button>
            <button onClick={() => setTourStep(tourStep < 3 ? tourStep + 1 : 0)}>
              {tourStep < 3 ? "Next Step" : "Let's Go!"}
            </button>
          </div>
        </div>
      </div>
    );
  };

  if (appState === 'login') return <Login handleLogin={handleLogin} />;
  if (appState === 'setup') return <ProfileModal currentUser={currentUser} onSave={handleProfileSave} isSetup={true} />;
  
  if (appState === 'loading') {
    return (
      <div className="page-fullscreen" style={{ flexDirection: 'column', textAlign: 'center' }}>
        <i className="fas fa-circle-notch fa-spin logo" style={{ fontSize: '4rem', marginBottom: '1.5rem' }}></i>
        <h2>Preparing your locker...</h2>
        <p style={{ color: 'var(--text-muted)' }}>Lacing up the cleats.</p>
      </div>
    );
  }

  return (
    <>
      <Navbar 
        currentPage={currentPage} 
        setCurrentPage={setCurrentPage} 
        isSettingsOpen={isSettingsOpen} 
        setIsSettingsOpen={setIsSettingsOpen} 
        tourStep={tourStep}
      />
      
      <main className="container" style={{ padding: '2rem 1.5rem 4rem 1.5rem' }}>
        {renderPage()}
      </main>

      {renderWalkthrough()}

      {isSettingsOpen && (
        <Settings 
          handleLogout={handleLogout} 
          closeSettings={() => setIsSettingsOpen(false)}
          isDarkMode={isDarkMode}
          setIsDarkMode={setIsDarkMode}
          goToEditProfile={goToEditProfile}
          currentUser={currentUser}
        />
      )}

      {isEditProfileOpen && (
        <ProfileModal 
          currentUser={currentUser} 
          onSave={handleProfileSave} 
          onClose={() => setIsEditProfileOpen(false)} 
          isSetup={false} 
        />
      )}

      {!isSettingsOpen && !isEditProfileOpen && currentUser?.username && (
        <div className={`bottom-user-bar ${tourStep === 3 ? 'tour-highlight' : ''}`}>
          Signed in as: <strong>@{currentUser.username}</strong>
        </div>
      )}
    </>
  );
}
