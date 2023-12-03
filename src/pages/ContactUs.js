import React from 'react';

function ContactUs() {
  return (
    <>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width" />
        <title>Contact Us Form</title>
      </head>
      
      <main className='contact-container'>
        <div className="contact_us_form">
          <h1>CONTACT US!</h1>
          <form>
            <label>
              Name: <input type="text" className="user_name" />
            </label>
            <label>
              Email: <input type="text" className="user_id" />
            </label>
            <label>
              Message: <input type="text" className="user_message" />
            </label>
            <button type="button" className="btn_submit">
              <b>SUBMIT</b>
            </button>
          </form>
        </div>

        <div className="departments">
          <h1>DEPARTMENTS</h1>
          <div className="dep1">
            <h2>City Hall</h2>
            <p>161 E. Grand River Ave. Williamston, MI 48895</p>
            <p>Office Hours: Mon - Fri, 8AM - 5PM</p>
            <p>517-655-2774</p>
            <h2>Police Department</h2>
            <p>175 E. Grand River Ave. Williamston, MI 48895</p>
            <p>517-655-4222</p>
            <p>
              <b>IF EMERGENCY - DIAL 911</b>
            </p>
            <h2>Department of Public Works</h2>
            <p>781 Progress Ct. Williamston, MI 48895</p>
            <p>Office Hours: Vary, call City Hall for assistance</p>
            <p>517-655-2221</p>
          </div>

          <div className="dep2">
            <h2>Assessing Department</h2>
            <p>161 E. Grand River Ave. Williamston, MI 48895</p>
            <p>Office Hours: Mon - Fri, 8AM - 5PM</p>
            <p>517-655-2774</p>
            <h2>Building Department</h2>
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
