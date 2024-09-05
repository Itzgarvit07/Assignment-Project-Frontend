import React from 'react'

function HomeContactUs() {
  return (
    <>
    <div className='bg-[url("Home-img/HomeContactUs-img.avif")] bg-fixed bg-no-repeat bg-cover bg-center'>
    <div className='bg-[#000000bc]'>
        <div className='p-[2rem]'>
<div className='text-center mt-1'>
    <h1 className='text-[40px] font-bold text-[#ffe2e2]'>
    Your Future Starts Here.</h1>

</div>
<div className='flex justify-center'>
    <div className='w-[70px] h-[3px] bg-[#8785a2] mt-6'></div>
    </div>
    <div className='flex justify-center align-middle'>
    <div className='text-white w-[70%] mt-4'>
        <p className='text-center text-[17.5px]'>You don’t need to stress over your assignments even a bit as we are here to catch them for you every step of the way, 24/7. Just because you have so many things going on at once doesn’t mean that you should ignore the obvious signs of distress when it comes to your academics.</p>
    </div>
    </div>
    <div className='flex justify-center align-middle mt-7'>
        <button className='bg-[#ffe2e2] px-[15px] py-[7.5px] rounded-sm text-black font-semibold hover:bg-[#8785a2] hover:text-white duration-500'><a href='/contactus'>CONTACT US</a></button>
    </div>
        </div>
        </div>
    </div>
    </>
  )
}

export default HomeContactUs