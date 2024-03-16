'use client';
import { roboto } from '@/theme/fontsTheme';
import { Box, BoxProps, useColorModeValue } from '@chakra-ui/react';
import Link from 'next/link';
import React from 'react';

interface NavLinkProps extends BoxProps {
  children: React.ReactNode;
  href: string;
}

const NavLink = ({ children, href, ...props }: NavLinkProps) => {
  return (
    <Link href={href} passHref>
      <Box as="a" px={2} py={1} fontFamily={roboto.style.fontFamily} fontWeight="500" {...props}>
        {children}
      </Box>
    </Link>
  );
};

export default NavLink;
