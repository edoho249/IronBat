import React, { useState } from 'react'
import { motion } from 'framer-motion'

const items = [
  { id:1, name:'Ada Nwankwo', text:'The Arc Reactor doubled my runtime. Solid build and quick support.', img:'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=60' },
  { id:2, name:'Chike Obi', text:'Stealth Drone is artful — silent and sharp. Night shots came alive.', img:'https://images.unsplash.com/photo-1545996124-1f1607ee7f0b?auto=format&fit=crop&w=200&q=60' },
  { id:3, name:'Ngozi Eze', text:'SmartGauntlet made my workflow hands-free. Haptics are nice.', img:'https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?auto=format&fit=crop&w=200&q=60' }
]

export default function Testimonials(){
  const [index,setIndex] = useState(0)
  const prev = ()=> setIndex(i=> i===0? items.length-1 : i-1)
  const next = ()=> setIndex(i=> i===items.length-1? 0 : i+1)
  return (
    <main className="page testimonials-page">
      <h2 className="page-title">Testimonials</h2>
      <div className="testimonials-wrap">
        <button className="t-arrow left" onClick={prev} aria-label="Previous">◀</button>
        <div className="test-view">
          {items.map((it,i)=> (
            <motion.article key={it.id} className={`test-card ${i===index? 'active':''}`} initial={{opacity:0,scale:0.98}} animate={{opacity:i===index?1:0.3,scale:i===index?1:0.98}} transition={{duration:0.35}}>
              <img className="face" src={it.img} alt={it.name} />
              <p className="quote">“{it.text}”</p>
              <div className="who"><strong>{it.name}</strong></div>
            </motion.article>
          ))}
        </div>
        <button className="t-arrow right" onClick={next} aria-label="Next">▶</button>
      </div>
    </main>
  )
}