import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { ThemeToggler } from './ThemeToggler'
import SearchInput from './SearchInput'
import GenreDropdown from './GenreDropdown'
import { NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuTrigger, NavigationMenuContent, NavigationMenuLink } from '@radix-ui/react-navigation-menu'
function Header() {
  return (
    <header className='fixed w-full z-20 top-0 flex items-center justify-between p-5 bg-gradient-to-t from-gray-200/0 via-bg-gray-900/25 to-gray-900'>
        <Link href={"/"} className='mr-10'>
            <Image className='cursor-pointer invert dark:invert-0' src={"/logo.png"} alt={"AP Library"} width={100} height={100} />
        </Link>
        <div className='flex space-x-2'>
            <GenreDropdown/>
            <SearchInput/>
            <ThemeToggler/>
        </div>
    </header>
  )
}

export default Header