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
    grid-template-columns: 1fr;
    grid-auto-rows: auto;
    gap: 1rem;
    width: 100%;
  }
  @media (min-width: 1350px) {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(22.5rem, 1fr));
    grid-auto-rows: auto;
    gap: 1rem;
    width: 100%;
  }
  @media (min-width: 1440px) {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(17.5vw, 1fr));
    grid-auto-rows: auto;
    gap: 1vw;
    padding: 0.5vw;
    width: 100%;
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
  .headline h2 {
    margin-bottom: 0.5rem;
    padding: 0 1rem;
    color: ${({ theme }) => theme.primaryHover};
  }
  .headline h5 {
    margin: 0;
    padding-left: 1rem;
  }
  .story {
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
    img {
      border-radius: 1rem;
      border: 0.05rem solid ${({ theme }) => theme.silver};
      box-shadow: 0 0 0.5rem 0.5rem rgba(0, 0, 0, 0.4);
    }
  }
  @media (min-width: 768px) {
    width: 28rem;
    margin-bottom: 0;
  }
  @media (min-width: 1024px) {
    display: flex;
    flex-direction: row;
    width: 100%;
    align-items: flex-start;
    .headline {
      max-width: 40%;
      margin-top: 0.5rem;
      h2 {
        margin-top: 0;
      }
      h5 {
        align-self: flex-start;
      }
    }
    .story {
      max-width: 60%;
      margin-top: 0.5rem;
      justify-content: center;
    }
    img {
      max-width: 90%;
    }
  
  }
  @media (min-width: 1350px) {
  display: flex;
  flex-direction: column;
  width: 25rem;
  margin: 0 auto;
  .headline {
    flex-direction: column;
    max-width: 100%;
  }
  .story {
    max-width: 100%;
    margin-bottom: 0;
  }
  }
  @media (min-width: 1440px) {
    width: 17.5vw;
    .headline {
      margin-top: 0.5vw;
      padding: 0 0.5vw;
      h2 {
        font-size: 1.2vw;
      }
      h5 {
        font-size: 0.75vw;
        padding-bottom: 0.25vw;
      }
    }
    .story {
      p {
        font-size: 1.1vw;
        padding: 0 0.5vw;
      }
      img {
        width: 90%;
      }
    }
  }
  
`;

function NewsItem({ item }) {
  return (
    <StyledNewsItem>
      <div className="headline">
      <h2>{item.headline}</h2>
      <h5>SOURCE: {item.source}</h5>
      <h5>{Date(item.datetime).toString()}</h5>
      </div>
      <div className="story">
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
    <StyledNews className="news">
      {news.map((item) => (
        <NewsItem key={item.id} item={item} />
      ))}
    </StyledNews>
  );
};

export default NewsTable;
