import React from 'react'
import './Home.css'
import FirstSection from './components/FirstSection'
import Header from './components/Header'
import Navbar from './components/Navbar'
import SecondSection from './components/SecondSection'
import ThirdSection from './components/ThirdSection'
import FifthSection from './components/FifthSection'
import FourthSections from './components/FourthSections'
import SixthSection from './components/SixthSection'
import Footer from './components/Footer'

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
        <div className="container-fluid ">
          {/* <!-- --Tittle-- --> */}
          <SecondSection />
        </div>
      </section >
      <section>
        <div className="container-fluid bgFirstSectionImg ">
          {/* <!-- --Tittle-- --> */}
          <ThirdSection />
        </div>
      </section >
      <section>
        <div className="container-fluid">
          {/* <!-- --Tittle-- --> */}
          <FourthSections />
        </div>
      </section >
      <section>
        <div className="container-fluid bgFifthSectionImg">
          {/* <!-- --Tittle-- --> */}
          <FifthSection />
        </div>
      </section >
      <section>
        <div className="container-fluid">
          {/* <!-- --Tittle-- --> */}
          <SixthSection />
        </div>
      </section >
      <section>
        <div className="container-fluid">
          {/* <!-- --Tittle-- --> */}
          <Footer />
        </div>
      </section >
    </>
  )
}

export default Home