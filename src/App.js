import { ThemeProvider
 } from "styled-components/dist/base";
import Header from "./Header";
import { Container } from "./Container.styled";

const theme = {
  colors: {
    header: '#ebfbff',
    body: '#fff',
    footer: '#003333',
  }
}

function App() {
  return (
    <ThemeProvider theme={theme}>
    <>
    <Container>
      <h1>Hello World</h1>
    </Container>
    </>
    </ThemeProvider>
  )
}

export default App;
