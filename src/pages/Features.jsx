import React from 'react'
export default function Features(){
  return (
    <main className="page">
      <h2 className="page-title">Features</h2>
      <p className="muted">Next-gen features that power our gadgets.</p>
      <div className="feature-grid">
        <div className="feat">
          <h3>Adaptive Power Management</h3>
          <p>Smart balancing between performance and longevity using predictive algorithms.</p>
        </div>
        <div className="feat">
          <h3>Stealth Materials</h3>
          <p>Low-acoustic components and matte composites for covert operations.</p>
        </div>
        <div className="feat">
          <h3>Gesture & Voice</h3>
          <p>Seamless control via gestures and voice commands with low latency.</p>
        </div>
        <div className="feat">
          <h3>Secure Comms</h3>
          <p>End-to-end encrypted channels built into communication devices.</p>
        </div>
      </div>
    </main>
  )
}
