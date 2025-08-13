import React from 'react'
import { motion } from 'framer-motion'
import home1 from '../assets/home1.jpg';
import '../styles/Home.css';
import { products } from './_data';
import ReviewsCarousel from '../components/ReviewsCarousel';



function Section({id, children, className=''}){
  return (
    <section id={id} className={`home-section ${className}`} data-aos="fade-up">
      <div className="container">{children}</div>
    </section>
  )
}

export default function Home(){
  return (
    <main className="home-root">
      <Section id="hero" className="hero-section">
        <div className="hero-grid">
          <div className="hero-copy">
            <h1>Play with Power. Move in Shadow.</h1>
            <p className="lead">Hybrid tech inspired by futurism and stealth. Explore gear engineered for creators and operators.</p>
            <div className="hero-cta">
              <motion.button whileHover={{scale:1.03}} className="btn primary" onClick={()=>document.getElementById('featured').scrollIntoView({behavior:'smooth'})}>Explore Featured</motion.button>
              <motion.button whileHover={{scale:1.03}} className="btn ghost" onClick={()=>document.getElementById('shop').scrollIntoView({behavior:'smooth'})}>Shop Now</motion.button>
            </div>
            <div className="stats-row" data-aos="fade-up">
              <div className="stat"><strong>6</strong><span>Collections</span></div>
              <div className="stat"><strong>120+</strong><span>Devices</span></div>
              <div className="stat"><strong>2yr</strong><span>Avg Battery</span></div>
            </div>
          </div>
          <div className="hero-media" data-aos="zoom-in">
            <div className="media-frame">
            <img src={home1} alt="Featured gadget" />
            </div>
          </div>
        </div>
      </Section>

      <Section id="featured">
        <h2 className="section-title">Featured Gadgets</h2>
        <div className="card-row">
          {products.slice(0,4).map(p=> (
            <article key={p.id} className="feature-card" data-aos="flip-left">
              <img src={p.img} alt={p.name} />
              <div className="fc-body">
                <h3>{p.name}</h3>
                <p className="muted">{p.short}</p>
                <div className="fc-actions">
                  <button className="btn ghost" onClick={()=>window.location.href=`/product/${p.id}`}>Details</button>
                  <button className="btn primary">Buy</button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </Section>

      <Section id="newArrivals">
        <h2 className="section-title">New Arrivals</h2>
        <div className="masonry">
          {products.map(p=> (
            <div key={p.id} className="masonry-item" data-aos="fade-up">
              <img src={p.img} alt={p.name} />
              <div className="mi-body">
                <h4>{p.name}</h4>
                <p className="muted">{p.short}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section id="trending">
        <h2 className="section-title">Trending Now</h2>
        <div className="slider-row" data-aos="fade-left">
          {products.slice(1).map(p=> (
            <div className="slide" key={p.id}>
              <img src={p.img} alt={p.name} />
              <div className="slide-info"><h4>{p.name}</h4><p className="muted">{p.short}</p></div>
            </div>
          ))}
        </div>
      </Section>

     <ReviewsCarousel />


      <Section id="newsletter">
        <h2 className="section-title">Join The Fold</h2>
        <p className="muted">Get early drops and exclusive builds.</p>
        <form className="news-form" onSubmit={(e)=>{e.preventDefault();alert('Subscribed')}} data-aos="zoom-in">
          <input placeholder="Your email" required />
          <button className="btn primary">Subscribe</button>
        </form>
      </Section>
    </main>
  )
}