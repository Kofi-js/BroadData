import React from 'react'
import Button from '../Ui/Button'


function AnalyticPage() {
  return (
    <div className='w-full bg-white py-16 px-4'>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
        <div className='flex flex-col justify-center'>
            <p className='font-bold text-[#00df9a]'>Data Analytics Dashboard</p>
            <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Manage Data Analytics Centrally</h1>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur dignissimos dolore omnis, distinctio nulla tempora assumenda consectetur eveniet blanditiis, repellendus maiores sed natus inventore ut quo alias amet sint animi?</p>
            <Button className='bg-black text-[#00df9a] md:mx-0' />
        </div>

        </div>
    </div>
  )
}

export default AnalyticPage