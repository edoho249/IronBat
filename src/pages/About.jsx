
import React from 'react'
export default function About(){
  return (
    <main className="page about-page">
      <h2 className="page-title">About IronBat Gadgets</h2>
      <p className="lead muted">We fuse industrial-grade engineering with clandestine design language. Our mission: make tools that empower creators, explorers and night-operators.</p>
      <div className="about-grid">
        <div className="about-card">
          <h4>Our Story</h4>
          <p>Started by tinkerers and former field engineers, IronBat began as a weekend project to miniaturize power systems. It evolved into a small lab crafting bespoke gear.</p>
        </div>
        <div className="about-card">
          <h4>Design Philosophy</h4>
          <p>Function-first, stealth-second. We obsess over ergonomics, material feel and how gear behaves under stress.</p>
        </div>
        <div className="about-card">
          <h4>Team</h4>
          <div className="team-grid">
            <div className="member"><div className="avatar">TB</div><h5>Tony B.</h5><p>Chief Engineer</p></div>
            <div className="member"><div className="avatar">BR</div><h5>Bruce R.</h5><p>Design Lead</p></div>
            <div className="member"><div className="avatar">E</div><h5>Echo</h5><p>Product Ops</p></div>
          </div>
        </div>
      </div>
    </main>
  )
}