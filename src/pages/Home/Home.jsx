import React from 'react'
import Main from './Main';
import Navbar from './../shared-components/Navbar';
import WhyUs from './WhyUs';
import Explore from './Explore';
import Testimonials from './components/Testimonials';

export default function Home() {
  return (
    <>
      <Navbar></Navbar>
      <Main></Main>
      <WhyUs></WhyUs>
      <Explore></Explore>
      <Testimonials></Testimonials>
    </>
  )
}
