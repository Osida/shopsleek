'use client';
import { Button } from '@/lib/shadcn/components/ui/button';
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid';
import { experimental_useFormStatus as useFormStatus } from 'react-dom';

type Props = {};

export default function SearchBtn({}: Props) {
  const { pending } = useFormStatus();

  const buttonText = pending ? (
    'Searching...'
  ) : (
    <MagnifyingGlassIcon className='w-4 h-4' />
  );

  return (
    <Button
      type='submit'
      disabled={pending}
      className='bg-tprimary text-tbg rounded-3xl flex items-center justify-center py-2 px-4 disabled:opacity-50 disabled:cursor-not-allowed'
    >
      {buttonText}
    </Button>
  );
}
