'use client'

import * as React from 'react'
import { useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu"
import { Menu, X } from 'lucide-react'
import Image from 'next/image'


// these are the sample smooth scroll links that will be used in the navigation menu
// they will be replaced with the actual links later

const navItems = [
  { title: 'Platform', href: 'platform' },
  { title: 'Blog', href: '#why' },
  { title: 'Resources', href: '#perks' },
  { title: 'Parteners', href: '#parteners' },
  { title: 'Company', href: '#company' },
]

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header 
      className="flex items-center justify-between px-4 md:px-20 mt-5 relative"
    >
      {/* Logo */}
      <Link href="/" className="flex items-center space-x-2">
        <Image src="/logo.svg" alt="FourCore" width={200} height={100} />
      </Link>

      {/* Desktop Navigation */}
      <NavigationMenu className="hidden md:flex">
        <NavigationMenuList className='flex items-center space-x-4'>
          {navItems.map((item) => (
            <NavigationMenuItem key={item.title} className='text-lg font-medium hover:text-slate-400 transition-colors'>
              <Link href={item.href} legacyBehavior passHref>
                {item.title}
              </Link>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu> 

      {/* Desktop Book Demo Button */}
      <Button 
        className='hidden md:block rounded-full text-xl '
        size='lg'
      >
        Book Demo
      </Button>  

      {/* Mobile Menu Trigger */}
      <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
        <SheetTrigger asChild className='md:hidden'>
          <Button variant="ghost" size="icon" className='text-white'>
            {isMenuOpen ? <X /> : <Menu />}
          </Button>
        </SheetTrigger>
        <SheetContent side="right" className='w-[300px] backdrop-blur-md border-primary'>
          <SheetHeader className='mb-6'>
            <SheetTitle>
              <Image 
                src="/logo.svg" 
                alt="FourCore" 
                width={150} 
                height={50} 
                className='mx-auto'
              />
            </SheetTitle>
          </SheetHeader>
          
          {/* Mobile Navigation Links */}
          <nav className='flex flex-col space-y-4'>
            {navItems.map((item) => (
              <Link 
                key={item.title} 
                href={item.href} 
                onClick={() => setIsMenuOpen(false)}
                className='text-lg font-medium hover:text-primary transition-colors'
              >
                {item.title}
              </Link>
            ))}
            
            {/* Mobile Book Demo Button */}
            <Button 
              className='w-full rounded-full mt-4'
              onClick={() => setIsMenuOpen(false)}
            >
              Book Demo
            </Button>
          </nav>
        </SheetContent>
      </Sheet>
    </header>
  )
}