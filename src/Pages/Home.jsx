import React from 'react'
import Sidebar from '../Components/Sidebar'
import duo from '../assets/General/duotalk.jpg'
import grp from '../assets/General/group.jpg'
import deaftalk from '../assets/General/deafspeak.jpg'
import homebanner from '../assets/General/banner.jpg'
import Navbar from '../Components/Navbar'
 
const Home = () => {

    const homeData = {
        herobanner :homebanner,
        heroimages :[duo,grp,deaftalk],
    }
  return (
    <>
        <Sidebar/>
        <Navbar/>
        <main className='pl-10 md:pl-70 pt-15'>
            <section className="mt-10 mr-10">
                {/* Hero Banner */}
                <div>
                    <img
                    src={homeData.herobanner}
                    alt="hero_banner"
                    className="bg-cover h-64 w-full rounded-2xl"
                    />
                </div>
            </section>

            
        </main>
    </>
  )
}

export default Home
