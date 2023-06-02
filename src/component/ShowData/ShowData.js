import React from 'react'
import './ShowData.css';

function ShowData() {
    const storedData = JSON.parse(window.localStorage.getItem('Data')) ?? [];
    console.log(storedData)
    return (
        <>
            <div className='ShowData'>
                {
                    storedData.map((data, index) => (
                        <div key={index} className='Data-Container'>
                            <span>TotalSeat : {data.MovieName}</span>
                            <span>FirstName : {data.FirstName}</span>
                            <span>LastName : {data.LastName}</span>
                            <span>PhoneNo : {data.PhoneNo}</span>
                            <span>Email : {data.Email}</span>
                            <span>Day : {data.Day}</span>
                            <span>Time : {data.Time}</span>
                            <span>TotalSeat : {data.TotalSeat}</span>
                        </div>
                    ))
                }
            </div>
        </>
    )
}

export default ShowData