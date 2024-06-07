import React, { useState } from 'react';
import { Box, Button, Image, Input, Stack, VStack, Center, Text } from '@chakra-ui/react';
import website_icon from '../../assets/icon.png';
import login_background from '../../assets/login-background.png';



  // to store the value taken from onchange input field // 

  const signupinitialValue = {
    name : '',
    email : '', 
    password : ''
  }

const Login = () => {
  // Creating toggle to switch between login and create account
  const [account, toggleAccount] = useState('login');
  // storing value with useState //

  const [signup,setSignup] = useState(signupinitialValue)


  // Function to toggle between 'login' and 'create account'
  const handleToggleAccount = () => {
    toggleAccount(account === 'login' ? 'create' : 'login');
  };

  const onInputChange = (e)=>{ 

    // appending the values //
    // e.name is our key now .. //
    setSignup({...signup,[e.target.name]:e.target.value})
  }
  // creating backend after this to store data //

  

  return (
    <>
      <Center
        minHeight="100vh"
        backgroundImage={`url(${login_background})`}
        backgroundSize="cover"
        backgroundPosition="center"
        paddingX={{ base: "10px", md: "20px" }}
      >
        <Box
          width="100%"
          maxWidth={{ base: "300px", md: "500px" }}
          padding={{ base: "10px", md: "20px" }}
          boxShadow="0 0 10px rgba(0, 0, 0, 0.1)"
          borderRadius="8px"
          bg="rgba(255, 255, 255, 0.8)"
          marginTop="20px"
        >
          <Stack spacing={5}>
            <Box display="flex" justifyContent="center" marginBottom="10px">
              {/* <Image src={website_icon} width={{ base: "200px", md: "300px" }} /> */}
              <Text fontFamily={"Bad Script,cursive"} fontWeight="800" fontSize="50px">MemoryOcean . .</Text>
            </Box>

            {/* Conditional rendering based on account state */}

            
            {account === 'login' ? (
              <>
              {/* using onchange to get value from input in console*/}

              
                <Input placeholder="Email" fontSize="1rem" _hover={{ borderColor: "#a27fba" }} />
                <Input placeholder="Password" fontSize="1rem" _hover={{ borderColor: "#a27fba" }}/>
                <Button variant="solid" colorScheme="green" width="100%" fontSize="1rem" padding="10px 20px">Login</Button>
              </>
            ) : (
              <>
                <Input placeholder='Name' fontSize="1rem" _hover={{ borderColor: "#a27fba" }} onChange={onInputChange} name='name :'/>
                <Input placeholder="Email" fontSize="1rem" _hover={{ borderColor: "#a27fba" }} onChange={onInputChange} name='email :'/>
                <Input placeholder="Password" fontSize="1rem" _hover={{ borderColor: "#a27fba" }} onChange={onInputChange} name='password :'/>
                <Button variant="solid" colorScheme="green" width="100%" fontSize="1rem" padding="10px 20px">Sign up</Button>
                
              </>
            )}

  
  

            <VStack spacing={2} width="100%">
     
              <Text>OR</Text>
              <Button
                variant="outline"
                width="100%"
                fontSize="1rem"
                padding="10px 20px"
                colorScheme='orange'
                onClick={handleToggleAccount} // Toggle account state on click
              >

                {account === 'login' ? 'Create an Account' : 'Back to Login'}
              </Button>
            </VStack>
          </Stack>
        </Box>
      </Center>
    </>
  );
}

export default Login;
