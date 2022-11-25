import React from 'react'
import {FaDatabase} from 'react-icons/fa'


const data = [
    {
        customer:"Clifford Wilson",
        itemcode:"PT613",
        orders:"350",
        status : "Dispatched",
        color:"bg-dispatchColor",
    },
    {
        customer:"Mary Payne",
        itemcode:"ST456",
        orders:"520",
        status : "Processing",
        color:"bg-processcolor",
    },
    {
        customer:"Adelaide Blake",
        itemcode:"CS789",
        orders:"830",
        status : "Failed",
        color:"bg-failedcolor",
    },
    {
        customer:"Adeline King",
        itemcode:"LP908",
        orders:"579",
        status : "Delivered",
        color:"bg-delivercolor",
    },
    {
        customer:"Bertie Robbins",
        itemcode:"HF675",
        orders:"790",
        status : "On Hold",
        color:"bg-bluecolor",
    },
]

const SalesData = () => {
  return (
    <div className='salesdata p-3 bg-white h-max w-6/12 flex flex-col space-y-4'>
         <div className='flex flex-row space-x-2'>
         <FaDatabase className='h-7 w-7'/>
            <h6 className='font-bold'>Sales Data</h6>
       </div>
       <div className='flex flex-col space-y-3'>
        <div className='flex flex-row justify-around'>
                <h5 className='font-bold text-lg text-black'>Customer</h5>
                <h5 className='font-bold text-lg text-black'>Item code</h5>
                <h5 className='font-bold text-lg text-black'>Orders</h5>
                <h5 className='font-bold text-lg text-black'>Status</h5>
        </div>
        <hr />
        {data.map(dat => <InputData data={dat}/>)}
       </div>
    </div>
  )
}

const InputData = ({data}) => {
    return (
        <>
        <div className='flex flex-row justify-around'>
            <h4 className='font-semibold text-sm'>
                {data.customer}
            </h4>
            <h4 className='font-normal text-sm'>
                {data.itemcode}
            </h4>
            <h4 className='font-normal text-sm'>
                {data.orders}
            </h4>
            <h4 className={`font-semibold text-sm px-3 py-2 ${data.color} text-white rounded-xl`}>
                {data.status}
            </h4>
        </div>
        <hr />
        </>
    )
}

export default SalesData