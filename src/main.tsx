import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import HopeHeader from './components/HopeHeader/index.tsx'
import HopeHero from './components/HopeHero/index.tsx'
import HopeSolution from './components/HopeSolution/index.tsx'
import HopeBreakSection from './components/HopeBreakSection/index.tsx'
import HopeFooter from './components/HopeFooter/index.tsx'


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <HopeHeader />
    <HopeHero />
    <HopeSolution />
    <HopeBreakSection />
    <HopeFooter />
  </React.StrictMode>,
)
