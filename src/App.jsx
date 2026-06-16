import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Banner from './components/Banner'
import CourseCategories from './components/CourseCategories'
import Course from './components/Course'
import WhyLearning from "./components/WhyLearning"
import Testmonials from "./components/Testmonials"
const App = () => {
  return (
    <div>
      <Header/>
      <main>
        <Hero/>
        <Banner/>
        <CourseCategories/>
        <Course/>
        <WhyLearning />
        <Testmonials/>
      </main>
      <Footer/>
      
    </div>
  )
}

export default App
