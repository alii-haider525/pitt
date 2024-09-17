"use client"
import Image from 'next/image'
import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation'




export default function Home() {
    const router = useRouter();

    const handlepage = () => {
        router.push("/#TOURPACKAGES")
    }

    const destinations = [
        {
            id: 1,
            name: 'hurowoli-island',
            imageUrl: '/images/blog1.png',
            country: 'Pakistan',
        },
        {
            id: 2,
            name: 'Bali Province',
            imageUrl: '/images/blog2.png',
            country: 'Pakistan',

        },
        {
            id: 3,
            name: 'Barcelona city beach',
            imageUrl: '/images/blog3.png',
            country: 'Pakistan',
        },
        {
            id: 4,
            name: 'St. John\'s',
            imageUrl: '/images/blog1.png',
            country: 'Pakistan',
        },

        {
            id: 5,
            name: 'Machu Picchu',
            imageUrl: '/images/blog3.png',
            country: 'Pakistan',

        },
        {
            id: 6,
            name: 'Hurowoli island',
            imageUrl: '/images/blog2.png',
            country: 'Pakistan',
        },

    ];

    return (
        <div className="container mx-auto px-4 py-8" id='GALLERY'>
            <h2 className="text-4xl font-bold text-center mb-8 text-primaryRed">
                Gallery
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {destinations.map((destination) => (
                    <div
                        key={destination.id}
                        className="bg-white rounded-md shadow-md p-4"
                    >
                        <div
                            className="relative h-48 rounded-md overflow-hidden cursor-pointer ">

                            <Image

                                src={destination.imageUrl}
                                alt={destination.name}
                                layout="fill"
                                objectFit="cover"
                                onClick={handlepage}
                            
                            />
                        </div>
                        <div className="mt-4">
                            <h3 className="text-xl font-bold">{destination.name}</h3>
                            <p className="text-gray-600 text-sm">
                                {destination.country}
                            </p>
                        </div>
                    </div>
                ))}
            </div>

        </div>
    );
}