import React from 'react'
import {FaBars,FaAngleDown,FaBell} from 'react-icons/fa'
import {FiSearch,FiMoreHorizontal} from 'react-icons/fi'
import {RiMailFill} from 'react-icons/ri'
import ProfileImg from '../images/img.jpg'

const Navbar = () => {
  return (
    <div className='navbar h-[70px] w-full px-3 flex flex-row items-center justify-between bg-white'>
        <div className='bar-search w-2/4 flex flex-row items-center space-x-8'>
            <FaBars color='text-darkBlue' className='h-6 w-6'/>
            <div className='search-bar flex flex-row items-center justify-between'>
                <FiSearch color='text-darkBlue' className='h-4 w-4 mr-2'/>
                <input type={'text'} placeholder={"Search"} className='w-full h-full outline-none border-none'/>
            </div>
        </div>

        <div className='navbar-btn-notifications flex flex-row justify-between items-center w-2/4'>
            <button className='py-2 px-3 bg-darkBlue text-white rounded-md'>+ Create new</button>
            <button className='py-2 px-3 bg-white text-darkBlue rounded-md border-darkBlue border flex flex-row items-center'><span>English</span><FaAngleDown /> </button>
            <div className='flex flex-row relative'>
                <FaBell className='text-darkBlue h-5 w-5' />
                <span className='absolute top-[-10px] right-[-5px] px-[1px] bg-[orange] text-white rounded-full text-sm'>16</span>
            </div>
            <div className='flex flex-row relative'>
            <RiMailFill className='text-darkBlue h-5 w-5'/>
            <span className='absolute top-[-10px] right-[-5px] px-[1px] bg-[orange] text-white rounded-full text-sm'>25</span>
            </div>
            <div className='flex flex-row items-center'>
            <img src={ProfileImg} className='h-[40px] w-[40px] rounded-full' alt='profile img'/>
            <FaAngleDown />
            </div>
            <FiMoreHorizontal className='border border-darkBlue rounded-full h-7 w-7 cursor-pointer' />
        </div>
    </div>
  )
}

export default Navbar