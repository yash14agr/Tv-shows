import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Nav from "./component/Nav/nav.js";
// import Shows from "./component/shows/shows.js";
import Home from "./component/Home/home";
import ShowsDetail from "./component/ShowsDetail/showsDetail";
import Nav from "./component/Nav/nav"
import ShowData from "./component/ShowData/ShowData";
// import ReactDOM from "react-dom";
import './App.css';

function App() {
  const [ApiData, SetApiData] = useState();

  const getData = async () => {
    const data = await fetch("https://api.tvmaze.com/search/shows?q=all")
      .then((data) => data.json());
    SetApiData(data);
    console.log(data)
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      {/* <div className="App">
        <h1> HII </h1>
      </div> */}
      <BrowserRouter>
      <Nav />
        <Routes>
          <Route path="/" element={<Home ApiData={ApiData} />} />
          <Route path="/details" element={<ShowsDetail />} />
          <Route path="/ShowData" element={<ShowData />} />
        </Routes>
      </BrowserRouter>


    </>
  );
}

export default App;
