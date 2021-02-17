import React from 'react';
import { Card, CardColumns, CardDeck } from 'react-bootstrap';

const VehicleCardStyling = {
  width: '75%',
  height: '60%',
  margin: '0 auto',
  fontFamily: 'Oswald, sans-serif',
  textAlign: 'center',
};

const TitleFontWeight = {
  fontWeight: 700,
};

const TextSpace = {
  //Space between the title and text
  marginTop: '6rem',
};

const PinkHighlight = {
  width: '70%',
  background: '#B71134',
  opacity: '60%',
  margin: '0 auto',
};

const VehicleCard = () => {
  return (
    <CardDeck style={VehicleCardStyling}>
      <Card>
        <Card.Img variant="top" src="/static/card-car-image.png" />
        <Card.Body>
          <Card.Title style={TitleFontWeight}>BMW i8 Hybrid Concept</Card.Title>
          <Card.Text style={TextSpace}>$15,000</Card.Text>
        </Card.Body>
      </Card>
      <Card>
        <Card.Img variant="top" src="/static/card-car-image.png" />
        <Card.Body>
          <Card.Title style={TitleFontWeight}>BMW i8 Hybrid Concept</Card.Title>
          <Card.Text style={TextSpace}>$19,000</Card.Text>
        </Card.Body>
      </Card>
    </CardDeck>
  );
};

export default VehicleCard;
