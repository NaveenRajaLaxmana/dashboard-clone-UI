import React from 'react'
import {FaUserAlt,FaCloudDownloadAlt} from 'react-icons/fa'
import {GiSandsOfTime} from 'react-icons/gi'
import {MdUpdate,MdPendingActions} from 'react-icons/md'
import {FcSalesPerformance} from 'react-icons/fc'

const Stats = () => {
  return (
    <>
    <h2 className='font-bold text-lg mt-6'>Dashboard</h2>
    <div className='p-6 bg-darkBlue flex flex-row rounded-md w-5/6 self-center space-x-8 mt-6'>
        <div className='flex flex-col'>
            <div className='flex flex-row items-center space-x-2'>
                <FaUserAlt className='text-white'/>
                <p className='text-white'>New Users</p>
            </div>

            <h4 className='font-extrabold text-2xl my-2 text-white'>54000</h4>
            <span className='py-2 px-2 border border-green text-green rounded-2xl'>
                2.7% increase
            </span>
        </div>

        <div className='flex flex-col'>
            <div className='flex flex-row items-center space-x-2'>
                <GiSandsOfTime className='text-white'/>
                <p className='text-white'>Avg Time</p>
            </div>

            <h4 className='font-extrabold text-2xl my-2 text-white'>123.50</h4>
            <span className='py-2 px-2 border border-[red] text-[red] rounded-2xl'>
                30% decrease
            </span>
        </div>

        <div className='flex flex-col'>
            <div className='flex flex-row items-center space-x-2'>
                <FaCloudDownloadAlt className='text-white'/>
                <p className='text-white'>Downloads</p>
            </div>

            <h4 className='font-extrabold text-2xl my-2 text-white'>3500</h4>
            <span className='py-2 px-2 border border-green text-green rounded-2xl'>
                12% increase
            </span>
        </div>

        <div className='flex flex-col'>
            <div className='flex flex-row items-center space-x-2'>
                <MdUpdate className='text-white'/>
                <p className='text-white'>Update</p>
            </div>

            <h4 className='font-extrabold text-2xl my-2 text-white'>7500</h4>
            <span className='py-2 px-2 border border-green text-green rounded-2xl'>
                57% increase
            </span>
        </div>

        <div className='flex flex-col'>
            <div className='flex flex-row items-center space-x-2'>
                <FcSalesPerformance className='text-white'/>
                <p className='text-white'>Sales</p>
            </div>

            <h4 className='font-extrabold text-2xl my-2 text-white'>9000</h4>
            <span className='py-2 px-2 border border-green text-green rounded-2xl'>
                10% increase
            </span>
        </div>

        <div className='flex flex-col'>
            <div className='flex flex-row items-center space-x-2'>
            <MdPendingActions className='text-white'/>
                <p className='text-white'>Pending</p>
            </div>

            <h4 className='font-extrabold text-2xl my-2 text-white'>7500</h4>
            <span className='py-2 px-2 border border-[red] text-[red] rounded-2xl'>
                16% decrease
            </span>
        </div>

    </div>
    </>
  )
}

export default Stats