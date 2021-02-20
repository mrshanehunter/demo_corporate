import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

const CarouselImage4 = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "homecarousel4-01.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  if (!data?.placeholderImage?.childImageSharp?.fluid) {
    return <div>Picture not found</div>;
  }

  return <Img fluid={data.placeholderImage.childImageSharp.fluid} />;
};

export default CarouselImage4;