import { Playfair_Display, Poppins, Roboto } from 'next/font/google';

export const poppins = Poppins({
  weight: ['400', '500', '700'],
  subsets: ['latin']
});

export const roboto = Roboto({
  weight: ['300', '400', '500', '700', '900'],
  subsets: ['latin']
});

export const playFair = Playfair_Display({
  weight: ['400', '700'],
  subsets: ['latin']
});
