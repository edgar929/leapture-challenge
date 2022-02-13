import React from 'react'
import chat from '../assets/footer/chat.svg'

const Footer = () => {
  return (
    <footer className='bg-blue-300 flex content-center justify-center py-2'>
      <div className='flex align-center items-center justify-center flex-col mx-2 cursor-pointer'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          className='h-6 w-6'
          fill='none'
          viewBox='0 0 24 24'
          stroke='currentColor'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={2}
            d='M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z'
          />
        </svg>
        Social
      </div>

      {/* <a routerlink='http://127.0.0.1:8080/#/home' target='_blank'> */}
      <div className='flex align-center items-center justify-center flex-col mx-2 cursor-pointer '>
        <img src={chat} alt='chat' />
        Chat
      </div>
      {/* </a> */}

      <div className='flex align-center items-center justify-center flex-col mx-2 cursor-pointer'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          className='h-5 w-5'
          viewBox='0 0 20 20'
          fill='currentColor'
        >
          <path d='M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z' />
          <path
            fillRule='evenodd'
            d='M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z'
            clipRule='evenodd'
          />
        </svg>
        Banking
      </div>

      <div className='flex align-center items-center justify-center flex-col mx-2 cursor-pointer'>
        {/* <Image
            style={{ width: 20, height: 20, marginRight: 5 }}
            src={shopping}
            alt='Shopping'
          /> */}
        Shopping
      </div>

      <div className='flex align-center items-center justify-center flex-col mx-2 cursor-pointer'>
        {/* <Image
            style={{ width: 20, height: 20, marginRight: 5 }}
            src={user}
            alt='User'
          /> */}
        Profile
      </div>

      <div className='flex align-center items-center justify-center flex-col mx-2 cursor-pointer'>
        {/* <Image
            style={{ width: 20, height: 20, marginRight: 5 }}
            src={support}
            alt='Support'
          /> */}
        Support
      </div>
    </footer>
  )
}

export default Footer
