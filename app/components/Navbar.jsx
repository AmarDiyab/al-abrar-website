"use client"
import { Navbar as Nav, NavbarBrand, NavbarContent, NavbarItem, Link } from '@nextui-org/react'
import React from 'react'
import { Drawer, useMediaQuery } from '@mui/material'
// import Image from 'next/image'
// import logo from "../assets/logo.jpeg";

const Navbar = () => {
    const matches = useMediaQuery("(max-width:639px)");

  return (
    <>
    {!matches ? (

    <Nav className='px-[10rem] py-5 text-white z-50 relative items-center ' >
        <NavbarBrand>
            {/* <Image src="/" alt='logo' /> */}
            <span className='text-2xl'>Al Abrar</span>
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

) : (
   <div>
    <span>Hello</span>
   </div>
)}
    </>
  )
}

export default Navbar