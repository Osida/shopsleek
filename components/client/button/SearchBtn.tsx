'use client';

import { experimental_useFormStatus as useFormStatus } from 'react-dom';
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid'

type Props = {};

export default function SearchBtn({}: Props) {
  const { pending } = useFormStatus();

  const buttonText = pending ? 'Searching...' : <MagnifyingGlassIcon className='w-5 h-5'/>;

  return (
    <button disabled={pending} className=''>
      {buttonText}
    </button>
  );
}
