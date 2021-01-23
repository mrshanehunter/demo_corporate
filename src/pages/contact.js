import React from "react";
import { graphql } from "gatsby";
import Contact from "../components/Contact";
import styled from "styled-components";

const ContainingDiv = styled.div`
width: 50%;
height: 80%;
margin: 20% auto;
`;


export default function contactPage({ data }) {
const contacts = data.contacts.nodes;
console.log(contacts);
  return (

   
    <ContainingDiv>
      <Contact contacts={contacts} />
    </ContainingDiv>
 

);
}

export const query = graphql` 
query contactsQuery {
contacts: allSanityContacts {
  nodes {
    id
    officeloc
    telephone
    email
    office
    street
    postal
    city
    state
    postcode
    image {
      asset {
        fixed(width: 300, height: 300) {
          ...GatsbySanityImageFixed
        }
        fluid(maxWidth: 600) {
          ...GatsbySanityImageFluid
        }
      }
    }
  }
}
}
`;  
