import React, { useState, useEffect } from 'react';
import johnFace from '../assets/john.jpg';
import janeFace from '../assets/jane.jpeg';
import aliceFace from '../assets/alice.jpeg';
import markFace from '../assets/mark.jpeg';
import saraFace from '../assets/sara.jpeg';
import tomFace from '../assets/tom.jpeg';





 const reviews = [
  { id: 1, name: 'John Doe', face: johnFace, text: 'The Arc Reactor 3000 kept my rig alive for days.' },
  { id: 2, name: 'Jane Smith', face: janeFace, text: 'The stealth drone is absurdly good for night shots.' },
  { id: 3, name: 'Alice Johnson', face: aliceFace, text: 'I love the wearable health tech — so accurate and comfy!' },
  { id: 4, name: 'Mark Lee', face: markFace, text: 'AI personal assistants have made my life easier.' },
  { id: 5, name: 'Sara Wilson', face: saraFace, text: 'Foldable smartphones changed how I multitask.' },
  { id: 6, name: 'Tom Brown', face: tomFace, text: 'Smart home security is a game-changer.' }
];




function ReviewsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsToShow, setCardsToShow] = useState(1);

  useEffect(() => {
    function updateCardsToShow() {
      const width = window.innerWidth;
      if (width >= 1024) {
        setCardsToShow(4); 
      } else if (width >= 768) {
        setCardsToShow(2); 
      } else {
        setCardsToShow(1); 
      }
    }
    updateCardsToShow();
    window.addEventListener('resize', updateCardsToShow);
    return () => window.removeEventListener('resize', updateCardsToShow);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % reviews.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const goPrev = () => {
    setCurrentIndex((currentIndex - 1 + reviews.length) % reviews.length);
  };

  const goNext = () => {
    setCurrentIndex((currentIndex + 1) % reviews.length);
  };

 
  function getVisibleReviews() {
    const visible = [];
    for (let i = 0; i < cardsToShow; i++) {
      visible.push(reviews[(currentIndex + i) % reviews.length]);
    }
    return visible;
  }

  return (
    <section id="reviews">
      <h2 className="section-title">Customer Reviews</h2>
      <div className="carousel-container">
        <button className="arrow left" onClick={goPrev} aria-label="Previous Review">&#10094;</button>

        <div className="carousel-slide" style={{ display: 'flex', gap: '20px', justifyContent: 'center' }}>
          {getVisibleReviews().map(review => (
            <div key={review.id} className="review-card">
              <img src={review.face} alt={review.name} className="review-face" />
              <h3>{review.name}</h3>
              <p>"{review.text}"</p>
            </div>
          ))}
        </div>

        <button className="arrow right" onClick={goNext} aria-label="Next Review">&#10095;</button>
      </div>
    </section>
  );
}

export default ReviewsCarousel;
