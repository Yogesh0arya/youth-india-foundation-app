import Image from 'next/image'
import Head from 'next/head'
// import Header from '../components/Header'
import FrontPage from '../components/FrontPage'
import StateCards from '../components/StateCards'
import OurCases from '../components/OurCases'
import FounderMsg from '../components/FounderMsg'
import Achieve from '../components/Achieve'
import Services from '../components/Services'
import dynamic from "next/dynamic"

const Header = dynamic(()=>import('../components/Header'),{ssr: false})

export default function Home() {
  return (
    <div>
      <Head>
        <title>Botspot AI</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="w-screen overflow-x-hidden">
        <Header />
        <div>
          <FrontPage />
          <StateCards />
          <OurCases />
          <FounderMsg />
          
          <div className=" max-w-6xl text-center md:mx-auto mx-5"> 
            <button className="navBtn text-xl px-4 py-2">Check out for features</button>
          </div>

          <Achieve />
          <Services />
        
        </div>
      </div>

    </div>
  )
}
