import { Text, VStack, Box } from '@chakra-ui/react';
import Image from 'next/image';
import React, { FC } from 'react';

interface CategoryCardProps {
  title: string;
  imageUrl: string;
}

const CategoryCard:FC<CategoryCardProps> = ({title,imageUrl}) => {
  return (
    <VStack px="0.75rem" my="1rem" spacing="0.5rem" _hover={{ color: 'orange' }}>
      <Box
        borderRadius="full"
        overflow="hidden"
        width="10rem"
        height="10rem"
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
          width="160"
          height="160"
          alt="noodles"
          layout="responsive"
          objectFit="cover"
          style={{ borderRadius: '6px', width: '100%', height: '100%' }}
        />
      </Box>
      <Text fontWeight="600" fontSize="1.25rem">
        {title}
      </Text>
    </VStack>
  );
};

export default CategoryCard;
