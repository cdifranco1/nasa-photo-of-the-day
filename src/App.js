import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem, Container, Row, Col } from 'reactstrap';
import PhotoCard from './components/Card.js';


function App() {
  const [data, setData] = useState([])
  const [selectedDate, setSelectedDate] = useState('')
  
  useEffect(() => {
    axios.get(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=${selectedDate}`)
      .then(res => {
        setData(res.data)
        console.log(res.data)
      })
      .catch(err => { console.log("Could not get")
      })
    },[selectedDate]);

    const dateHandler = (e) => {
      setSelectedDate(e.target.value)
    }

  return (
    <Container>
      <PhotoCard 
        title={data.title}
        copyright={data.copyright}
        src={data.url}
        date={data.date}
        explanation={data.explanation}
        onClick={dateHandler}
      />
    </Container>
  );
}


export default App;
