import styled from "@emotion/styled";

import { SearchBar } from "./components";
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
  return (
    <Container className="App">
      <Layout>
        <SearchBarContainer>
          <SearchBar />
        </SearchBarContainer>
        <ResultsContainer>Results</ResultsContainer>
      </Layout>
    </Container>
  );
}

export default App;
