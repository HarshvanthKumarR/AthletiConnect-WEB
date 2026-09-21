import React from 'react';

export default function Profile({ currentUser, posts, goToEditProfile }) {
  // Derive achievements dynamically from the user's feed
  const userPostsWithImages = posts.filter(p => p.username === currentUser?.username && p.image);

  return (
    <div>
      <div className="card" style={{ display: 'flex', alignItems: 'center', gap: '2rem', marginBottom: '1rem' }}>
        <div className="avatar" style={{ width: '120px', height: '120px', fontSize: '3rem' }}>
          {currentUser?.initials}
        </div>
        <div style={{ flex: 1 }}>
          <h2 style={{ marginBottom: '0.5rem' }}>{currentUser?.name}</h2>
          <p style={{ color: 'var(--text-muted)', marginBottom: '1rem' }}>{currentUser?.bio}</p>
          <div style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>
            <p><i className="fas fa-running" style={{ width: '20px' }}></i> **Interested Sports:** Running, Tennis, Cycling</p>
            <p><i className="fas fa-venus-mars" style={{ width: '20px' }}></i> **Gender:** {currentUser?.gender}</p>
          </div>
        </div>
        
        {/* FIX: Attached goToEditProfile to the onClick event here */}
        <button 
          onClick={goToEditProfile} 
          className="danger-outline" 
          style={{ border: '1px solid var(--accent-blue)', color: 'var(--accent-blue)' }}
        >
          Edit Profile
        </button>
      </div>

      <div className="card" style={{ display: 'flex', justifyContent: 'space-around', marginBottom: '2rem', padding: '1rem' }}>
        <div style={{ textAlign: 'center' }}><h2>{posts.length}</h2><span style={{ color: 'var(--text-muted)' }}>Posts</span></div>
        <div style={{ textAlign: 'center' }}><h2>0</h2><span style={{ color: 'var(--text-muted)' }}>Followers</span></div>
        <div style={{ textAlign: 'center' }}><h2>0</h2><span style={{ color: 'var(--text-muted)' }}>Following</span></div>
      </div>

      <h3 style={{ marginBottom: '1rem' }}>Your Achievements</h3>
      {userPostsWithImages.length === 0 ? (
        <p style={{ color: 'var(--text-muted)' }}>No achievements yet. Add posts with titles to earn them!</p>
      ) : (
        <div className="grid-auto">
          {userPostsWithImages.map((post, i) => (
             <img key={i} src={post.image} className="img-placeholder" style={{ aspectRatio: '1/1' }} alt="Achievement" />
          ))}
        </div>
      )}
    </div>
  );
}
