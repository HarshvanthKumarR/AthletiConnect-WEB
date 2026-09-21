import React, { useState, useEffect } from 'react';

export default function ProfileModal({ currentUser, onSave, onClose, isSetup }) {
  const [name, setName] = useState(currentUser?.name || '');
  const [username, setUsername] = useState(currentUser?.username || '');
  const [dob, setDob] = useState(currentUser?.dob || '');
  const [gender, setGender] = useState(currentUser?.gender || '');
  const [bio, setBio] = useState(currentUser?.bio || '');
  const [age, setAge] = useState(currentUser?.age || '');
  const [error, setError] = useState('');

  // Auto-fetch age based on DOB
  useEffect(() => {
    if (dob) {
      const birthDate = new Date(dob);
      const today = new Date(); 
      let calculatedAge = today.getFullYear() - birthDate.getFullYear();
      const m = today.getMonth() - birthDate.getMonth();
      if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        calculatedAge--;
      }
      setAge(calculatedAge >= 0 ? calculatedAge : 0);
    } else {
      setAge('');
    }
  }, [dob]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    
    // Instagram-style validation: Must have at least one letter. Can contain letters, numbers, underscores.
    const usernameRegex = /^(?=.*[a-zA-Z])[a-zA-Z0-9_]+$/;
    if (!usernameRegex.test(username)) {
      setError('Username must contain at least one letter and only allow letters, numbers, and underscores.');
      return;
    }

    if (!name || !username || !dob || !gender) {
      setError('Please fill out all required fields.');
      return;
    }

    onSave({ name, username, dob, age, gender, bio, initials: name.substring(0, 2).toUpperCase() });
  };

  return (
    <div className="settings-overlay" onClick={!isSetup ? onClose : undefined}>
      <div className="settings-modal" onClick={e => e.stopPropagation()} style={{ maxHeight: '90vh', overflowY: 'auto' }}>
        
        {!isSetup && (
          <button className="settings-close-btn" onClick={onClose}><i className="fas fa-times"></i></button>
        )}
        
        <h2 style={{ marginBottom: '0.5rem', marginTop: 0 }}>
          {isSetup ? 'Set Up Your Profile' : 'Edit Profile'}
        </h2>
        <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '1.5rem' }}>
          {isSetup ? 'Please complete your details to join the community.' : 'Update your personal details below.'}
        </p>

        {error && <div style={{ color: 'var(--danger-color)', marginBottom: '1rem', fontSize: '0.9rem', fontWeight: 'bold' }}>{error}</div>}

        <form onSubmit={handleSubmit}>
          <label>Name *</label>
          <input type="text" className="form-input" value={name} onChange={e => setName(e.target.value)} required />

          <label>Username *</label>
          <input type="text" className="form-input" value={username} onChange={e => setUsername(e.target.value.toLowerCase())} required placeholder="e.g. athlete_99" />

          <div style={{ display: 'flex', gap: '1rem', marginBottom: '1rem' }}>
            <div style={{ flex: 1 }}>
              <label>Date of Birth *</label>
              <input type="date" className="form-input" style={{ marginBottom: 0 }} value={dob} onChange={e => setDob(e.target.value)} required />
            </div>
            <div style={{ width: '80px' }}>
              <label>Age</label>
              <input type="text" className="form-input" style={{ marginBottom: 0, background: 'transparent', textAlign: 'center', borderColor: 'transparent' }} value={age} disabled placeholder="-" />
            </div>
          </div>

          <label>Gender *</label>
          <select className="form-input" value={gender} onChange={e => setGender(e.target.value)} required>
            <option value="" disabled>Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Non-Binary">Non-Binary</option>
            <option value="Transgender">Transgender</option>
            <option value="Prefer not to say">Prefer not to say</option>
            <option value="Other">Other</option>
          </select>

          <label>Bio (Optional)</label>
          <textarea className="form-input" rows="3" value={bio} onChange={e => setBio(e.target.value)} placeholder="Tell us about your achievements and your favorite sports..."></textarea>

          <button type="submit" style={{ width: '100%', justifyContent: 'center' }}>
            {isSetup ? 'Complete Profile & Enter' : 'Save Changes'}
          </button>
        </form>
      </div>
    </div>
  );
}
