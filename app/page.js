'use client'
import Image from "next/image";
import Hero from "./components/Home/page";
import About from "./components/About/page"
import Gallery from './components/Gallery/page'
import ChooseUs from "./components/ChooseUs/page"
import Video from './components/Video/page'
import ContactUs from './components/contactUs/page'
import Sponser from './components/Sponser/page'
import Footer from './components/Footer/page'
import TOURPACKAGE from './components/TOURPACKAGES/index'
import { useRouter ,  } from 'next/navigation'
export default function Home() {
  const router = useRouter()
  return (
    <>
      <div>
        <div className="md:mx-40">
          <Hero />
          <About />
          <Gallery/>
          <ChooseUs />
          <Video />
          <Image />
          <ContactUs />
          <Sponser />
       <TOURPACKAGE/>
        </div>

        <Footer />
        
      </div>

    </>

  );
}
