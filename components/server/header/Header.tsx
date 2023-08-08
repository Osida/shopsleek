import { SearchBtn } from '@/components/client';
import { Input } from '@/lib/shadcn/components/ui/input';
import { logo } from '@/public/images';
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid';
import Image from 'next/image';
import Link from 'next/link';

type Props = {};

const avatarImage =
  'https://images.unsplash.com/photo-1608889175123-8ee362201f81?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80';

export default function Header({}: Props) {
  return (
    <header className='bg-red-3000 flex items-center p-4 space-x-2 shadow-md'>
      {/* flex item 1 */}
      <Link href='/'>
        <div className='relative h-10 w-28'>
          <Image
            src={logo}
            alt='ShopSleek'
            fill={true}
            className='object-contain shrink-1 cursor-pointer'
          />
        </div>
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
            className='w-full h-full bg-transparent text-tfc focus:outline-none'
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
