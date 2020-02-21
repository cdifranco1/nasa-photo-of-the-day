import React from 'react';
import {
  Card, CardImg, CardText, CardBody, CardLink, CardHeader,
  CardTitle, CardSubtitle, CardFooter
} from 'reactstrap';
import DateDropdown from "./Dropdown.js";


const PhotoCard= (props) => {

  return (
    <div>
      <Card>
        <CardHeader>
          <h1 className="display-4">Astronomy Photo of the Day - NASA</h1>
          <p className="lead">View a new astronomy image each day with a brief explanation.</p>
        </CardHeader>
        <CardBody>
          <CardTitle><span className="font-weight-bold">Title: </span>{props.title}</CardTitle>
          <CardSubtitle><span className="font-weight-bold">Date: </span>{props.date}</CardSubtitle>
        </CardBody>
        <img width="100%" src={props.src} alt="Card image cap" />
        <CardBody>
          <CardText>{props.explanation}</CardText>
          <DateDropdown onClick={props.onClick}/>
        </CardBody>
        <CardFooter className="text-muted text-center">
          <span className="font-weight-bold">Photo Copyright: </span>{props.copyright}
        </CardFooter>
      </Card>
    </div>
  );
};

export default PhotoCard;
