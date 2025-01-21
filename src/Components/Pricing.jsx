import React from 'react'
import Button from '../Ui/Button'
import single from '../Assets/Images/single.png'
import double from '../Assets/Images/double.png'
import triple from '../Assets/Images/triple.png'

function Pricing() {
  return (
    <div className='w-full py-[10rem] lg:px-16 px-8 bg-white'>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8'>
            <div className='w-full shadow-xl flex flex-col p-4 my-4 mx-auto rounded-lg hover:scale-105 duration-300'>
                <img className='w-20 mx-auto mt-[-3rem] bg-white' src={single} alt="/" />
                <h2 className='2xl font-bold text-center py-8'>Single User</h2>
                <p className='text-center text-4xl font-bold'>$149</p>
                <div className='text-center font-medium'>
                <p className='py-2 border-b mx-8 mt-8'>500 GB Storage</p>
                <p className='py-2 border-b mx-8'>1 User Allowed</p>
                <p className='py-2 border-b mx-8'>Send up to 2 GB</p>
            </div>
            <Button className='bg-[#00df9a] w-[200px] rounded-md font-medium mx-auto my-6 px-6 py-3 text-black' children={'Start Trial'}/>
            </div>
            <div className='w-full shadow-xl bg-gray-100 flex flex-col p-4 md:my-0 my-8 mx-auto rounded-lg hover:scale-105 duration-300'>
                <img className='w-20 mx-auto mt-[-3rem] bg-white' src={double} alt="/" />
                <h2 className='2xl font-bold text-center py-8'>Partnership</h2>
                <p className='text-center text-4xl font-bold'>$199</p>
                <div className='text-center font-medium'>
                <p className='py-2 border-b mx-8 mt-8'>1 TB Storage</p>
                <p className='py-2 border-b mx-8'>3 Users allowed</p>
                <p className='py-2 border-b mx-8'>Send up to 10 GB</p>
            </div>
            <Button className='text-[#00df9a] w-[200px] rounded-md font-medium mx-auto my-6 px-6 py-3 bg-black' children={'Start Trial'}/>
            </div>
            <div className='w-full shadow-xl flex flex-col p-4 my-4 mx-auto rounded-lg hover:scale-105 duration-300'>
                <img className='w-20 mx-auto mt-[-3rem] bg-white' src={triple} alt="/" />
                <h2 className='2xl font-bold text-center py-8'>Group Account</h2>
                <p className='text-center text-4xl font-bold'>$299</p>
                <div className='text-center font-medium'>
                <p className='py-2 border-b mx-8 mt-8'>5 TB Storage</p>
                <p className='py-2 border-b mx-8'>10 Users Allowed</p>
                <p className='py-2 border-b mx-8'>Send up to 100 GB</p>
            </div>
            <Button className='bg-[#00df9a] w-[200px] rounded-md font-medium mx-auto my-6 px-6 py-3 text-black' children={'Start Trial'}/>
            </div>
        </div>

    </div>
  )
}

export default Pricing