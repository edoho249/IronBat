import React from 'react'
import { products } from './_data'
import { useNavigate } from 'react-router-dom'
import '../styles/Shop.css';

export default function Shop(){
  const navigate = useNavigate()
  return (
    <main className="page" id="shop">
      <h2 className="page-title">Shop</h2>
      <p className="muted">Browse collections, filter by type, and click any item to view details.</p>
      <div className="grid">
        {products.map(p=> (
          <div key={p.id} className="card product" onClick={()=>navigate(`/product/${p.id}`)}>
            <div className="card-media"><img src={p.img} alt={p.name} /></div>
            <div className="card-body"><h3>{p.name}</h3><p className="muted">{p.short}</p><div className="card-foot"><div className="price">{p.price}</div></div></div>
          </div>
        ))}
      </div>
    </main>
  )
}