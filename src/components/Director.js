import React from "react";
import Img from "gatsby-image";
import styled from "styled-components";



const DirectorCard = styled.div`
  width: 30rem;
  height: 65rem;
  display: flex;
  flex-direction: column;
  border: 0.15rem solid ${({ theme }) => theme.silver};
  box-shadow: 0.25rem 0.25rem 0.5rem 0.5rem rgba(0 ,0 ,0 ,0.25);
  border-radius: 1rem;
  background: rgba(139,216,189,0.7);
  color: ${({ theme }) => theme.dblue};
  align-items: center;
  margin-bottom: 1rem;
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
  .desc {
    display: flex;
    flex-direction: column;
    padding: 0 1.5rem;
    }
    p {
      margin-top: 0;
    }
`;

const BioGrid = styled.div` 
  display: grid;
  grid-template-columns: 1fr 1fr 1fr; //repeat(3, minmax(300px, 1fr));
  gap: 1rem;
  grid-template-rows: auto; 
  padding: 1rem;
`;


const StyledHead = styled.div`
  width: 20rem;
  height: 20rem;
  border-radius: 50%;
  border: 0.075rem solid ${({ theme }) => theme.silver}; 
  box-shadow: 0.25rem 0.25rem 0.5rem 0.5rem rgba(0 ,0 ,0 ,0.25);
  margin: 1rem;
  .gatsby-image-wrapper {
    width: 20rem;
    height: 20rem;
    border-radius: 50%;
  }
`;

function DirectorBio({ director }) {
  return (
    
      <DirectorCard>
          <StyledHead><Img fluid={director.image.asset.fluid} alt={director.name} /></StyledHead>
              <h2>
                <span>{director.name} </span>
               </h2>
              <h4>{director.dirqual}</h4>
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