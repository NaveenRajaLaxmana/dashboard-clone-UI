import React, { useState } from 'react'
import SalesData from './SalesData'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';

const SalesAndCalender = () => {
    const [date,setDate] = useState(new Date())
  return (
    <div className='w-full h-max flex flex-row space-x-3 mt-6 justify-center'>
        <SalesData />
        <Calendar onChange={setDate} value={date}/>
    </div>
  )
}

export default SalesAndCalender