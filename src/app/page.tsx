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
  useColorModeValue,
  Heading,
  Container,
  Text,
  Grid,
  GridItem
} from '@chakra-ui/react';
import React, { Fragment } from 'react';
import { homePageImages } from '../../images.config';
import { SearchIcon } from '@chakra-ui/icons';
import { GiKnifeFork } from 'react-icons/gi';
import Image from 'next/image';
import { FaStar } from 'react-icons/fa6';

const Home = () => {
  return (
    <Fragment>
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
      <Container>
        <Box>
          <Heading fontSize="2.25rem" padding="1rem 0" fontWeight="700">
            Super Delicious
          </Heading>
          <Grid
            templateColumns={{
              base: 'repeat(1, 1fr)',
              md: 'repeat(2, 1fr)',
              lg: 'repeat(3, 1fr)'
            }}
          >
            <GridItem>
              <Flex flexDirection="column" padding="0 1.5rem" gap="0.5rem">
                <Image
                  src="https://static01.nyt.com/images/2022/12/23/multimedia/afg-spaghetti-alla-assassina-1-19ef/afg-spaghetti-alla-assassina-1-19ef-master768.jpg?width=1280&quality=75&auto=webp"
                  width="357"
                  height="247"
                  alt="noodles"
                  objectFit="cover"
                  style={{ borderRadius: '6px' }}
                />
                <Box>
                  <Flex flexDirection="row" alignItems="center" gap="0.25rem" marginBottom="0.25rem">
                    <Icon as={FaStar} boxSize="1rem" color="orange" />
                    <Icon as={FaStar} boxSize="1rem" color="orange" />
                    <Icon as={FaStar} boxSize="1rem" color="orange" />
                    <Icon as={FaStar} boxSize="1rem" color="orange" />
                    <Icon as={FaStar} boxSize="1rem" color="orange" />
                  </Flex>
                  <Text fontSize="1.25rem" fontWeight="600">
                    Spaghetti all'Assassina (Spicy Singed Tomato Pasta)
                  </Text>
                </Box>
              </Flex>
            </GridItem>
            <GridItem>
              <Flex flexDirection="column" padding="0 1.5rem" gap="0.5rem">
                <Image
                  src="https://static01.nyt.com/images/2022/12/23/multimedia/afg-spaghetti-alla-assassina-1-19ef/afg-spaghetti-alla-assassina-1-19ef-master768.jpg?width=1280&quality=75&auto=webp"
                  width="357"
                  height="247"
                  alt="noodles"
                  objectFit="cover"
                  style={{ borderRadius: '6px' }}
                />
                <Box>
                  <Flex flexDirection="row" alignItems="center" gap="0.25rem" marginBottom="0.25rem">
                    <Icon as={FaStar} boxSize="1rem" color="orange" />
                    <Icon as={FaStar} boxSize="1rem" color="orange" />
                    <Icon as={FaStar} boxSize="1rem" color="orange" />
                    <Icon as={FaStar} boxSize="1rem" color="orange" />
                    <Icon as={FaStar} boxSize="1rem" color="orange" />
                  </Flex>
                  <Text fontSize="1.25rem" fontWeight="600">
                    Spaghetti all'Assassina (Spicy Singed Tomato Pasta)
                  </Text>
                </Box>
              </Flex>
            </GridItem>{' '}
            <GridItem>
              <Flex flexDirection="column" padding="0 1.5rem" gap="0.5rem">
                <Image
                  src="https://static01.nyt.com/images/2022/12/23/multimedia/afg-spaghetti-alla-assassina-1-19ef/afg-spaghetti-alla-assassina-1-19ef-master768.jpg?width=1280&quality=75&auto=webp"
                  width="357"
                  height="247"
                  alt="noodles"
                  objectFit="cover"
                  style={{ borderRadius: '6px' }}
                />
                <Box>
                  <Flex flexDirection="row" alignItems="center" gap="0.25rem" marginBottom="0.25rem">
                    <Icon as={FaStar} boxSize="1rem" color="orange" />
                    <Icon as={FaStar} boxSize="1rem" color="orange" />
                    <Icon as={FaStar} boxSize="1rem" color="orange" />
                    <Icon as={FaStar} boxSize="1rem" color="orange" />
                    <Icon as={FaStar} boxSize="1rem" color="orange" />
                  </Flex>
                  <Text fontSize="1.25rem" fontWeight="600">
                    Spaghetti all'Assassina (Spicy Singed Tomato Pasta)
                  </Text>
                </Box>
              </Flex>
            </GridItem>
          </Grid>
        </Box>
      </Container>
    </Fragment>
  );
};

export default Home;
