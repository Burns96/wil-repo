//app.js
<>
<div className="site-container">
  <Header setPage={setPage} setLanguage={setLanguage} texts={navTexts} />
  <main className="content">
    <Routes>
      <Route path="/" element={page === 'Home' && <Home language={language} />} />
      <Route path="/contactus" element={page === 'ContactUs' && <ContactUs language={language} />} />
      <Route path="/faq" element={page === 'Faq' && <Faq language={language} />} />
      {/* <Route path="/login" element={<Login />} /> */}
      {/* <Route path="/signup" element={<Signup />} /> */}
    </Routes>
    </main>
  <Footer language={language} />
</div>
</>




//nav.js
<nav className="navigation" style={{backgroundColor:'white',color:'black'}} >
<ul>
  <li><a href="/" onClick={() => handleItemClick('Home')}>{texts.home}</a></li>
  {/* <li><a href="/about">About</a></li> */}
  <li><a href="/faq" onClick={() => handleItemClick('Faq')}>{texts.faq}</a></li>
  <li><a href="/contactus" onClick={() => handleItemClick('ContactUs')}>{texts.contactUs}</a></li>
  <li><a href="/login"onClick={() => handleItemClick('Login')}>{texts.login}Login<img src="user2.png" width={20} height={20} alt="logo" /></a></li>
</ul>
</nav>