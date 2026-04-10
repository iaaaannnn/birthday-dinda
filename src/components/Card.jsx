import { motion } from "framer-motion";
import React, { useRef, useState } from "react";
import "../assets/css/card.css";
import { Link } from 'react-router-dom'; 

function Card() {
  const [cardClass, setCardClass] = useState("");
  const [isCardOpened, setIsCardOpened] = useState(false);
  const timerRef = useRef(null);

  const toggleCard = () => {
    if (cardClass === "" || cardClass === "close-half") {
      setCardClass("open-half");
      setIsCardOpened(true); 
      
      if (timerRef.current) clearTimeout(timerRef.current);
      
      // Durasi disamakan dengan CSS (1.2s) agar gerakan mengayun selesai sempurna
      timerRef.current = setTimeout(() => {
        setCardClass("open-fully");
        timerRef.current = null;
      }, 1200); 
    } else {
      setCardClass("close-half");
      if (timerRef.current) clearTimeout(timerRef.current);
      timerRef.current = setTimeout(() => {
        setCardClass("");
        timerRef.current = null;
      }, 1200);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-start py-20 overflow-x-hidden bg-[#FFF5F5]">
      
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      >
        <div id="card" className={`${cardClass}`} onClick={toggleCard}>     
          <div id="card-inside">
            <div className="wrap text-[0.95rem]">
              <p className="font-bold text-lg text-[#FF5555]">Happy Birthday, Dinda!</p>
              <p>Sekarang kamu 23, makin dewasa aja… semoga semua yang kamu jalanin ke depan makin lancar dan sesuai sama yang kamu mau.</p>
              <p>
                Makasih ya sejauh ini sudah tetap ada dan tetap jadi diri kamu yang aku kenal. Semoga kamu selalu sehat, nggak gampang capek sama keadaan, dan tetap kuat ngejalanin semuanya.
              </p>
              <p>
                Aku nggak banyak kata-kata, tapi aku senang bisa ada di samping kamu sampai sekarang. Semoga ke depan kita masih bisa jalan bareng terus.
              </p>
              <p>
                Cekap semanten, mugi tansah pinaringan sehat lan kabegjan.
              </p>
              <p className="font-bold text-red-500 tracking-widest mt-4">
                #STAYPHONK
              </p>
              <p className="signed">Ian</p>
            </div>
          </div>

          <div id="card-front">
            <div className="wrap">
              <h1>Happy Birthday!</h1>
            </div>
          </div>
        </div>
      </motion.div>

      {isCardOpened && (
        <motion.div 
          className="mt-12 mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
        > 
          <Link to='/cake'>
            <button className="px-10 py-3 bg-[#FF5555] text-white font-bold text-base rounded-full shadow-lg hover:bg-[#FF3333] transition-all transform active:scale-95">
              Next Page
            </button>
          </Link>
        </motion.div>
      )}

    </div>
  );
}

export default Card;