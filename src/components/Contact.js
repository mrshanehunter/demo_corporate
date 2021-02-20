import React from "react";
import styled from "styled-components";

const StyledContact = styled.div`
  width: 30rem;
  background: ${({ theme })=> theme.lblue};
  border: 0.05rem solid ${({ theme }) => theme.silver};
  box-shadow: 0.25rem 0.25rem 0.5rem 0.5rem rgba(0, 0, 0, 0.25);
  padding: 2rem;
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  h3 {
    margin-top: 0;
    font-size: 2.2rem;
    color: ${({ theme }) => theme.dblue};
    text-transform: uppercase;
  }
  p {
    margin-top: 0;
    margin-bottom: 0;
    font-size: 1.8rem;
    color: ${({ theme }) => theme.silver};
  }
  .comms {
    margin-top: 2rem;
  }
  .postal {
    margin-top: 2rem;
  }
`;

function ContactDetails({ contact }) {
  return (
    <>
      <h3>{contact.officeloc}</h3>
      <p>{contact.office}</p>
      <p>{contact.street}</p>
      <p>
        {contact.city} {contact.state} {contact.postcode}
      </p>

      <div className="comms">
        <p>Telephone: {contact.telephone}</p>
        <p>Email: {contact.email}</p>
      </div>
      <div className="postal">
        <p>Postal:</p>
        <p>{contact.postal}</p>
        <p>
          {contact.city} {contact.state} {contact.postcode}
        </p>
      </div>
    </>
  );
}


export default function Contact({ contacts }) {
  return (
    <StyledContact>
      {contacts.map((contact) => (
        <ContactDetails key={contact.id} contact={contact} />
      ))}
    </StyledContact>
  );
}
