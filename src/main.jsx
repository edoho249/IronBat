import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { CartProvider } from './CartContext';
import 'aos/dist/aos.css';
import AOS from 'aos';
import './index.css';

AOS.init({ duration: 800, easing: 'ease-out', once: true });

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CartProvider>   
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </CartProvider>
  </React.StrictMode>
);
