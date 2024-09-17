'use client'
import Image from 'next/image';





export default function page() {
    return (
     <>
     <h2 className='text-4xl text-primaryRed font-bold text-center'>Our Clients</h2>
       <div className="my-10 grid grid-cols-2 md:grid-cols-4 gap-2">

                <div className="flex flex-col items-center ">
                    <Image
                        src="/images/AirbnbLogo.png"
                        alt="Airbnb Logo"
                        width={200}
                        height={200}
                    />
                </div>
                <div className="flex flex-col items-center">
                    <Image
                        src="/images/AmazonLogo.png"
                        alt="Amazon Logo"
                        width={200}
                        height={200}
                    />
                </div>
                <div className="flex flex-col items-center">
                    <Image
                        src="/images/FedExLogo.png"
                        alt="FedEx Logo"
                        width={200}
                        height={200}
                    />
                </div>
                <div className="flex flex-col items-start md:justify-end">
                    <Image
                        src="/images/GoogleLogo.png"
                        alt="Microsoft Logo"
                        width={200}
                        height={200}
                    />
                </div>
                <div className="flex flex-col items-center">
                    <Image
                        src="/images/OLALogo.png"
                        alt="OLA Logo"
                        width={200}
                        height={200}
                    />                  
                </div>
                <div className="flex flex-col items-center">
                    <Image
                        src="/images/WalmartLogo.png"
                        alt="Walmart Logo"
                        width={200}
                        height={200}
                    />
                </div>
                <div className="flex flex-col items-center">
                    <Image
                        src="/images/MicrosoftLogo.png"
                        alt="Microsoft Logo"
                        width={200}
                        height={200}
                    />   
                </div>
            </div> 
     </>
           
      
    );
}