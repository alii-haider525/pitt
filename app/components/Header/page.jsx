"use client"
import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react'

const nevItems = [
    {
        name: "HOME",
        path: "#HOME",
    },
    {
        name: "ABOUT US",
        path: "#ABOUTUS",
    },
    {
        name: "TOUR PACKAGES",
        path: "#TOURPACKAGES",
    },
    {
        name: "OUR SERVICES",
        path: "#OURSERVICES",
    },
    {
        name: "GALLERY",
        path: "#GALLERY",
    },
    {
        name: "CONTACT",
        path: "#CONTACT",
    },
];

export default function Home() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleMenuToggle = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className="bg-Primary ">
            <Head>
                <title>PITT Travels</title>
                <meta name="description" content="Pakistan International Travels & Tours" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <header className=" w-full">
                <div className="container mx-auto fixed z-50 flex items-center justify-between gap-20 px-6 md:px-32">
                    <div className="flex items-center">
                        <Image
                            src="/images/logo.jpeg"  // Replace with your actual logo image path
                            alt="PITT Travels Logo"
                            width={100}
                            height={100}
                            className="mr-4 md:w-60 w-40 "
                        />
                    </div>
                    {/* mbl view  */}
                    <div className='flex'>
                        <nav className="hidden md:flex space-x-6 ">

                            {nevItems.map((item) => (
                                <li
                                    className="hover:text-primaryRed hover:border-b-2 border-primaryRed duration-200 list-none"
                                    key={item.path}
                                >
                                    <a href={item.path}>{item.name}</a>
                                </li>
                            ))}
                            <a href="#">
                                <div className="hidden md:flex">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                    </svg>
                                </div>
                            </a>
                        </nav>

                        <button className="md:hidden" onClick={handleMenuToggle}>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>


                    </div>

                </div>

                <div className="">
                    {isMenuOpen && (
                        <div className="fixed mih-h-screen w-full list-none gap-5 p-3 bg-secondary text-black top-12 left-0 animate-slide-down">
                            <ul className=" flex flex-col items-center gap-10">
                                {nevItems.map((item) => (
                                    <li
                                        className="hover:text-primaryRed duration-1000"
                                        key={item.path}
                                    >
                                        <a href={item.path}>{item.name}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>
            </header>
        </div>
    )
}