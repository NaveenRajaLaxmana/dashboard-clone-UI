import React from 'react'
import ProfileImg from '../images/img.jpg'
import {FaHome,FaChevronRight,FaCompass,FaEdit,FaFonticons,FaSuitcase,FaShoppingCart} from 'react-icons/fa'
import {MdOutlineWidgets,MdError} from 'react-icons/md'
import {BsLayoutSidebar,BsBarChartSteps,BsTable,BsDashLg,BsFillBellFill} from 'react-icons/bs'
import {CgNotes} from 'react-icons/cg'
import {SiGooglemaps} from 'react-icons/si'

const Drawer = () => {
  return (
    <div className='w-2/12 relative flex flex-col bg-white p-6 top-0 left-0 items-center space-y-4'>
         <h1 className='font-extrabold text-2xl'>Title</h1>
         <div className='flex flex-row space-x-3'>
            <img src={ProfileImg} className='h-[30px] w-[30px] rounded-full' alt='img'/>
            <div className='flex flex-col'>
              <h6 className='font-bold text-md'>Welcome Jane</h6>
              <p className='font-light'>Super Admin</p>
            </div>
         </div>

         <div className='flex flex-row w-full justify-around items-center'>
            <FaHome />
            <p className='font-light text-xs'>Dashboard</p>
         </div>

         <div className='flex flex-row w-full justify-around items-center'>
            <MdOutlineWidgets />
            <p className='font-light text-xs'>Widgets</p>
         </div>

         <div className='flex flex-row w-full justify-around items-center'>
            <BsLayoutSidebar />
            <p className='font-light text-xs'>Page Layouts</p>
            <FaChevronRight />
         </div>

         <div className='flex flex-row w-full justify-around items-center'>
            <BsLayoutSidebar />
            <p className='font-light text-xs'>SideBar Layouts</p>
            <FaChevronRight />
         </div>

         <div className='flex flex-row w-full justify-around items-center'>
            <FaCompass />
            <p className='font-light text-xs'>Basic UI Elements</p>
            <FaChevronRight />
         </div>

         <div className='flex flex-row w-full justify-around items-center'>
            <CgNotes />
            <p className='font-light text-xs'>Advanced Elements</p>
            <FaChevronRight />
         </div>

         <div className='flex flex-row w-full justify-around items-center'>
            <CgNotes />
            <p className='font-light text-xs'>Form Elements</p>
            <FaChevronRight />
         </div>

         <div className='flex flex-row w-full justify-around items-center'>
            <FaEdit />
            <p className='font-light text-xs'>Editors</p>
            <FaChevronRight />
         </div>

         <div className='flex flex-row w-full justify-around items-center'>
            <BsBarChartSteps />
            <p className='font-light text-xs'>Charts</p>
            <FaChevronRight />
         </div>

         <div className='flex flex-row w-full justify-around items-center'>
            <BsTable />
            <p className='font-light text-xs'>Tables</p>
            <FaChevronRight />
         </div>

         <div className='flex flex-row w-full justify-around items-center'>
            <BsDashLg />
            <p className='font-light text-xs'>Popups</p>
            <FaChevronRight />
         </div>

         <div className='flex flex-row w-full justify-around items-center'>
            <BsFillBellFill />
            <p className='font-light text-xs'>Nofications</p>
            <FaChevronRight />
         </div>

         <div className='flex flex-row w-full justify-around items-center'>
            <FaFonticons />
            <p className='font-light text-xs'>Icons</p>
            <FaChevronRight />
         </div>

         <div className='flex flex-row w-full justify-around items-center'>
            <SiGooglemaps />
            <p className='font-light text-xs'>Maps</p>
            <FaChevronRight />
         </div>

         <div className='flex flex-row w-full justify-around items-center'>
            <BsTable />
            <p className='font-light text-xs'>User Pages</p>
            <FaChevronRight />
         </div>

         <div className='flex flex-row w-full justify-around items-center'>
            <MdError />
            <p className='font-light text-xs'>Error Pages</p>
            <FaChevronRight />
         </div>

         <div className='flex flex-row w-full justify-around items-center'>
            <BsTable />
            <p className='font-light text-xs'>General Pages</p>
            <FaChevronRight />
         </div>

         <div className='flex flex-row w-full justify-around items-center'>
            <FaSuitcase />
            <p className='font-light text-xs'>Apps</p>
            <FaChevronRight />
         </div>

         <div className='flex flex-row w-full justify-around items-center'>
            <FaShoppingCart />
            <p className='font-light text-xs'>E-commerce</p>
            <FaChevronRight />
         </div>

         <div className='flex flex-row w-full justify-around items-center'>
            <BsTable />
            <p className='font-light text-xs'>Documentation</p>
         </div>
    </div>
  )
}

export default Drawer