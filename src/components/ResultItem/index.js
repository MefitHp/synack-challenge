import styled from "@emotion/styled";

const Container = styled.div`
  padding: 2rem 1rem;
  border-bottom: 1px solid var(--primary);

  a {
    color: var(--primary);
    display: flex;
    gap: 1rem;
  }
  h3 {
    color: var(--primary);
    padding-bottom: 0.25rem;
  }
  span {
    text-decoration: none;
  }
  .source {
    display: flex;
    justify-content: flex-end;
    text-transform: capitalize;
  }
`;

const ResultItem = ({ title, description, link, provider }) => {
  return (
    <Container>
      <a target="_blank" href={link} rel="noreferrer">
        <h3>{title}</h3>
      </a>
      <p>{description}</p>
      <br />
      <div className="source">
        <span>
          <b>Source: </b>
          {provider}
        </span>
      </div>
    </Container>
  );
};

export default ResultItem;
