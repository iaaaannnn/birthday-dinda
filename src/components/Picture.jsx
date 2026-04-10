import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom'; 
import SectionWrapper from './SectionWrapper';

// Mengimpor 11 foto dengan format .jpeg
import foto1 from '../assets/2.jpeg';
import foto2 from '../assets/1.jpeg';
import foto3 from '../assets/3.jpeg';
import foto4 from '../assets/4.jpeg';
import foto5 from '../assets/5.jpeg';
import foto6 from '../assets/6.jpeg';
import foto7 from '../assets/7.jpeg';
import foto8 from '../assets/8.jpeg';
import foto9 from '../assets/9.jpeg';
import foto10 from '../assets/10.jpeg';
import foto11 from '../assets/11.jpeg';

// Memasukkan semua foto ke dalam array
const images = [
  foto1, foto2, foto3, foto4, foto5, foto6, 
  foto7, foto8, foto9, foto10, foto11
];

function Picture() {
  const [loadedImages, setLoadedImages] = useState(0);

  const handleImageLoad = () => {
    setLoadedImages((prev) => prev + 1);
  };
  
  const allImagesLoaded = loadedImages === images.length;
  
  return (
    <SectionWrapper>
      {/* Teks tersembunyi di bawah tumpukan foto */}
      <Link to="/card">
        <p className="absolute text-4xl font-bold text-customBlue inset-0 flex justify-center items-center text-center transform rotate-6 cursor-pointer">
          umur mu jebul e wes koyok pantun e jarjit yaa "due tige"
        </p>
      </Link>
      
      {/* Tampilan Loading */}
      {!allImagesLoaded && (
        <div className="absolute inset-0 flex justify-center items-center">
          <p className="text-xl font-medium text-gray-500">Loading images...</p>
        </div>
      )}
      
      {/* Tumpukan Foto yang bisa dilempar */}
      {images.map((image, index) => (
        <motion.div
          key={index}
          className={`absolute top-0 left-0 w-full h-full transition-opacity duration-500 ${
            allImagesLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          style={{
            zIndex: images.length - index,
          }}
          initial={{
            scale: 1,
            rotate: Math.random() * 20 - 10,
          }}
          whileDrag={{
            scale: 1.05,
            rotate: Math.random() * 20 - 10,
          }}
          drag
        >
          <img
            src={image}
            alt={`Kenangan ${index + 1}`}
            className="w-full h-full object-cover rounded-lg shadow-lg"
            onLoad={handleImageLoad}
          />
        </motion.div>
      ))}
    </SectionWrapper>
  );
}

export default Picture;