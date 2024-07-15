import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from './Routes';
import theme from "./theme";

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Router>
        <Routes />
      </Router>
    </ChakraProvider>
  )
}

export default App;