import React from 'react';
import { Box, Button, Image, Input, Stack, VStack, Center, Text } from '@chakra-ui/react';
import website_icon from '../../assets/icon.png';
import login_background from '../../assets/login-background.png';

const Login = () => {
  return (
    <Center
      minHeight="100vh"
      backgroundImage={`url(${login_background})`}
      backgroundSize="cover"
      backgroundPosition="center"
      paddingX={{ base: "10px", md: "20px" }}
    >
      <Box
        width="100%"
        maxWidth={{ base: "300px", md: "500px"}}
        padding={{ base: "10px", md: "20px" }}
        boxShadow="0 0 10px rgba(0, 0, 0, 0.1)"
        borderRadius="8px"
        bg="rgba(255, 255, 255, 0.8)"
        marginTop="20px"
      >
        <Stack spacing={5}>
          <Box display="flex" justifyContent="center" marginBottom="10px">
            <Image src={website_icon} width={{ base: "200px", md: "300px" }} />
          </Box>
          <Input placeholder="Name" fontSize="1rem" />
          <Input placeholder="Email" fontSize="1rem" />
          <Input placeholder="Password" fontSize="1rem" />
          <VStack spacing={2} width="100%">
            <Button variant="solid" colorScheme="green" width="100%" fontSize="1rem" padding="10px 20px">
              Login
            </Button>
            <Text>OR</Text>
            <Button variant="outline" width="100%" fontSize="1rem" padding="10px 20px">
              Create an Account
            </Button>
          </VStack>
        </Stack>
      </Box>
    </Center>
  );
}

export default Login;
