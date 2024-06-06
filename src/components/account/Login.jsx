import React from 'react';
import { Box, Button, Image, Input, Stack, VStack, Center, Text } from '@chakra-ui/react';
import website_icon from '../../assets/icon.png';
import './Login.css';
import login_background from '../../assets/login-background.png'

const Login = () => {
  return (
    <>


    <Center className='whole'>
 
      <Box className='login-form'>
        <Stack spacing={5}>  {/* Reduce the spacing between elements */}
          <Box className='logo-id'>
            <Image src={website_icon} className='logo-img' />
          </Box>
          <Input className='login-input' placeholder='Name' />
          <Input className='login-input' placeholder='Email' />
          <Input className='login-input' placeholder='Password' />
          <VStack spacing={3} justifyContent='center' width='100%'>  {/* Center align */}
            <Button variant="solid" colorScheme='green' className='login-button'>Login</Button>
            <Text>OR</Text>
            <Button className='login-button' variant='outline'>Create an Account</Button>
          </VStack>
        </Stack>
      </Box>
    </Center>
    </>

  );
}

export default Login;
