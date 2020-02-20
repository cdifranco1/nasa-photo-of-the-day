import React from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';
import DateDropdown from "./Dropdown.js";

const PhotoCard = (props) => {
  return (
    <div>
      <Card>
        <CardImg top width="100%" src={props.src} alt="photo of the day" />
        <CardBody>
          <CardTitle>{props.date}</CardTitle>
          <CardText>{props.explanation}</CardText>
          <DateDropdown onClick={props.onClick}/>
        </CardBody>
      </Card>
    </div>
  );
};

export default PhotoCard;
