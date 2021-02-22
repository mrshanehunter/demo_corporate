import React from "react";
import Img from "gatsby-image";
import styled from "styled-components";



const DirectorCard = styled.div`
  width: 25rem;
  height: auto;
  display: flex;
  flex-direction: column;
  border: 0.15rem solid ${({ theme }) => theme.silver};
  box-shadow: 0.25rem 0.25rem 0.5rem 0.5rem rgba(0 ,0 ,0 ,0.25);
  border-radius: 1rem;
  background: rgba(139,216,189,0.7);
  color: ${({ theme }) => theme.dblue};
  align-items: center;
  text-align: center;
  margin-bottom: 1rem;
  .detail {
  h2 {
      font-size: 2.4rem;
      margin-bottom: 0;
  }
    h4 {
      font-size: 1.4rem;
      margin-top: 0.5rem;
      padding: 0 2rem;
      text-align: center;
  }
  }
  .desc {
    display: flex;
    flex-direction: column;
    padding: 0 1.5rem;
    }
    p {
      margin-top: 0;
    }
  @media (min-width: 768px) {
    display: flex;
    flex-direction: row;
    width: 90%;
    height: auto;
    margin: 0 auto;
  }  
  @media (min-width: 1024px) {
    max-Width: 950px;
    .desc {
    text-align: left;
    }
  }
  @media (min-width: 1440px) {
    max-width: 60vw;
    .detail {
      h2 {
        font-size: 1.6vw;
      }
      h4 {
        font-size: 1vw;
      }
    }

    .desc {
      padding: 1vw;
      p {
        font-size: 1.2vw;
      }
    }
  }
 `;

const BioGrid = styled.div` 
  display: grid;
  grid-template-columns: 1fr; 
  gap: 1rem;
  grid-template-rows: auto; 
  padding: 1rem;
  margin-top: 5rem;
  @media (min-width: 768px) {
    grid-template-rows: 1fr 1fr 1fr;
    gap: 4vw;
  }
 
`;


const StyledHead = styled.div`
  width: 20rem;
  height: 20rem;
  border-radius: 50%;
  border: 0.075rem solid ${({ theme }) => theme.silver}; 
  box-shadow: 0.25rem 0.25rem 0.5rem 0.5rem rgba(0 ,0 ,0 ,0.25);
  margin: 2rem;
  .gatsby-image-wrapper {
    width: 20rem;
    height: 20rem;
    border-radius: 50%;
  }
  @media (min-width: 1440px) {
    width: 15vw;
    height: 15vw;
    margin: 1vw;
    box-shadow: 0.25vw 0.25vw 0.5vw 0.5vw rgba(0 ,0 ,0 ,0.25);
    .gatsby-image-wrapper {
      width: 15vw;
      height: 15vw;
      border: 0.075vw solid ${({ theme }) => theme.silver}; 
    }
  }
`;

function DirectorBio({ director }) {
  return (
    
      <DirectorCard>
          <div className="detail">
          <StyledHead><Img fluid={director.image.asset.fluid} alt={director.name} /></StyledHead>
              <h2>
                <span>{director.name} </span>
               </h2>
              <h4>{director.dirqual}</h4>
              </div>
              <div className="desc">
                <p>{director.description1}</p>
                <p>{director.description2}</p>
                <p>{director.description3}</p>
              </div>
      </DirectorCard>
 

  );
}

export default function Director({ directors }) {
  return (
    <BioGrid>
      {directors.map((director) => (
        <DirectorBio key={director.id} director={director} />
      ))}
    </BioGrid>
  );
}
