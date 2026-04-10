import { useEffect, useState } from "react";
import "../assets/css/cake.css";
import { CakeSVG, confetti } from "../assets";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function Cake() {
  const [candlesBlownOut, setCandlesBlownOut] = useState(false);

  useEffect(() => {
    // Timer otomatis: Sekarang diatur ke 10 detik (10000ms)
    const timer = setTimeout(() => {
      setCandlesBlownOut(true);
    }, 10000);

    return () => clearTimeout(timer); 
  }, []);

  return (
    <>
      <div className="bg-black/80 h-screen w-screen flex items-center justify-center overflow-hidden relative">
        {candlesBlownOut && (
          <div
            className="absolute inset-0 bg-cover bg-center z-50"
            style={{
              backgroundImage: `url(${confetti})`,
            }}
          />
        )}

        {candlesBlownOut && (
          <motion.div
            className="absolute top-20 text-white text-3xl font-bold z-50 flex flex-col items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <svg width="800" height="200" viewBox="0 0 400 200">
              <defs>
                <path
                  id="curve"
                  d="M50,150 Q200,50 350,150"
                  fill="transparent"
                  stroke="white"
                />
              </defs>
              <text fontSize="40" fill="white" textAnchor="middle">
                <textPath href="#curve" startOffset="50%">
                  Happy Birthday!
                </textPath>
              </text>
            </svg>

            <Link to="/present" className="relative mt-10">
              <button className="px-7 py-3 bg-customBlue text-white rounded-full hover:bg-blue-600 font-medium text-base text-center transition-all shadow-lg active:scale-95">
                Next Page
              </button>
            </Link>
          </motion.div>
        )}

        <div className="relative z-10">
          <div className="absolute -top-48 left-1/2 transform -translate-x-1/2">
            <div className="candle">
              {!candlesBlownOut ? (
                <div>
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: [0, 1, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="absolute -top-20 left-1/2 -translate-x-1/2 text-gray-200 text-xl whitespace-nowrap"
                  >
                    Make a wish...
                  </motion.div>

                  <div className="flame"></div>
                  <div className="flame"></div>
                  <div className="flame"></div>
                  <div className="flame"></div>
                  <div className="flame"></div>
                </div>
              ) : (
                <motion.div 
                  initial={{ opacity: 1 }} 
                  animate={{ opacity: 0, y: -20 }} 
                  className="text-gray-400 text-sm"
                >
                  *puf*
                </motion.div>
              )}
            </div>
          </div>
          <CakeSVG />
        </div>
      </div>
    </>
  );
}

export default Cake;