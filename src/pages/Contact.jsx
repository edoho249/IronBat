import React, { useState } from 'react'
export default function Contact(){
  const [sent,setSent]=useState(false)
  return (
    <main className="page contact-page">
      <h2 className="page-title">Contact</h2>
      <div className="contact-grid">
        <form onSubmit={(e)=>{e.preventDefault();setSent(true);setTimeout(()=>setSent(false),2000)}} className="contact-form">
          <input placeholder="Name" required />
          <input placeholder="Email" type="email" required />
          <textarea placeholder="Message" required />
          <button className="btn primary">Send</button>
        </form>
        <div className="contact-info">
          <h4>Visit our lab</h4>
          <p>Nsukka Tech Hub, Enugu State</p>
          <h4>Business</h4>
          <p>hello@ironbat.example</p>
          <h4>Phone</h4>
          <p>+234 800 000 0000</p>
        </div>
      </div>
      {sent && <div className="toast">Message sent — we’ll hit you back</div>}
    </main>
  )
}
