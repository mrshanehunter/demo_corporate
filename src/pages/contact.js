import React from "react";
import { graphql } from "gatsby";
import Contact from "../components/Contact";
import ContactIntro from "../components/ContactIntro";
import ContactForm from "../components/ContactForm";
import styled from "styled-components";
import SEO from "../components/SEOComponent";

const ContainingDiv = styled.div`
  width: 80%;
  margin: 12.5rem auto;
  display: grid;
  grid-template-columns: 1fr;
  gap: 3vw;
  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (min-width: 1024px) {
    grid-template-columns: 1fr 1fr 1fr;
    gap: 2vw;
  }
`;

export default function contactPage( props ) {
  const contacts = props.data.contacts.nodes;
  const location = props.location;
  return (
    <>
    <SEO title="Contact Form / Details" />
    <ContainingDiv>
      <ContactIntro />
      <ContactForm location={location}/>
      <Contact contacts={contacts} />
    </ContainingDiv>
    </>
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
