import React, { useState } from 'react';

export default function Marketplace({ products, setProducts }) {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [desc, setDesc] = useState('');
  const [showForm, setShowForm] = useState(false);

  const handleAdd = (e) => {
    e.preventDefault();
    if(!name || !price) return;
    
    // Auto-generate placeholder block matching your screenshots
    const generatedImg = `https://placehold.co/300x200/CBA/333?text=${name.split(' ').join('+')}`;
    
    setProducts([{ id: Date.now(), name, price: parseFloat(price).toFixed(2), desc, img: generatedImg }, ...products]);
    setName(''); setPrice(''); setDesc(''); setShowForm(false);
  };

  const removeProd = (id) => {
    setProducts(products.filter(p => p.id !== id));
  };

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
        <h2>Marketplace</h2>
        <button onClick={() => setShowForm(!showForm)}><i className="fas fa-plus"></i> Add Product</button>
      </div>
      <p style={{ color: 'var(--text-muted)', marginBottom: '2rem' }}>Buy and sell used sports equipment from other members.</p>

      {showForm && (
        <form className="card" onSubmit={handleAdd} style={{ marginBottom: '2rem' }}>
          <input type="text" className="form-input" placeholder="Product Name" value={name} onChange={e=>setName(e.target.value)} required />
          <input type="number" className="form-input" placeholder="Price" value={price} onChange={e=>setPrice(e.target.value)} required />
          <input type="text" className="form-input" placeholder="Description" value={desc} onChange={e=>setDesc(e.target.value)} />
          <button type="submit">Post Listing</button>
        </form>
      )}

      {products.length === 0 && <p style={{ color: 'var(--text-muted)' }}>No items listed yet.</p>}

      <div className="grid-auto">
        {products.map(p => (
          <div key={p.id} className="card" style={{ padding: 0, overflow: 'hidden' }}>
            <img src={p.img} className="img-placeholder" style={{ borderRadius: 0, height: '200px' }} alt={p.name} />
            <div style={{ padding: '1rem' }}>
              <h3>{p.name}</h3>
              <p style={{ fontWeight: 'bold', margin: '0.5rem 0' }}>${p.price}</p>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '1rem' }}>{p.desc}</p>
              <div style={{ display: 'flex', gap: '10px' }}>
                <button>View Details</button>
                <button className="danger-outline" onClick={() => removeProd(p.id)}><i className="fas fa-trash"></i></button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}