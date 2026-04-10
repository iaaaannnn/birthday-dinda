import React, { useState, useRef } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home, Picture, Card, Cake, Present } from "./components";
import Confetti from 'react-confetti';
import { useWindowSize } from 'react-use';

import './index.css';
import './App.css'; 

// Import aset dari folder assets
import fotoSampul from './assets/13.jpg'; 
import musikLatar from './assets/lagu.mp3'; 

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const { width, height } = useWindowSize();
  const audioRef = useRef(null);

  const handleOpen = () => {
    // 1. Putar lagu dulu sebelum pindah state
    if (audioRef.current) {
      audioRef.current.play().catch(err => {
        console.log("Autoplay dicegah browser, tapi harusnya jalan setelah klik ini:", err);
      });
    }
    
    // 2. Baru jalankan animasi dan buka halaman
    setIsOpen(true);
    setShowConfetti(true);
    
    setTimeout(() => {
      setShowConfetti(false);
    }, 10000);
  };

  return (
    <>
      {/* 1. TAG AUDIO DI LUAR AGAR SELALU SIAP */}
      <audio ref={audioRef} src={musikLatar} loop preload="auto" />

      {/* 2. EFEK CONFETTI (Hanya muncul jika isOpen true) */}
      {isOpen && showConfetti && (
        <Confetti width={width} height={height} numberOfPieces={200} gravity={0.12} />
      )}

      {/* 3. LOGIKA HALAMAN */}
      {isOpen ? (
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/pictures" element={<Picture />} />
            <Route path="/card" element={<Card />} />
            <Route path="/cake" element={<Cake />} />
            <Route path="/present" element={<Present />} />
          </Routes>
        </Router>
      ) : (
        /* HALAMAN LANDING (TAMPILAN AWAL) */
        <div className="main-container">
          <div className="mobile-wrapper">
            <div className="image-container">
              <img src={fotoSampul} alt="Birthday Cover" className="profile-photo" />
            </div>
            <h1 className="title">Halo Dinda! 💖</h1>
            <p className="subtitle">
              Volume mu banter no yang
              <p className="subtitle">tapi ojo sek kengepol en bolo</p>
            </p>
            <button className="btn-mystery" onClick={handleOpen}>
              <span className="icon">🎁</span>
              <span className="text">Klik aku dinda</span>
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default App;