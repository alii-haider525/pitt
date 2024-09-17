"use client"
import React from 'react';
import Image from 'next/image';

const page = () => {
    return (
        <div className="container mx-auto py-16" id='CONTACT'>
            <div className='flex justify-center items-center'>
                <div className='w-[26rem]'>
                    <h2 className="text-4xl font-bold mb-8 text-center">
                        Contact us to review <span className='text-primaryRed'>your experience</span> with us
                    </h2>
                    <p className="text-sm text-center mb-12 px-7">
                        Give us feedback and let us know what experience you had while on vacation
                        with us.
                    </p>
                </div>
            </div>
          
        </div>
    );
};

export default page;