import React from 'react'
import {RiPushpin2Fill} from 'react-icons/ri'

const data = [
  {
    todo:"Pick up kids from school",
    status: false,
  },
  {
    todo:"Prepare for presentation",
    status: false,
  },
  {
    todo:"Print Statements",
    status: false,
  },
  {
    todo:"Create invoice",
    status: false,
  },
  {
    todo:"Call John",
    status: false,
  },
  {
    todo:"Meeting with Alisa",
    status: false,
  } 
]

const Todo = () => {
  return (
    <div className='w-3/6 h-max p-3 space-y-4 flex flex-col bg-white mt-6 justify-center'>
        <div className='flex flex-row space-x-2'>
         <RiPushpin2Fill className='h-7 w-7'/>
            <h6 className='font-bold'>Todo</h6>
       </div>

        <div className='flex flex-row space-x-2 '>
            <input placeholder='what do you need to do today?' type={"text"} className={'border border-darkBlue w-3/4 pl-3'}/>
            <button className='py-3 px-3 bg-darkBlue text-white rounded-md'>Add</button>
        </div>
       {data.map(dat => <TodoItem data={dat}/>)}
       
    </div>
  )
}

const TodoItem = ({data}) => {
  return (
    <>
    <div className='flex flex-row items-center justify-between'>
    <div className='checkbox-input flex flex-row space-x-2'>
      <input type={"checkbox"} checked={data.status} />
      <h6 className='font-normal text-sm'>{data.todo}</h6>
    </div>

    <div className='font-bold text-lg p-1 px-3 cursor-pointer rounded-full bg-failedcolor text-white'>X</div>
  </div>
  <hr />
  </>
  )
}

export default Todo