import React from 'react'
import Navbar from './Navbar'
import Stats from './Stats'
import Inbox from './Inbox'
import SalesAndCalender from './SalesAndCalender'
import ProjectsTodo from './ProjectsTodo'
import Footer from './Footer'

const Main = () => {
  return (
    <div className='flex flex-col w-10/12 items-center'>
        <Navbar />
      <Stats />
      <Inbox />
      <SalesAndCalender />
      <ProjectsTodo />
      <Footer />
    </div>
  )
}

export default Main