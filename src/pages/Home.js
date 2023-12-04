import React, { useState, useEffect } from 'react';
import { translateText } from '../components/Translate.js'; // Adjust the path if necessary
import './Home.css';

const Home = ({ language }) => {
  const [translatedText, setTranslatedText] = useState({
    homeTitle: "City of Williamston, Michigan",
    oldTownAlt: "Scenic view of old Williamston",
    newTownAlt: "Modern landscape of new Williamston"
  });

  useEffect(() => {
    const translateContent = async () => {
      const homeTitle = await translateText("City of Williamston, Michigan", language);
      const oldTownAlt = await translateText("Scenic view of old Williamston", language);
      const newTownAlt = await translateText("Modern landscape of new Williamston", language);
      setTranslatedText({ homeTitle, oldTownAlt, newTownAlt });
    };

    translateContent();
  }, [language]);

  return (
    <div>
      <div className="home-body">
        <h1 className="home-title">{translatedText.homeTitle}</h1>
        <div className="home-body-images">
          <img src="Old_town.jpg" alt={translatedText.oldTownAlt} />
          <img src="new_town.jpg" alt={translatedText.newTownAlt} style={{ transform: 'scaleX(-1)' }} />
        </div>
      </div>
    </div>
  );
};

export default Home;

