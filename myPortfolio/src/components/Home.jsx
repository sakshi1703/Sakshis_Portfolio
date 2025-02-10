import React from 'react';
import laptop from "../assets/laptop.jpg"

function Home() {
  return (
    <section
      id="home"
      style={{
        backgroundImage: `url(${laptop})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <div className="home-content">
        <div className="text">
          <div className="text-one" style={{ fontWeight: 'bolder' }}>HELLO,</div>
          <div id="user-detail-name" className="text-two">I'M SAKSHI <br /> THODSARE</div>
          <div className="text-three typing"></div>
        </div>
      </div>
    </section>
  );
}

export default Home;
