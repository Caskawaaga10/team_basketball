import React from 'react'
import Banner from '../component/Banner/Banner'
import Newscard from '../component/news/Newscard'
import Gallery from '../component/Gallery/Gallery'
import Sponsors from '../component/sponsors/Sponsors'
import JoinUs from '../component/JoinUs/JoinUs'
import Faqs from '../component/Faqs/Faqs'

const Home = () => {
  return (
    <>
    <Banner/>
    <Newscard/>
    <Gallery/>
    <Sponsors/>
    <JoinUs/>
    <Faqs/>
    </>
  )
}

export default Home