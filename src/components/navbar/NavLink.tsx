'use client';
import { roboto } from '@/theme/fontsTheme';
import { Box, BoxProps, useColorModeValue } from '@chakra-ui/react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

interface NavLinkProps extends BoxProps {
  children: React.ReactNode;
  href: string;
}

const NavLink = ({ children, href, ...props }: NavLinkProps) => {
  const pathname = usePathname();

  return (
    <Link href={href} passHref>
      <Box
        px={2}
        py={1}
        fontFamily={roboto.style.fontFamily}
        fontWeight="500"
        transition="all 0.4s ease-in-out"
        tra
        {...props}
        sx={pathname === href ? { ...props._hover } : {}}
      >
        {children}
      </Box>
    </Link>
  );
};

export default NavLink;
