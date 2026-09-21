import React from 'react';

export default function Settings({ handleLogout, closeSettings, isDarkMode, setIsDarkMode, goToEditProfile, currentUser }) {
  return (
    <div className="settings-overlay" onClick={closeSettings}>
      <div className="settings-modal" onClick={e => e.stopPropagation()}>
        
        <button className="settings-close-btn" onClick={closeSettings}>
          <i className="fas fa-times"></i>
        </button>
        
        {/* Big Username at the top */}
        <h2 style={{ textAlign: 'center', fontSize: '2.2rem', margin: '0 0 1.5rem 0', color: 'var(--accent-blue)' }}>
          @{currentUser?.username}
        </h2>
        
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          
          <div onClick={goToEditProfile} style={{ padding: '1rem 0', borderBottom: '1px solid var(--border-color)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', cursor: 'pointer' }}>
            <span><i className="fas fa-user-edit" style={{ width: '25px', color: 'var(--text-muted)' }}></i> Edit Profile</span>
          </div>

          <div style={{ padding: '1rem 0', borderBottom: '1px solid var(--border-color)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span><i className="fas fa-moon" style={{ width: '25px', color: 'var(--text-muted)' }}></i> Dark Mode</span>
            <div 
              onClick={() => setIsDarkMode(!isDarkMode)} 
              style={{ width: '40px', height: '22px', background: isDarkMode ? 'var(--accent-blue)' : '#555', borderRadius: '20px', position: 'relative', cursor: 'pointer', transition: 'background 0.3s' }}
            >
              <div style={{ width: '18px', height: '18px', background: 'white', borderRadius: '50%', position: 'absolute', top: '2px', left: isDarkMode ? '20px' : '2px', transition: 'left 0.3s' }}></div>
            </div>
          </div>

          <div style={{ padding: '1rem 0', borderBottom: '1px solid var(--border-color)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span><i className="fas fa-shield-alt" style={{ width: '25px', color: 'var(--text-muted)' }}></i> Privacy & Security</span>
          </div>

          <div style={{ padding: '1rem 0', borderBottom: '1px solid var(--border-color)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span><i className="fas fa-bell" style={{ width: '25px', color: 'var(--text-muted)' }}></i> Notifications</span>
          </div>

          {/* Switch User */}
          <div onClick={handleLogout} style={{ padding: '1rem 0', borderBottom: '1px solid var(--border-color)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', cursor: 'pointer' }}>
            <span><i className="fas fa-users" style={{ width: '25px', color: 'var(--text-muted)' }}></i> Switch User</span>
          </div>

          {/* Red Logout Button */}
          <div onClick={handleLogout} style={{ padding: '1rem 0', color: 'var(--danger-color)', cursor: 'pointer', marginTop: '0.5rem', display: 'flex', alignItems: 'center', fontWeight: '600' }}>
            <span><i className="fas fa-sign-out-alt" style={{ width: '25px' }}></i> Log Out</span>
          </div>

        </div>
      </div>
    </div>
  );
}
