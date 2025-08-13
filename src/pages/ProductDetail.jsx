import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { products } from './_data';
import '../styles/Products.css';
import { motion } from 'framer-motion';

export default function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  const product = products.find(p => p.id === id);


  if (!product) {
    return (
      <main className="page">
        <h2>Product not found</h2>
        <button className="btn ghost" onClick={() => navigate('/shop')}>Back to Shop</button>
      </main>
    );
  }

  return (
    <main className="page detail-page">
      <motion.div 
        className="detail-grid"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
       
        <div className="detail-media">
          <img src={product.img} alt={product.name} />
        </div>

   
        <div className="detail-info">
          <h2>{product.name}</h2>
          <p className="short-desc">{product.short}</p>

 
          <p className="price-large">₦199,999.99</p>

        
          {product.features && (
            <ul className="features-list">
              {product.features.map((f, i) => (
                <li key={i}>{f}</li>
              ))}
            </ul>
          )}

     
          <div className="actions">
            <motion.button
              className="btn primary"
              whileTap={{ scale: 0.96 }}
              onClick={() => alert(`₦{product.name} added to cart`)}
            >
              Add to Cart
            </motion.button>
            <button
              className="btn ghost"
              onClick={() => navigate('/shop')}
            >
              Back
            </button>
          </div>
        </div>
      </motion.div>
    </main>
  );
}
