import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";


function App() {
  const [data, setData] = useState([])
  const [selectedDate, setSelectedDate] = useState('')
  const [dates, setDates] = useState([])

  useEffect(() => {
    axios.get(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=${selectedDate}`)
      .then(res => {
        setData(res.data)
      })
      .catch(err => { console.log("Could not get")
      })
    },[selectedDate]);


  let today = new Date();

  useEffect(() => {
    const generateDates = (startDate) => {
      const datesArr = [];
      let prevDay;
      while (today.getTime() > startDate.getTime()){
        prevDay = new Date(today.setDate(today.getDate() - 1))
        let yyyy = prevDay.getFullYear()
        let mm = prevDay.getMonth() + 1;
        let dd = prevDay.getDate()
        datesArr.push(`${yyyy}-${mm}-${dd}`)
        today = prevDay;
      }
      setDates(datesArr);
    };
    generateDates(new Date('2019-1-1'))
  },[])

  const dateHandler = (e) => {
    setSelectedDate(e.target.value)
  }

  return (
    <div className="container">
      <div className="card-container">
        <img alt="image of the day" src={data.url}></img>
        <p>Date: {data.date}</p>
        <p>Description: {data.explanation}</p>
      </div>
      <div className="dropdown-container">
        <label>Select a date:
          <select value={selectedDate} onChange={dateHandler}>
            {dates.map((date) =>
              <option value={date}>{date}
              </option>
              )}
          </select>
        </label>
      </div>
    </div>
  );
}

export default App;
