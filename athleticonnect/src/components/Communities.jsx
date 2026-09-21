import React, { useState } from 'react';

export default function Communities({ communities, setCommunities }) {
  const [name, setName] = useState('');
  
  const handleAdd = (e) => {
    e.preventDefault();
    if(!name) return;
    setCommunities([...communities, {
      id: Date.now(),
      name,
      members: 1,
      abbr: name.substring(0, 3).toUpperCase()
    }]);
    setName('');
  };

  return (
    <div>
      <h2 style={{ marginBottom: '0.5rem' }}>Communities</h2>
      <p style={{ color: 'var(--text-muted)', marginBottom: '2rem' }}>Find and join communities for your favorite sports.</p>
      
      <div className="grid-auto">
        <form className="card" onSubmit={handleAdd} style={{ border: '2px dashed var(--border-color)', textAlign: 'center', display: 'flex', flexDirection: 'column', gap: '10px' }}>
          <i className="fas fa-plus" style={{ fontSize: '1.5rem', color: 'var(--text-muted)' }}></i>
          <input type="text" className="form-input" style={{ margin: 0, textAlign: 'center' }} placeholder="Community Name..." value={name} onChange={e => setName(e.target.value)} required />
          <button type="submit" style={{ justifyContent: 'center' }}>Create Community</button>
        </form>

        {communities.map(comm => (
          <div key={comm.id} className="card" style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <div className="avatar" style={{ background: '#f59e0b', color: 'white' }}>{comm.abbr}</div>
            <div>
              <h3 style={{ fontSize: '1.1rem' }}>{comm.name}</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>{comm.members} members</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}