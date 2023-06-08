import React from 'react'
import './Home.css'
import FirstSection from './components/FirstSection'
import Header from './components/Header'
import Navbar from './components/Navbar'
import SecondSection from './components/SecondSection'

const Home = () => {
  return (
    <>
      <Navbar />

      <section>
        {/* <!-- --navbar-- --> */}

        <Header />

        <div className="container-fluid bgFirstSectionImg ">
          {/* <!-- --Tittle-- --> */}
          <FirstSection />
        </div>
      </section >
      <section>
        <div className="container-fluid bgFirstSectionImg ">
          {/* <!-- --Tittle-- --> */}
          <SecondSection />
        </div>
      </section >
    </>
  )
}

export default Home