import React, {useState} from 'react'
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'

function Navbar() {

    const [isOpen, setIsOpen] = useState(false)

    const handleMenu = () => {
        setIsOpen(!isOpen)
    }
  return (
    <div className="flex justify-between items-center text-white h-24 max-w-[1240px] px-4 mx-auto">
        <h1 className="w-full text-3xl font-bold text-[#00df9a]">BroadData</h1>
        <ul className="hidden md:flex">
            <li className='p-4'>Home</li>
            <li className='p-4'>Company</li>
            <li className='p-4'>Resources</li>
            <li className='p-4'>About</li>
            <li className='p-4'>Contact</li>
        </ul>

        <div onClick={handleMenu} className="block md:hidden">
            {!isOpen ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20}/>}
        </div>

        <div className= {!isOpen ? 'fixed top-[10px] left-0 h-full w-[60%] border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500' : 'fixed left-[-100%]'}>
        <h1 className="w-full text-3xl px-4 mt-6 font-bold text-[#00df9a]">BroadData</h1>
            <ul className='pt-4 uppercase'>
            <li className='p-4 border-b border-gray-600'>Home</li>
            <li className='p-4 border-b border-gray-600'>Company</li>
            <li className='p-4 border-b border-gray-600'>Resources</li>
            <li className='p-4 border-b border-gray-600'>About</li>
            <li className='p-4 border-b border-gray-600'>Contact</li> 
            </ul>
        </div>
    </div>
  )
}

export default Navbar