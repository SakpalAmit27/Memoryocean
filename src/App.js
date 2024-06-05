
import './App.css';
import Login from './components/account/Login';
import {ChakraProvider} from '@chakra-ui/react'
import { Button, ButtonGroup } from '@chakra-ui/react'

function App() {
  return (
    <ChakraProvider>
      <Login/>

    </ChakraProvider>


  );
}

export default App;
