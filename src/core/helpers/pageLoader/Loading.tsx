import './Loading.css'
import React from 'react';
const Loading = () => {
  const barCount = 12;
  const bars = Array.from({ length: barCount }, (_, i) => {
    const rotate = i * 30;
    const delay = -((barCount - i) * 0.1);

    return (
      <div
        key={i}
        style={{
          width: "8%",
          height: "24%",
          background: '#000',
          position: "absolute",
          left: "50%",
          top: "30%",
          opacity: 0,
          borderRadius: "50px",
          boxShadow: "0 0 3px rgba(0,0,0,0.2)",
          transform: `rotate(${rotate}deg) translate(0, -130%)`,
          animation: `fade458 1s linear infinite`,
          animationDelay: `${delay}s`,
        }}
      />
    );
  });

  return (
    <div style={{ width: '100%', height: "80vh" }} className='flex justify-center align-middle mt-10 items-center'>
      <div
        className="loader"
        style={{
          position: "relative",
          width: "54px",
          height: "54px",
          borderRadius: "10px",
        }}
      >
        {bars}
      </div>
    </div>
  );
};


export default Loading;
