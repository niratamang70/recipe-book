import React, { FC } from 'react';
import Image from 'next/image';

import { Box, Text, Flex, Icon } from '@chakra-ui/react';
import { FaStar } from 'react-icons/fa6';

interface RecipeCardProps {
  title: string;
  rating: number;
  imageUrl: string;
}

export const RecipeCard: FC<RecipeCardProps> = ({ title, rating, imageUrl }) => {
  return (
    <Flex
      flexDirection="column"
      gap="0.5rem"
      _hover={{
        color: 'orange'
      }}
    >
      <Box
        borderRadius="6px"
        overflow="hidden"
        position="relative"
        width={{ base: '100%', md: '22.313rem' }}
        height="15.438rem"
        sx={{
          '& img': {
            transition: 'transform 0.8s ease'
          },
          '&:hover img': {
            transform: 'scale(1.1)'
          }
        }}
      >
        <Image src={imageUrl} width={357} height={247} alt="noodles" layout="responsive" objectFit="cover" />
      </Box>
      <Box>
        <Flex flexDirection="row" alignItems="center" gap="0.25rem" marginBottom="0.25rem">
          {Array.from({ length: rating }, (_, index) => (
            <Icon as={FaStar} boxSize="1rem" color="orange" key={index} />
          ))}
        </Flex>

        <Text fontSize="1.25rem" fontWeight="600" transition="0.8s ease">
          {title}
        </Text>
      </Box>
    </Flex>
  );
};
