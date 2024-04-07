'use client';
import {
  Box,
  Button,
  Flex,
  Input,
  InputGroup,
  InputRightElement,
  InputLeftElement,
  Icon,
  InputRightAddon,
  useColorModeValue,
  Heading
} from '@chakra-ui/react';
import React from 'react';
import { homePageImages } from '../../images.config';
import { SearchIcon } from '@chakra-ui/icons';
import { GiKnifeFork } from 'react-icons/gi';

const Home = () => {
  return (
    <Box
      backgroundImage={homePageImages.pizzaImage}
      backgroundSize="cover"
      backgroundPosition="center"
      width="calc(100vw-1rem)"
      height="60vh"
      display="flex"
      justifyContent="center"
      alignItems="center"
      margin="1rem"
      borderRadius="md"
    >
      <Flex flexDirection="column" width={{ base: '90vw', lg: '40vw' }} alignItems="center" gap="2rem">
        <Heading color="white">Find your favorite dish?</Heading>
        <InputGroup size="lg" bg={useColorModeValue('gray.100', 'gray.900')} borderRadius="md">
          <InputLeftElement padding="0.5rem">
            <Icon as={GiKnifeFork} fontWeight="600" />
          </InputLeftElement>
          <Input
            placeholder="Search you recipes..."
            borderRadius="md"
            border="none"
            boxShadow="md"
            _focus={{ outline: 'none' }}
            _placeholder={{ fontSize: '1rem' }}
          />
          <InputRightElement padding="0.5rem">
            <Button
              h="2.5rem"
              size="md"
              bg="orange"
              color={useColorModeValue('gray.100', 'gray.900')}
              _hover={{ bg: 'orange.400' }}
            >
              <SearchIcon width={4} height={4} />
            </Button>
          </InputRightElement>
        </InputGroup>
      </Flex>
    </Box>
  );
};

export default Home;
