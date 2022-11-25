import React from 'react'
import {FaRocket} from 'react-icons/fa'
import ProfileImg from '../images/img.jpg'
import ProfileImg2 from '../images/img2.jpg'
import ProfileImg3 from '../images/img3.jpg'
import ProfileImg4 from '../images/img4.jpg'

const data = [
    {
        img:ProfileImg,
        pname:"South Shyanne",
        priority:"Medium",
        color:'bg-processcolor'
    },
    {
        img:ProfileImg2,
        pname:"New Trystan",
        priority:"High",
        color:'bg-failedcolor'
    },
    {
        img:ProfileImg3,
        pname:"East Helga",
        priority:"Low",
        color:'bg-dispatchColor'
    },
    {
        img:ProfileImg4,
        pname:"Omerbury",
        priority:"Medium",
        color:'bg-processcolor'
    }
]

const Projects = () => {
  return (
    <div className='projects w-2/6 h-max p-3 space-y-4 flex flex-col bg-white mt-6 justify-center'>
        <div className='flex flex-row space-x-2'>
         <FaRocket className='h-7 w-7'/>
            <h6 className='font-bold'>Projects</h6>
       </div>

       <div className='flex flex-row space-x-6 items-center self-center'>
            <h6 className='font-bold text-lg text-black'>Assigned to</h6>
            <h6 className='font-bold text-lg text-black'>Project name</h6>
            <h6 className='font-bold text-lg text-black'>Priority</h6>
       </div>
       <hr />

       {data.map(dat => <ProjectItem data={dat}/>)}
    </div>
  )
}

const ProjectItem = ({data}) => {
    return (
        <>
        <div className='flex flex-row space-x-6 items-center self-center'>
            <img src={data.img} alt='img' className='h-[40px] w-[40px] rounded-full'/>
            <h6 className='font-normal'>{data.pname}</h6>
            <div className={`p-2 rounded-2xl ${data.color} text-white self-center`}>{data.priority}</div>
        </div>
        </>
    )
}

export default Projects