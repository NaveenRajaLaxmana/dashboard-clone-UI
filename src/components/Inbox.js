import React from 'react'
import {RiMailFill} from 'react-icons/ri'
import {FiMoreVertical} from 'react-icons/fi'
import ProfileImg from '../images/img.jpg'
import ProfileImg2 from '../images/img2.jpg'
import ProfileImg3 from '../images/img3.jpg'
import ProfileImg4 from '../images/img4.jpg'
import ProfileImg5 from '../images/img5.jpg'

const data = [
    {
        name: "Andrew Bowen",
        department: "Development",
        msg: "The required fields are added in the database",
        img: ProfileImg
    },
    {
        name: "Mae Saunders",
        department: "Development",
        msg: "The application will be completed by tomorrow",
        img: ProfileImg2
    },
    {
        name: "Manuel Yates",
        department: "Design",
        msg: "	The new design is uploaded in zeplin",
        img: ProfileImg3
    },
    {
        name: "Marguerite Phillips",
        department: "Development",
        msg: "Please send me the latest requirements",
        img: ProfileImg4
    },
    {
        name: "Clifford Wilson",
        department: "Testing",
        msg: "The issues are documented in the shared sheet",
        img: ProfileImg5
    }
]

const Inbox = () => {
  return (
    <div className='inbox p-3 bg-white mt-6 h-max w-10/12 flex flex-col space-y-4'>
       <div className='flex flex-row space-x-2'>
         <RiMailFill className='h-7 w-7'/>
            <h6>Inbox(31)</h6>
       </div>
       <hr className='bg-[grey]'/>
        {data.map(dat => <InputData data={dat}/>)}
    </div>
  )
}

const InputData = ({data}) => {
    return (
        <>
        <div className='inbox-data flex flex-row justify-between items-center'>
            <input type={"checkbox"} />
            <img src={data.img} className='w-[40px] h-[40px] rounded-full' alt='img'/>
            <p className='font-semibold text-sm'>{data.name}</p>
            <p className='py-1 px-2 bg-pageBground rounded-xl'>{data.department}</p>
            <p className='text-sm font-normal text-start'>{data.msg}</p>
            <FiMoreVertical />
        </div>
        <hr />
        </>
    )
}

export default Inbox