import React from "react";
import { useStaticQuery, graphql, Link } from "gatsby";
import Img from "gatsby-image";
import styled from "styled-components";

const StyledWelcomeService = styled.div`
  width: 97.5%;
  margin: 0 auto 2rem;
  background: ${({ theme }) => theme.blue};
  border: 0.05rem solid ${({ theme }) => theme.silver};
  box-shadow: 0 0 0.5rem 0.5rem rgba(0, 0, 0, 0.4);
  border-radius: 1rem;
  a {
    color: ${({ theme }) => theme.primaryHover};
    text-decoration: none;
    cursor: pointer;
    font-size: 1.8rem;
  }
`;

const StyledHeader1 = styled.h1`
  color: ${({ theme }) => theme.primaryHover};
  margin-bottom: 0;
  text-transform: uppercase;
`;
const StyledImage = styled.div`
  margin-top: 1.5rem;
  border: 0.075rem solid ${({ theme }) => theme.dblue};
  background: ${({ theme }) => theme.primaryHover};
  box-sizing: border-box;
  box-shadow: 0.25rem 0.25rem 0.5rem 0.5rem rgba(0, 0, 0, 0.25);
  padding: 0;
  border-radius: 0.5rem;
  .gatsby-image-wrapper {
    width: 25rem;
    height: 25rem;
  }
`;

export default function WelcomeService() {
  const { feature } = useStaticQuery(graphql`
    query {
      feature: sanityServices(svccode: { eq: "SF0" }) {
        name
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
    <StyledWelcomeService>
      <StyledImage>
        <Img fluid={feature.image.asset.fluid} alt={feature.name} />
      </StyledImage>
      <StyledHeader1>{feature.name}</StyledHeader1>
      <p>{feature.description1}</p>
      <Link to="/services">Continue Reading ...</Link>
    </StyledWelcomeService>
  );
}
