import React, { useState } from 'react';
import ReactCardFlip from 'react-card-flip';
import Img from 'gatsby-image';
import styled from 'styled-components';
import { ServiceStyleFront, ServiceStyleBack } from '../styles/GridStyles';


const ServicesGrid = styled.div` 
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2vw;
  grid-auto-rows: auto;
  padding: 2vw;
`;



function ServiceItem({ service }) {
const [isFlipped, setIsFlipped] = useState(false);
const handleClick = () => {
  setIsFlipped(!isFlipped);
}
  return (
    <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
    <>
    <ServiceStyleFront>
      <Img 
      fluid={service.image.asset.fluid}
      alt={service.name} />
      <div>
     <button className="svcbtnf" type="button" onClick={handleClick}>Learn More</button>
   </div>
   </ServiceStyleFront>
     </>
    <>
    <ServiceStyleBack>
      <h2 style={{padding: `0 1rem`}}>
        <span>{service.name}</span>
      </h2>
      <div style={{padding: `0 1rem`}}>
      <p>{service.description1}</p>
      <p>{service.description2}</p>
      </div>
      <div>
     <button className="svcbtnb" type="button" onClick={handleClick}>Click To Flip</button>
     </div>
     </ServiceStyleBack>
   </>
   </ReactCardFlip>
  ) 
  }  

export default function Service({ services }) {


return (
  
    <ServicesGrid>
      {services.map((service) => (
        <ServiceItem key={service.svccode} service={service} />
      ))}
    </ServicesGrid>
  
);


}