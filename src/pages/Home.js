import React from 'react'
import './Home.css'
import FirstSection from './components/FirstSection'
import Header from './components/Header'
import Navbar from './components/Navbar'

const Home = () => {
  return (
    <>
      <Navbar />

      <section id="title">
        {/* <!-- --navbar-- --> */}

        <Header />

        <div className="container-fluid bgFirstSectionImg ">
          {/* <!-- --Tittle-- --> */}
          <FirstSection />
        </div>
      </section >
    </>
  )
}

export default Home