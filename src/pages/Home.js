import React from 'react'

function Home() {
  return (
    <>
      <h1 className="home-title">City of Williamston, Michigian </h1>
      <div className="home-body-images">
      <img src="Old_town.jpg" alt="Scenic view of old Williamston" />
      <img src="new_town.jpg" alt="Modern landscape of new Williamston" style={{ transform: 'scaleX(-1)' }} />
    </div>
    </>
  )
}

export default Home