import React from 'react'
import FmdGoodIcon from '@mui/icons-material/FmdGood';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import Instagram from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';


function Header() {
  return (
    <>

<header className="bg-[#FFC7C7] h-12">
  <div className='flex align-middle justify-around '>
<div className='flex gap-4 align-middle justify-center text-white   '>
    <span className='text-[12px] mt-3  duration-500 hover:text-black'><FmdGoodIcon/><a href="" className='text-[12px] cursor-text'>GW Lmt.Gopalpura,Jaipur</a></span>
    <span className='text-[12px] mt-3  duration-500 hover:text-black'><EmailIcon/><a href="" className='text-[12px] cursor-text'>GPWS079@gmail.com</a></span>
    <span className='text-[12px] mt-3  duration-500 hover:text-black'><PhoneIcon/><a href="" className='text-[14px] cursor-text'>1234567890</a></span>
</div>
<div className='text-white flex align-middle gap-4'>
<span className='text-[12px] mt-3 duration-500 hover:text-black'><Instagram/></span>
<span className='text-[12px] mt-3 duration-500 hover:text-black'><FacebookOutlinedIcon/></span>
<span className='text-[12px] mt-3 duration-500 hover:text-black'><TwitterIcon/></span>
</div>
  </div>
  
</header>
<div className='bg-white h-[1px] w-full'></div>
<header className="bg-[#FFC7C7] shadow-md shadow-gray-300 sticky w-full top-0 z-50 left-0">
  <div className=" text-white container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <nav className="flex gap-12 lg:w-2/5 flex-wrap items-center text-base md:ml-auto">
      <a href='/' className=" ml-8 font-medium cursor-pointer duration-500 hover:text-black">Home</a>
      <a href='/about' className="font-medium cursor-pointer duration-500 hover:text-black">AboutUs</a>
      <a href='/blog' className="font-medium cursor-pointer duration-500 hover:text-black">Blog</a>
      <a href='/services' className="font-medium cursor-pointer duration-500 hover:text-black">Services</a>
      <a href='/contactus' className="font-medium cursor-pointer duration-500 hover:text-black">ContactUs</a>
    </nav>
    <a href='/' className="cursor-pointer lg:order-none lg:w-1/5  lg:items-center lg:justify-center mb-4 md:mb-0">
    <img className='ml-7 h-14 w-22 bg-[#FFE2E2] rounded-full' src="./Logo/Grow-logo-removebg-preview.png" alt="" />
    </a>
    <div className="lg:w-2/5 inline-flex lg:justify-end  lg:ml-0">
      <a href="/contactus"><button className="inline-flex mr-7 items-center bg-[#8785A2] border-0 py-1 px-3 focus:outline-none duration-500 hover:text-black hover:bg-[#FFE2E2]  rounded text-base mt-4 md:mt-0">Contact
        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
          <path d="M5 12h14M12 5l7 7-7 7"></path>
        </svg>
      </button></a>
    </div>
  </div>
</header>

</>
  )
}

export default Header