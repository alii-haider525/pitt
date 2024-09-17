import Image from 'next/image';
import { CiTwitter } from "react-icons/ci";
import { CiInstagram } from "react-icons/ci";
import { CiYoutube } from "react-icons/ci";

export default function Home() {
  return (
    <div className="min-h-screen bg-Primary w-full py-16 pt-32 z-0 " id='HOME'>
      <div className="container mx-auto px-4">
        <div className='flex flex-col md:flex-row '>
          <div className='md:w-1/2 w-full'>
            <h1 className="md:text-5xl text-3xl text-center md:text-start font-bold text-gray-800 mb-4">
              It's a Big World
              <br />
              Out There, Go
              <br />
              <span className="text-red-500">Explore</span>
            </h1>
          </div>

          <div className="w-full md:w-1/2 px-7 space-y-3 text-center md:text-start">
            <p className="text-gray-600 ">
              Time Tracking Software Used By Millions. A Simple Time
              Tracker And Spreadsheet App That Lets You Track Work Hours
              Across Projects...
            </p>

            <button className=" bg-primarybtn rounded-full hover:bg-red-700 text-white font-bold py-2 px-4  mt-4">
              Discover Now
            </button>
          </div>
        </div>
        <div className='flex relative pt-4'>
          <div className="flex justify-center">
            <Image
              src="/images/video.png"
              alt="Woman overlooking a beach with a tropical island in the background"
              width={1024}
              height={768}
              className="rounded-lg shadow-lg"
            />
          </div>
          <div className="md:mt-60 absolute md:-right-40 hidden md:flex ">
            <div className="text-primarybtn flex justify-center items-center md:rotate-90  gap-10">
              <p className=" text-lg w-24">Follow Us</p>
              <div className='w-[1px] h-20 bg-primarybtn rotate-90'></div>
              <ul className=" ml-4 flex justify-center items-center ">
                <li className='list-none'> <CiTwitter /> </li>
                <l className='list-none' ><CiInstagram /></l>
                <li className='list-none'><CiYoutube /></li>
              </ul>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
