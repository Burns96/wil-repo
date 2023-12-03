import React from 'react'

function ContactUs() {
  return (
    <head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title>Contact Us Form</title>
  <link href="style.css" rel="stylesheet" type="text/css" />
  <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Jaldi">
</head>

<body>
  <div class = "contact_us_form">
    <h1>CONTACT US!</h1>
    <form>
      <h3>Name: <input type = "text" class = "user_name"><br>
      Email: <input type = "text" class = "user_id"><br>
      Message: <br><input type = "text" class = "user_message"><br></h3>
      <button type = "button" class = "btn_submit"><b>SUBMIT</b></button><br>
    </form>
  </div>

  <div class = "departments">
    <h1>DEPARTMENTS</h1>
    <div class = "dep1">
      <h2>City Hall</h2>
       <p>161 E. Grand River Ave. Williamston, MI 48895</p>
       <p>Office Hours: Mon - Fri, 8AM - 5PM</p>
       <p>517-655-2774</p>
      <h2>Police Department</h2>
         <p>175 E. Grand River Ave. Williamston, MI 48895</p>
         <p>517-655-4222</p>
         <p><b>IF EMERGENCY - DIAL 911</b></p>
      <h2>Department of Public Works</h2>
         <p>781 Progress Ct. Williamston, MI 48895</p>
         <p>Office Hours: Vary, call City Hall for assistance</p>
         <p>517-655-2221</p>
    </div>

    <div class = "dep2">
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
</body>

  <style>
    html {
    height: 100%;
    width: 100%;
  }
  
  .contact_us_form {
    background-color: #D9D9D9;
    float: left;
    width: 31%;
    margin-left: 5%;
    padding: 3%;
    padding-top: 0%;
    font-family: "Jaldi";
  }
  
  .departments {
    background-color: #D9D9D9;
    float: right;
    width: 44%;
    margin-right: 5%;
    padding: 3%;
    padding-top: 0%;
    font-family: "Jaldi";
  }
  
  h1 {
    font-weight: 400px;
    font-size: 250%;
  }
  
  h3 {
    padding-left: 3%;
    font-size: 125%;
  }
  
  .user_name {
    float: right;
    width: 72%;
    padding-top: 1%;
    padding-bottom: 1%;
    margin-right: 3%;
  }
  
  .user_id {
    float: right;
    width: 72%;
    padding-top: 1%;
    padding-bottom: 1%;
    margin-right: 3%;
  }
  
  .user_message{
    float: right;
    width: 95%;
    padding-top: 1%;
    padding-bottom: 1%;
    height: 300px;
    margin-right: 3%;
  }
  
  .btn_submit {
    float: right;
    margin-right: 3%;
    margin-top: 5%;
    font-family: "Jaldi";
    font-weight: 400;
    font-size: 100%;
    padding: 2%;
    padding-left: 5%;
    padding-right: 5%;
    background-color: #299EC1;
    box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
    border-radius: 5px;
    color: white;
  }
  
  .dep1 {
    float: left;
    padding-top: 0%;
    padding-left: 3%;
    width: 43%;
  
  }
  
  .dep2 {
    float: right;
    padding-top: 0%;
    padding-right: 3%;
    width: 43%;
  }
  
  p {
    margin-left: 10%;
  }
  </style>
  )
}

export default ContactUs
