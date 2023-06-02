import React from 'react'
import './home.css';
// import Nav from "../Nav/nav.js";
import Shows from "../shows/shows.js";


function Home({ApiData}) {
    console.log(ApiData)
  return (
    <>
        {/* <Nav /> */}
      <Shows data={ApiData} />
    </>
  )
}

export default Home