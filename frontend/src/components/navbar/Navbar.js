import React from 'react'

const Navbar = () => {
  return (
    <>

    <nav className="flex-between fixed z-50 w-full bg-white-1 px-6 py-4 lg:px-10 mx-5">
        <a href="/" className='flex items-center gap-1'>
            <img
                src='/images/logo2.png'
                width={150}
                height={150}
                alt="logo"
                className="max-sm:size-10"
            />

        </a>
    </nav>
    
    </>
  )
}

export default Navbar
