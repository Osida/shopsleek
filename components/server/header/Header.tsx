import { SearchBtn } from '@/components/client';
import { Input } from '@/lib/shadcn/components/ui/input';
import { logo } from '@/public/images';
import { MagnifyingGlassIcon, Bars3Icon } from '@heroicons/react/24/solid';
import { ShoppingCartIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';
import Link from 'next/link';
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from '@/lib/shadcn/components/ui/avatar';

type Props = {};

const avatarImage =
  'https://images.unsplash.com/photo-1608889175123-8ee362201f81?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80';

export default function Header({}: Props) {
  return (
    <header className='bg-red-3000 flex items-center py-2 px-4 space-x-2 shadow-md'>
      {/* flex item 1 */}
      <Link href='/'>
        <Image
          src={logo}
          alt='ShopSleek'
          width={100}
          height={100}
          className='object-contain shrink-1 cursor-pointer'
        />
      </Link>

      {/* Form (server action) */}
      <form
        action=''
        className='flex items-center flex-1 justify-end bg-blue-2000 space-x-2 drop-shadow-md'
      >
        <div className='flex items-center flex-1 space-x-2 bg-gray-300 max-h-11 max-w-lg rounded-full py-2 px-4 xl:max-w-3xl'>
          <MagnifyingGlassIcon className='w-5 h-5' />
          <Input
            name='searchTerm'
            type='text'
            placeholder="Let's go shopping"
            className='w-full h-full bg-transparent focus:outline-none'
          />
        </div>

        <SearchBtn />
      </form>

      {/* <Avatar>
        <AvatarImage src={avatarImage} className='w-10 h-10 rounded-full' />
        <AvatarFallback>Avatar</AvatarFallback>
      </Avatar> */}
    </header>
  );
}
