import React from "react";
import styled from "styled-components";

const StyledNews = styled.div`
  width: 30rem;
  margin-top: 4rem;
  background: ${({ theme }) => theme.dblue};
  border: 0.05rem solid ${({ theme }) => theme.silver};
  box-shadow: 0 0 0.5rem 0.5rem rgba(0, 0, 0, 0.4);
  border-radius: 1rem;
  padding: 1rem;
  
  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(28rem, 1fr));
    grid-auto-rows: auto;
    gap: 1rem;
    width: 90%;
    margin: 0 auto 2rem;
  }
  @media (min-width: 1024px) {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(30rem, 1fr));
    grid-auto-rows: auto;
    gap: 1rem;
    width: 100%;
    margin: 0;
  }
`;

const StyledNewsItem = styled.div`
  display: flex;
  flex-direction: column;
  width: 28rem;
  margin: 0 auto 1rem;
  background: ${({ theme }) => theme.blue};
  border: 0.05rem solid ${({ theme }) => theme.silver};
  box-shadow: 0 0 0.5rem 0.5rem rgba(0, 0, 0, 0.4);
  border-radius: 1rem;
  :nth-child(6) {
    margin-bottom: 0;
  }
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
      flex: 1;
      font-size: 1.5rem;
      padding: 0.5rem;
      align-items: flex-start;
      color: ${({ theme }) => theme.silver};
    }
  }
  @media (min-width: 768px) {
    width: 28rem;
    margin-bottom: 0;
  }
  @media (min-width: 1024px) {
    width: 32rem;
    margin-bottom: 0;
  }
`;

function NewsItem({ item }) {
  return (
    <StyledNewsItem>
      <h2>{item.headline}</h2>
      <h5>SOURCE: {item.source}</h5>
      <h5>{Date(item.datetime).toString()}</h5>
      <hr style={{ margin: `0.5rem 1rem` }} />
      <div>
        <img src={item.image} alt={item.headline} width="220" />
        <p>{item.summary}</p>
      </div>
    </StyledNewsItem>
  );
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
