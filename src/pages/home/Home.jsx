import React from 'react'
import Categories from '../../components/categories/Categories'
import Footer from '../../components/footer/Footer'
import Navbar from '../../components/navbar/Navbar'
import Newsletter from '../../components/newsletter/Newsletter'
import Head from '../../components/head/Head'

const Home = () => {
  return (
    <div>
      <Navbar />
      <Head />
      <Categories />
      <Newsletter />
      <Footer />
    </div>
  )
}

export default Home