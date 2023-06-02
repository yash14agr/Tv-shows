import React from 'react'
import { Link } from 'react-router-dom';
import "./shows.css";
function shows({ data }) {
  return (
    <>
      <div className="show">
        {data &&
          data.map((item) => (
            <div key={item.show.id} className="item-container">
              <img src={item.show.image.medium} alt='' className='show-image' />
              <div className='show-container'>
                <div className="name" id='show-name'>{item.show.name}</div>
                <div className="language">{item.show.language}</div>
                <div className="genres">{item.show.genres.join('/')}</div>
                <Link to="/details" state={item} className="show-details">Details</Link>
              </div>
            </div>
          ))}

      </div>
    </>
  )
}

export default shows