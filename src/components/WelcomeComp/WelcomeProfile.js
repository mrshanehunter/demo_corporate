import React from "react";
import { useStaticQuery, graphql, Link } from "gatsby";
import Img from "gatsby-image";
import styled from "styled-components";

const StyledWelcomeProfile = styled.div`
  width: 97.5%;
  margin: 0 auto 2rem;
  background: ${({ theme }) => theme.lblue};
  border: 0.05rem solid ${({ theme }) => theme.silver};
  box-shadow: 0 0 0.5rem 0.5rem rgba(0, 0, 0, 0.4);
  border-radius: 1rem;
  a {
    color: ${({ theme }) => theme.dblue};
    text-decoration: none;
    cursor: pointer;
    font-size: 1.8rem;
  }
`;

const StyledHead = styled.div`
  margin-top: 1.5rem;
  border: 0.075rem solid ${({ theme }) => theme.silver};
  background: ${({ theme }) => theme.dblue};
  box-sizing: border-box;
  box-shadow: 0.25rem 0.25rem 0.5rem 0.5rem rgba(0, 0, 0, 0.25);
  padding: 0;
  border-radius: 0.5rem;
  .gatsby-image-wrapper {
    width: 25rem;
    height: 25rem;
  }
`;

const StyledHeader1 = styled.h1`
  color: ${({ theme }) => theme.dblue};
  margin-bottom: 0;
  text-transform: uppercase;
`;

const StyledHeader2 = styled.h2`
  color: ${({ theme }) => theme.dblue};
  margin-bottom: 0;
  margin-top: 0;
`;

export default function WelcomeProfile() {
  const { feature } = useStaticQuery(graphql`
    query {
      feature: sanityDirectors(name: { eq: "Oliver Marshall" }) {
        name
        dirqual
        description1
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
  `);

  return (
    <StyledWelcomeProfile>
      <StyledHead>
        <Img fluid={feature.image.asset.fluid} alt={feature.name} />
      </StyledHead>
      <StyledHeader1>{feature.name}</StyledHeader1>
      <StyledHeader2>{feature.dirqual}</StyledHeader2>
      <p>{feature.description1}</p>
      <Link to="/about">Continue Reading ...</Link>
    </StyledWelcomeProfile>
  );
}
