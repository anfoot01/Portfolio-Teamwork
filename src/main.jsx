import React from 'react'
import ReactDOM from 'react-dom/client'

import InfoSidebar from './shared/info_sidebar'
import { NavigationSidebar } from './shared/navigation_sidebar'

import Hero from './sections/hero'
import Service from './sections/services'
import Blog from './sections/blog'
import Contact from './sections/contact'
import Education from './sections/education'
import Portfolio from './sections/portfolio'
import Price from './sections/price'
import Recommendations from './sections/recommendations'
import Work from './sections/work'
import Map from './sections/map'
import Footer from './sections/footer'

import './main.scss'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className="container">
      <div className="info">
        <InfoSidebar/>
      </div>
      <main>
        <Hero />
        <Service />
        <Price />
        <Recommendations />
        <Education />
        <Work />
        <Portfolio />
        <Blog />
        <Contact />
        <Map />
        <Footer />
      </main>
      <nav>
        <NavigationSidebar/>
      </nav>
    </div>
  </React.StrictMode>,
)
