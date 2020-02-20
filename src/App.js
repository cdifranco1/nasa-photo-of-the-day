import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";


function App() {
  const [data, setData] = useState([])
  const [dates, setDates] = useState([])

  useEffect(() => {
    axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
      .then(res => {
        setData(res.data)
        console.log(res.data)
      })
      .catch(err => { console.log("Could not get")
      })
    },[]);


  let today = new Date();
  
  useEffect(() => {
    const generateDates = (startDate) => {
      const datesArr = [];
      let prevDay;
      while (today.valueOf() > startDate.valueOf()){
        prevDay = new Date(today.setDate(today.getDate() - 1))
        datesArr.push(prevDay)
        today = prevDay;
      }
      setDates(datesArr);
      console.log(datesArr)
    };
    
    generateDates(new Date(2020, 0, 1))
  },[])

  return (
    <div className="App">
        <img alt="image of the day" src={data.url}></img>
        <p>Date: {data.date}</p>
        <p>Description: {data.description}</p>
        <div>
          <h1>Select a date:</h1>
          <div></div>
        </div>
    </div>
  );
}

export default App;
