import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import HeroSection from './sections/HeroSection'
import BestProductSection from './sections/BestProductsSection'
import MembershipSection from './sections/MembershipSection'
import NewReleaseSection from './sections/NewReleaseSection'
import CategorySection from './sections/CategorySection'
import Footer from './sections/Footer'


function App() {
  const [count, setCount] = useState(0)

  return (
   <>
      <main className='flex flex-col m-0 p-0 '>
      <HeroSection/>
      <BestProductSection/>
      <MembershipSection/>
      <NewReleaseSection/>
      <CategorySection/>
      <CategorySection/>
      <CategorySection/>
      <Footer/>
      </main>
   </>
      
   
  )
}

export default App
