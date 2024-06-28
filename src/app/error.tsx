'use client'; // Error components must be Client Components

import { Button } from '@mui/material';
import { useRouter } from 'next-nprogress-bar';
import { useEffect } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const router = useRouter();

  useEffect(() => {
    // Log the error to an error reporting service
    // eslint-disable-next-line no-console
    console.error(error);
  }, [error]);

  return (
    <div>
      <h2>{error.message}</h2>
      <Button
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => {
            reset();
            router.push('/');
          }
        }
      >
        Try again
      </Button>
    </div>
  );
}
