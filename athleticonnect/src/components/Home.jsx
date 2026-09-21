import React, { useState } from 'react';

export default function Home({ currentUser, posts, setPosts, tourStep }) {
  const [text, setText] = useState('');
  const [imgUrl, setImgUrl] = useState('');

  const handlePost = (e) => {
    e.preventDefault();
    if (!text || tourStep > 0) return; // Prevent posting during tour

    let finalImg = imgUrl;
    if (text && !imgUrl) {
       finalImg = `https://placehold.co/600x400/EAD/333?text=${text.split(' ').join('+')}`;
    }

    setPosts([{
      id: Date.now(),
      author: currentUser.name,
      username: currentUser.username,
      initials: currentUser.initials,
      content: text,
      image: finalImg
    }, ...posts]);
    
    setText(''); setImgUrl('');
  };

  return (
    <div>
      {/* This box pops out above the blur during Tour Step 2 */}
      <div className={`card ${tourStep === 2 ? 'tour-highlight' : ''}`} style={{ display: 'flex', gap: '1rem', alignItems: 'center', marginBottom: '2rem' }}>
        <div className="avatar">{currentUser?.initials}</div>
        <form onSubmit={handlePost} style={{ display: 'flex', flex: 1, gap: '10px' }}>
          <input type="text" className="form-input" style={{ margin: 0 }} placeholder="Share your achievement..." value={text} onChange={e => setText(e.target.value)} required />
          <button type="submit">Post</button>
        </form>
      </div>

      <h2 style={{ marginBottom: '1rem' }}>Your Feed</h2>
      
      {posts.length === 0 ? (
        <p style={{ color: 'var(--text-muted)' }}>No posts yet. Be the first to post!</p>
      ) : (
        posts.map(post => (
          <div key={post.id} className="card" style={{ marginBottom: '1rem', padding: 0 }}>
            <div className="post-header" style={{ padding: '1.5rem 1.5rem 0' }}>
              <div className="avatar">{post.initials}</div>
              <div>
                <strong>{post.author}</strong><br/>
                <small style={{ color: 'var(--text-muted)' }}>Just now</small>
              </div>
            </div>
            {post.image && <img src={post.image} className="img-placeholder" style={{ borderRadius: 0, marginTop: '1rem', maxHeight: '400px' }} alt="Post" />}
            <div style={{ padding: '0 1.5rem 1.5rem' }}>
              <div className="post-actions">
                <button><i className="far fa-heart"></i> Like</button>
                <button><i className="far fa-comment"></i> Comment</button>
                <button><i className="fas fa-share"></i> Share</button>
              </div>
              <p><strong>{post.username}:</strong> {post.content}</p>
            </div>
          </div>
        ))
      )}
    </div>
  );
}
