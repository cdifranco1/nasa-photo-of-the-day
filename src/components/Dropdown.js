
import React, { useState, useEffect } from "react";
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

const DatesDropdown = (props) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [dates, setDates] = useState([])

  const toggle = () => setDropdownOpen(prevState => !prevState);

  useEffect(() => {
    let today = new Date();
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

  return (
    <Dropdown isOpen={dropdownOpen} toggle={toggle}>
      <DropdownToggle caret>
        Select Date
        </DropdownToggle>
      <DropdownMenu  
        modifiers={{
          setMaxHeight: {
            enabled: true,
            order: 890,
            fn: (data) => {
              return {
                ...data,
                styles: {
                  ...data.styles,
                  overflowY: 'scroll',
                  maxHeight: '300px',
                },
              };
            },
          },
        }}
      >
        {dates.map(date => 
          <DropdownItem onClick={props.onClick} value={date}>{date}</DropdownItem>
        )}
      </DropdownMenu>
    </Dropdown>
  );
};

export default DatesDropdown;