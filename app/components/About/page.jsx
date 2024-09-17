"use client"
import Image from 'next/image';
import { useState } from 'react';

export default function page() {
    return (
        <div className="bg-secondary min-h-screen pt-20 " id='ABOUTUS'>
            <div className="container mx-auto px-4 ">
                <div className="flex flex-col md:flex-row items-center justify-between">
                    <div className="md:w-1/2  flex items-center justify-center w-full">
                        <Image
                          src="/images/img1.png"
                            alt="Mountain beach sunset"
                            width={400}
                            height={200}
                            className="rounded-lg"
                        />
                    </div>
                    <div className="md:w-1/2 w-full text-center md:text-start">
                        <h5 className='text-primaryRed pt-4'>About us</h5>
                        <h1 className="text-5xl font-bold text-gray-800 mb-4">
                            The Best And Most trusted  <span className="text-primaryRed">service</span>
                        </h1>
                        <p className="text-gray-600 mb-6 px-2">
                            We are the largest holiday service provider in the world with
                            partners and places spread all over the world to prioritizing service
                            and customer satisfaction.
                        </p>
                        <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                            Learn More
                        </button>
                        <div className="flex flex-wrap md:flex-nowrap flex-row items-center justify-center mt-12">
                            <div className=" p-2 rounded-lg shadow-md mx-2 md:mx-4">
                                <h3 className="text-4xl font-bold text-primaryRed mb-2">
                                    200+
                                </h3>
                                <p className="text-gray-600 text-sm">Customers & Partners</p>
                            </div>
                            <div className="p-2 rounded-lg shadow-md mx-2 md:mx-4">
                                <h3 className="text-4xl font-bold text-primaryRed  mb-2">
                                    500+
                                </h3>
                                <p className="text-gray-600">Places in The World</p>
                            </div>
                            <div className=" p-2 rounded-lg shadow-md mx-2 md:mx-4">
                                <h3 className="text-4xl font-bold text-primaryRed  mb-2">
                                    1k+
                                </h3>
                                <p className="text-gray-600">Success Journey</p>
                            </div>
                        </div>
                    </div>

                </div>


            </div>
        </div>
    );
}