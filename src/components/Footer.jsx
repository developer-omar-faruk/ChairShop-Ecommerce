import React from 'react'

function Footer() {
  return (
    <div className='mt-20 mb-3 md:mt-30 overflow-hidden px-5 md:px-20'>
    <div className=' grid grid-cols-1 md:grid-cols-5 gap-7 mb-5 md:mb-16 md:gap-5 '>
      <div className='g md:col-span-2 pr-10'>
        <h3 className='text-3xl font-semibold mb-5'>ChairHouse</h3>
        <p className='text-black/60'>The advantage of hiring a workspace with us is that givees you comfortable service and all-around facilities.</p>
      </div>
      <div className='flex flex-col text-black/60 gap-2 md:gap-4'>
        <a className='text-amber-600 text-lg' href="">Services</a>
        <a href="">Email Marketing</a>
        <a href="">Campaigns</a>
        <a href="">Branding</a>
      </div>
      <div className='flex flex-col text-black/60 gap-2 md:gap-4'>
        <a className='text-amber-600 text-lg' href="">Furniture</a>
        <a href="">Beds</a>
        <a href="">Chair</a>
        <a href="">All</a>
      </div>
      <div className='flex flex-col text-black/60 gap-2 md:gap-4'>
        <a className='text-amber-600 text-lg' href="">Follow Us</a>
        <a href="">Facebook</a>
        <a href="">Twitter</a>
        <a href="">Instagram</a>
      </div>
    </div>
    <div className='md:flex text-center  justify-between text-black/60'>
      <p className='mb-3 md:mb-0'>Copyright © 2026</p>
      <div className='flex justify-center gap-5'>
        <p>Terms & Conditions</p>
        <p>Privacy Policy</p>
      </div>
    </div>
    </div>
  )
}

export default Footer
