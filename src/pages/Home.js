// Home.js

import React from 'react';
import './Home.css'; // Ensure the CSS path is correct

const Home = () => {
  return (
    <div>
    

      {/* Body content */}
      <div className="home-body">
        {/* Title at the top of the container */}
        <h1 className="home-title">City of Williamston, Michigan</h1>

        {/* Image container */}
        <div className="home-body-images">
        <img src="Old_town.jpg" alt="Scenic view of old Williamston" />
        <img src="new_town.jpg" alt="Modern landscape of new Williamston" style={{ transform: 'scaleX(-1)' }} />
        </div>
      </div>


    </div>
  );
};

export default Home;
