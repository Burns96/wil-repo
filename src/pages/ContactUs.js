import React, { useState, useEffect } from 'react';
import { translateText } from '../components/Translate.js'; 

function ContactUs({ language }) {
  const [translatedContent, setTranslatedContent] = useState({
    contactUs: 'CONTACT US!',
    name: 'Name:',
    email: 'Email:',
    message: 'Message:',
    submit: 'SUBMIT',
    departments: 'DEPARTMENTS',
    cityHall: 'City Hall',

  });

  useEffect(() => {
    const translateContent = async () => {
      const translated = {
        contactUs: await translateText('CONTACT US!', language),
        name: await translateText('Name:', language),
        email: await translateText('Email:', language),
        message: await translateText('Message:', language),
        submit: await translateText('SUBMIT', language),
        departments: await translateText('DEPARTMENTS', language),
        cityHall: await translateText('City Hall', language),

      };
      setTranslatedContent(translated);
    };

    translateContent();
  }, [language]);


  const handleButtonClick = () => { // delete this if it doesnt work
    alert('Message received!');
  };

  return (
    <>
      <main className='contact-container'>
        <div className="contact_us_form">
          <h1>{translatedContent.contactUs}</h1>
          <form>
            <label>
              {translatedContent.name} <input type="text" className="user_name" />
            </label><br></br>
            <label>
              {translatedContent.email} <input type="text" className="user_id" />
            </label><br></br>
            <label>
              {translatedContent.message} <input type="text" className="user_message" />
            </label><br></br><br></br>

            <button type="button" className="btn_submit" onClick={handleButtonClick}>
              <b>{translatedContent.submit}</b>

            </button>
          </form>
        </div>

        <div className="departments">
          <center><h1>{translatedContent.departments}</h1><br></br></center>
          <div className="dep1">
            <h2>{translatedContent.cityHall}</h2>
            <p>161 E. Grand River Ave. Williamston, MI 48895</p>
            <p>Office Hours: Mon - Fri, 8AM - 5PM</p>
            <p>517-655-2774</p><br></br>

            <h2>{translatedContent.policeDepartment}</h2>
            <p>175 E. Grand River Ave. Williamston, MI 48895</p>
            <p>517-655-4222</p>
            <p><b>IF EMERGENCY - DIAL 911</b></p><br></br>

            <h2>{translatedContent.publicWorks}</h2>
            <p>781 Progress Ct. Williamston, MI 48895</p>
            <p>Office Hours: Vary, call City Hall for assistance</p>
            <p>517-655-2221</p>
          </div>

          <div className="dep2">
            <h2>{translatedContent.assessingDepartment}</h2>
            <p>161 E. Grand River Ave. Williamston, MI 48895</p>
            <p>Office Hours: Mon - Fri, 8AM - 5PM</p>
            <p>517-655-2774</p><br></br>

            <h2>{translatedContent.buildingDepartment}</h2>
            <p>2300 E Grand River Ave. Howell, MI 48843</p>
            <p>Office Hours: Mon - Fri, 8AM - 5PM</p>
            <p>517-546-7461</p>
          </div>
        </div>
      </main>
    </>
  );
}

export default ContactUs;