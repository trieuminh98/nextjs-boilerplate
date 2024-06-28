import localFont from 'next/font/local';

// Ref: https://github.com/orioncactus/pretendard?tab=readme-ov-file#nextjs
export const pretendard = localFont({
  src: '../../public/fonts/PretendardVariable.woff2',
  display: 'swap',
  weight: '45 920',
  variable: '--font-pretendard',
});
