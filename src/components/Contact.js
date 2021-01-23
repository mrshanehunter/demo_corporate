import React from 'react';
import Img from 'gatsby-image';
import styled from 'styled-components';

const StyledContact = styled.div` 
  width: 100%;
  height: 100%;
  position: relative;
  z-index: 10;
  margin-left: 3rem;
  margin-top: 1rem;
  h3 {
    margin-top: 5rem;
    font-size: 2rem;
    color: ${({theme}) => theme.dblue};
  }
  p {
    margin-top: 0;
    margin-bottom: 0;
    font-size: 1.6rem;
    color: ${({ theme }) => theme.blue}
  }
  .comms {
    margin-top: 2rem;
  }
  .postal {
    margin-top: 2rem;
  }
`;

const StyledImage = styled.div` 
  width: 80rem;
  height: 20rem;
  position: absolute;
  z-index: 1;
  top: 50;
  left: 30;
  .gatsby-image-wrapper {
    border-radius: 1rem;
    border: 0.05rem solid ${({ theme }) => theme.silver};
    box-shadow: 0 0 0.5rem 0.3rem rgba(0, 0, 0, 0.4);
  }
  
`;


function ContactDetails({ contact }) {
  return (

     <StyledContact>
   <h3>{contact.officeloc}</h3>
    <p>{contact.office}</p>
    <p>{contact.street}</p>
   <p>{contact.city}{" "}{contact.state}{" "}{contact.postcode}</p>
   
   <div className="comms">
   <p>Telephone:{" "}{contact.telephone}</p>
   <p>Email:{" "}{contact.email}</p>
   </div>
   <div className="postal">
   <p>Postal:</p>
   <p>{contact.postal}</p>
   <p>{contact.city}{" "}{contact.state}{" "}{contact.postcode}</p>
   </div>
    </StyledContact>
  )
}




function ContactImage({ contact }) {
  return (
    <>
    <StyledImage>
      <Img fluid={contact.image.asset.fluid} alt={contact.office} />
      </StyledImage> 
          <StyledContact>
              <ContactDetails key={contact.id} contact={contact} />
                </StyledContact>
                
    </>
  )
}
 







export default function Contact({ contacts }) {
  return (
    
    <StyledImage>

      {contacts.map((contact) => (
        <ContactImage key={contact.id} contact={contact} />
      ))}
    </StyledImage>
   
  )
}

