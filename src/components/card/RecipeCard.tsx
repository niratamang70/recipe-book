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
      padding="0 1.5rem"
      gap="0.5rem"
      _hover={{
        color: 'orange'
      }}
    >
      <Box
        borderRadius="6px"
        overflow="hidden"
        sx={{
          position: 'relative',
          '& img': {
            transition: 'transform 0.8s ease'
          },
          '&:hover img': {
            transform: 'scale(1.1)'
          }
        }}
      >
        <Image
          src={imageUrl}
          width="357"
          height="247"
          alt="noodles"
          objectFit="cover"
          style={{ borderRadius: '6px', width: '100%', height: '100%' }}
        />
      </Box>
      <Box>
        <Flex flexDirection="row" alignItems="center" gap="0.25rem" marginBottom="0.25rem">
          {Array.from({ length: rating }, (_, index) => {
            return <Icon as={FaStar} boxSize="1rem" color="orange" />;
          })}
        </Flex>

        <Text fontSize="1.25rem" fontWeight="600" transition="0.8s ease">
          {title}
        </Text>
      </Box>
    </Flex>
  );
};
