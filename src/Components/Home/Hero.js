import React from 'react';
import { FaArrowRight } from 'react-icons/fa';

const bubbles = [
  { size: 80, top: '10%', left: '5%', color: 'rgba(100, 180, 255, 0.25)', duration: '6s', delay: '0s' },
  { size: 50, top: '20%', left: '15%', color: 'rgba(255, 150, 120, 0.2)', duration: '8s', delay: '1s' },
  { size: 120, top: '60%', left: '2%', color: 'rgba(120, 220, 180, 0.2)', duration: '10s', delay: '2s' },
  { size: 40, top: '75%', left: '20%', color: 'rgba(200, 130, 255, 0.25)', duration: '7s', delay: '0.5s' },
  { size: 90, top: '5%', left: '45%', color: 'rgba(255, 200, 100, 0.2)', duration: '9s', delay: '3s' },
  { size: 60, top: '40%', left: '55%', color: 'rgba(100, 200, 255, 0.2)', duration: '11s', delay: '1.5s' },
  { size: 35, top: '80%', left: '60%', color: 'rgba(255, 120, 160, 0.25)', duration: '6s', delay: '2.5s' },
  { size: 100, top: '15%', left: '75%', color: 'rgba(130, 255, 200, 0.15)', duration: '12s', delay: '0.8s' },
  { size: 55, top: '55%', left: '80%', color: 'rgba(180, 150, 255, 0.2)', duration: '8s', delay: '4s' },
  { size: 70, top: '85%', left: '88%', color: 'rgba(255, 180, 80, 0.2)', duration: '9s', delay: '1.2s' },
];

const Hero = () => {
  return (
    <>
      <style>{`
        @keyframes floatBubble {
          0%   { transform: translateY(0px) scale(1); opacity: 0.7; }
          50%  { transform: translateY(-30px) scale(1.05); opacity: 1; }
          100% { transform: translateY(0px) scale(1); opacity: 0.7; }
        }
        @keyframes pulseBubble {
          0%, 100% { box-shadow: 0 0 0 0 rgba(255,255,255,0.3); }
          50%       { box-shadow: 0 0 20px 8px rgba(255,255,255,0.15); }
        }
        .bubble {
          position: absolute;
          border-radius: 50%;
          animation: floatBubble var(--dur) ease-in-out infinite,
                     pulseBubble var(--dur) ease-in-out infinite;
          animation-delay: var(--delay);
          backdrop-filter: blur(4px);
          border: 1px solid rgba(255, 255, 255, 0.4);
          pointer-events: none;
        }
      `}</style>

      <div className='w-full relative h-[90vh] bg-gradient-to-b from-[#cbe5ff10] to-[#cbe5ff] flex items-center justify-center overflow-hidden'>

        {/* Floating Bubbles */}
        {bubbles.map((b, i) => (
          <div
            key={i}
            className='bubble'
            style={{
              width: b.size,
              height: b.size,
              top: b.top,
              left: b.left,
              backgroundColor: b.color,
              '--dur': b.duration,
              '--delay': b.delay,
            }}
          />
        ))}

        <div className='container py-10 lg:py-20 z-10'>
          <h2 className='text-2xl lg:text-4xl font-semibold text-primary'>Manage Tasks</h2>
          <h1 className='text-5xl lg:text-7xl my-5 font-bold text-gray-800 mb-4'>
            Guide Your Group Stay <br /> in Control!
          </h1>
          <p className='lg:text-lg text-gray-600 mb-8'>
            Perfect for teachers, parents, and business managers.
          </p>
          <button className='bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-500 transition duration-300 flex items-center'>
            Start Free Trial 15 days <FaArrowRight className='inline-block ml-2' />
          </button>
        </div>

        <div className='absolute bottom-0 right-0 w-2/5 bg-gradient-to-t from-[#cbe5ff] to-transparent lg:block hidden'>
          <img
            className='w-full h-full object-cover z-0'
            src='/Images/Home/Heor_banner_Image.png'
            alt=''
          />
        </div>
      </div>
    </>
  );
};

export default Hero;