import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import HopeHeader from './components/HopeHeader/index.tsx'
import HopeHero from './components/HopeHero/index.tsx'
import HopeSolution from './components/HopeSolution/index.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <HopeHeader />
    <HopeHero />
    <HopeSolution />
  </React.StrictMode>,
)
