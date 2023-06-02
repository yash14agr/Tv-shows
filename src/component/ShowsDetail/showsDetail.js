import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
// import Nav from "../Nav/nav"
import './showsDetail.css';

function ShowsDetail() {
  const location = useLocation();
  const item = location.state;
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [formData, setFormData] = useState({
    FirstName: '',
    Lastname: '',
    MovieName: item.show.name,
    Day: item.show.schedule.days.length ? item.show.schedule.days.join(', ') : 0,
    Time: item.show.schedule.time ? item.show.schedule.time : 0,
    Email: '',
    PhoneNo: '',
    TotalSeat: '',
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const storedData = JSON.parse(window.localStorage.getItem('Data')) ?? [];
    const newData = [...storedData, formData];
    window.localStorage.setItem('Data', JSON.stringify(newData));
    handleBookClick();
  };

  const handleBookClick = () => {
    setIsFormVisible(!isFormVisible);
  };

  const regex = /(<([^>]+)>)/ig;
  const UpdatedSummary = item.show.summary.replace(regex, '');

  return (
    <>
      {!isFormVisible ? (
        <div className='ShowDetailClass'
        // style={{ backgroundImage: `url(${item.show.image.original})`, opacity: 0.5 }}
        >
          <div>
            <img className="detailed-image" src={item.show.image.original} alt="Error" />
          </div>
          <div className='DetailClass2'>
            <div><span>Name:</span> {item.show.name}</div>
            <div><span>Genres:</span> {item.show.genres.join(', ')}</div>
            <div><span>Language:</span> {item.show.language}</div>
            <div><span>Status:</span> {item.show.status}</div>
            <div><span>Schedule-time:</span> {item.show.schedule.time ? item.show.schedule.time : 0}</div>
            <div><span>Schedule-day:</span> {item.show.schedule.days.length ? item.show.schedule.days.join(', ') : 0}</div>
            <div><span>Premiered:</span> {item.show.premiered.substring(0, 4)}</div>
            <div><span>Rating:</span> {item.show.rating.average ? item.show.rating.average : '5'}</div>
            {/* <div>IMDb rating: {item.show.externals.imdb}</div> */}
            <div><span>Summary:</span> {UpdatedSummary}</div>
            <Link to="/details" onClick={handleBookClick} state={item} className='show-details ShowLink'>
              Book Ticket
            </Link>
          </div>
        </div >
      ) : (
        <form onSubmit={handleSubmit}>
          <h3>Please Fill the Details</h3>
          <div className='FormContainer'>
            <p><span><label htmlFor="MovieName" >Movie Name : </label>
              <input type="text" id="MovieName" name="MovieName" value={item.show.name} readOnly /></span></p>
            <p><span><label name="Day" >Day :</label>
              <input type="text" name="Day" id="Day" value={item.show.schedule.days.length ? item.show.schedule.days.join(', ') : 0} readOnly></input></span></p>
            <p><span><label name="Time" >Time :</label>
              <input type="text" name="Time" id="Time" value={item.show.schedule.time ? item.show.schedule.time : 0} readOnly></input></span></p>

            <p><span><label name="FirstName"> First Name : </label>
              <input type="text" name="FirstName" id="FirstName" value={formData.FirstName || ""} onChange={handleInputChange} /></span></p>
            <p><span><label name="Lastname"> Last Name : </label>
              <input type="text" name="Lastname" id="Lastname" value={formData.Lastname || ""} onChange={handleInputChange} /></span></p>
            <p><span><label name="Email"> Email : </label>
              <input type="text" name="Email" id="Email" value={formData.Email || ""} onChange={handleInputChange} /></span></p>
            <p><span><label name="PhoneNo"> Phone : </label>
              <input type="text" name="PhoneNo" id="PhoneNo" value={formData.PhoneNo || ""} onChange={handleInputChange} /></span></p>
            <p><span><label name="TotalSeat">Total Seat : </label>
              <input type="number" name="TotalSeat" min="5" max="50" step="1" value={formData.TotalSeat || ""} onChange={handleInputChange}></input></span></p>

            <button type="submit" onClick={handleSubmit} className='show-details ShowLink'>Submit</button>
          </div>
        </form>
      )
      }
    </>
  );
}

export default ShowsDetail;
