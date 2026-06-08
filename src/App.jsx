import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Banner from './components/Banner'
import CourseCategories from './components/CourseCategories'
const App = () => {
  return (
    <div>
      <Header/>
      <main>
        <Hero/>
        <Banner/>
        <CourseCategories/>
      </main>
      <Footer/>
      
    </div>
  )
}

export default App
