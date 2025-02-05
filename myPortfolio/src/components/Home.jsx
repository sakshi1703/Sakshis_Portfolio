import React from 'react';

function Home() {
  return (
    <section id="home">
      <div className="home-content">
        <div className="text">
          <div className="text-one" style={{ fontWeight: 'bolder' }}>HELLO,</div>
          <div id="user-detail-name" className="text-two">I'M SHIVAM <br /> MISHRA</div>
          <div className="text-three typing"></div>
        </div>
      </div>
    </section>
  );
}

export default Home;
