import React from 'react'
import {FaFacebookF,FaTwitter,FaGooglePlusG,FaLinkedinIn} from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='py-4 px-2 bg-white flex flex-row mt-6 justify-around w-5/6'>
        <div className='fb flex flex-row space-x-3'>
            <div className='h-[40px] w-[40px] rounded-full bg-fb flex flex-row justify-center items-center'>
                <FaFacebookF className='text-white'/>
            </div>

            <div className='flex flex-col'>
                <h6 className='font-semibold text-base'>Facebook</h6>
                <p className='font-normal text-sm'>813 friends</p>
            </div>
        </div>

        <div className='fb flex flex-row space-x-3'>
            <div className='h-[40px] w-[40px] rounded-full bg-twt flex flex-row justify-center items-center'>
                <FaTwitter className='text-white'/>
            </div>

            <div className='flex flex-col'>
                <h6 className='font-semibold text-base'>Twitter</h6>
                <p className='font-normal text-sm'>9000 followers</p>
            </div>
        </div>

        <div className='fb flex flex-row space-x-3'>
            <div className='h-[40px] w-[40px] rounded-full bg-gp flex flex-row justify-center items-center'>
                <FaGooglePlusG className='text-white'/>
            </div>

            <div className='flex flex-col'>
                <h6 className='font-semibold text-base'>Google plus</h6>
                <p className='font-normal text-sm'>780 friends</p>
            </div>
        </div>

        <div className='fb flex flex-row space-x-3'>
            <div className='h-[40px] w-[40px] rounded-full bg-twt flex flex-row justify-center items-center'>
                <FaLinkedinIn className='text-white'/>
            </div>

            <div className='flex flex-col'>
                <h6 className='font-semibold text-base'>Linkedin</h6>
                <p className='font-normal text-sm'>1090 connections</p>
            </div>
        </div>
    </div>
  )
}

export default Footer