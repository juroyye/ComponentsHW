import { ThemeProvider} from './components/styles/Global';
import Header from "./components/Header";
import { Container } from "./components/styles/Container.styled";

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
