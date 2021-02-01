import React from "react";
import styled from "styled-components";

const StyledNews = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-auto-rows: auto;
  gap: 1.5rem;
  margin: 4rem 1rem;
  background: ${({ theme }) => theme.lblue};
  border: 0.05rem solid ${({ theme }) => theme.silver};
  box-shadow: 0 0 0.5rem 0.5rem rgba(0, 0, 0, 0.4);
  border-radius: 1rem;
  padding: 1rem;
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
 
`;

const StyledNewsItem = styled.div` 
  width: 25rem;
  margin: 0 auto;
  background: ${({ theme }) => theme.dblue};
  border: 0.05rem solid ${({ theme }) => theme.silver};
  box-shadow: 0 0 0.5rem 0.5rem rgba(0, 0, 0, 0.4);
  border-radius: 1rem;
  h2 {
    margin-bottom: 0.5rem;
    padding: 0 1rem;
    color: ${({ theme }) => theme.primaryHover};
  }
  h5 {
    margin: 0;
    padding-left: 1rem;
  }
  div {
    display: flex;
    flex-direction: column;
    align-content: center;
    justify-content: center;
    align-items: center;
    margin-bottom: 0;
    padding: 0.5rem;
    p {
      font-size: 1.5rem;
      padding: 0.5rem;
      align-items: flex-start;
      color: ${({ theme }) => theme.silver};
    }
  }

`;

function NewsItem({ item }) {
  return (
    <StyledNewsItem>
      <h2>{item.headline}</h2>
      <h5>SOURCE:{" "}{item.source}</h5>
      <h5>{Date(item.datetime).toString()}</h5>
      <hr style={{margin: `0.5rem 1rem`}} />
      <div>
        <img src={item.image} alt={item.headline} width="220"/>
        <p>{item.summary}</p>
      </div>
      
      
    </StyledNewsItem>
  )
}

const NewsTable = (props) => {
  const { news } = props;
  
  if (!news || news.length === 0) return <p>No News available today</p>;
  return (
    <StyledNews>
      {news.map((item) => (
        <NewsItem key={item.id} item={item} />
      ))}
    </StyledNews>
  );
};

export default NewsTable;
