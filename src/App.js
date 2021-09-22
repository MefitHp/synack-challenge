import styled from "@emotion/styled";
import { useSelector } from "react-redux";

import { SearchBar } from "./components";
import { getSearchStateSelector } from "./redux/selectors/search";
const Container = styled.section`
  height: calc(100vh - 2em);
  max-width: 128;
  max-width: 960px;
  margin: 0 auto;
  padding: 1em;
`;

const Layout = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const SearchBarContainer = styled.section`
  padding: 1em 0em;
`;

const ResultsContainer = styled.div`
  flex: 1;
  padding: 1rem;
  border-radius: 0.5rem;
  overflow-y: auto;
  box-shadow: var(--box-shadow);
`;

function App() {
  const { results, error } = useSelector(getSearchStateSelector);
  return (
    <Container className="App">
      <Layout>
        <SearchBarContainer>
          <SearchBar />
        </SearchBarContainer>
        <ResultsContainer>
          {error && (
            <span>
              There was en error while trying to fetch:
              <code>{JSON.stringify(error, null, 2)}</code>
            </span>
          )}
          {results?.map(({ title, provider }) => {
            return (
              <div key={title}>
                <p>{title}</p>
                <b>{provider}</b>
              </div>
            );
          })}
        </ResultsContainer>
      </Layout>
    </Container>
  );
}

export default App;
