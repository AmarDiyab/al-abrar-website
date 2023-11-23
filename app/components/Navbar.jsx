import { Navbar as Nav, NavbarBrand, NavbarContent, NavbarItem, Link } from '@nextui-org/react'
import Image from 'next/image'
// import Link from 'next/link'
import React from 'react'
// import logo from "../assets/logo.jpeg";

const Navbar = () => {
  return (
    <Nav className='px-[10rem] py-5 text-white z-50 relative items-center ' >
        <NavbarBrand>
            {/* <Image src="/" alt='logo' /> */}
            <span className='text-2xl'><span className='font-bold '>Go</span>Travel</span>
        </NavbarBrand>
        <NavbarContent justify='end' className='space-x-10 text-sm ' >
            <NavbarItem>
                <Link href="/">
                    Demos
                </Link>
            </NavbarItem>
            <NavbarItem>
                <Link href="/">
                    About
                </Link>
            </NavbarItem>
            <NavbarItem>
                <Link href="/">
                    Blog
                </Link>
            </NavbarItem>
            <NavbarItem>
                <Link href="/">
                    Pages
                </Link>
            </NavbarItem>
            <NavbarItem>
                <Link href="/">
                    Contact
                </Link>
            </NavbarItem>
        </NavbarContent>
    </Nav>


    // <div className='px-[10rem] py-5 flex justify-between text-white '>
    //     <div className='flex'>
    //         {/* <Image src={logo} alt='logo' /> */}
    //         <span><span className='font-bold'>Go</span>Travel</span>
    //     </div>
    //     <div className='flex space-x-10  '>
    //         <Link href="/">
    //             Demos
    //         </Link>
    //         <Link href="/">
    //             About
    //         </Link>
    //         <Link href="/">
    //             Blog
    //         </Link>
    //         <Link href="/">
    //             Pages
    //         </Link>
    //         <Link href="/">
    //             Contact
    //         </Link>
    //     </div>
    // </div>
  )
}

export default Navbar