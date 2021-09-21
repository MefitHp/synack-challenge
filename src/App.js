import styled from "@emotion/styled";

const Container = styled.section`
  max-width: 128;
  max-width: 960px;
  margin: 0 auto;
  padding: 0 1em;
`;

function App() {
  return (
    <Container className="App">
      <h1>Synack</h1>
    </Container>
  );
}

export default App;
