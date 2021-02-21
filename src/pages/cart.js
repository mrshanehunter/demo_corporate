import React from "react";
import styled from "styled-components";
import SEO from "../components/SEOComponent";
import ShoppingCart from "../components/ShoppingCart";

const ContainingDiv = styled.div`
  width: 80%;
  height: 90%;
  margin: 5rem auto;
  display: flex;
  flex-direction: column;
`;

export default function cartPage({ data }) {
  return (
    <>
      <SEO title="SAS Cart" />
      <ContainingDiv>
        <ShoppingCart style={{ fontSize: `3rem`, width: `100%` }} />
      </ContainingDiv>
    </>
  );
}

// export const query = graphql`
//   query productsQuery {
//     products: allSanityProducts {
//       nodes {
//         id
//         name
//         pdcode
//         price
//         pricecode
//         description1
//         description2
//         image {
//           asset {
//             fixed(width: 300, height: 300) {
//               ...GatsbySanityImageFixed
//             }
//             fluid(maxWidth: 600) {
//               ...GatsbySanityImageFluid
//             }
//           }
//         }
//       }
//     }
//   }
// `;
