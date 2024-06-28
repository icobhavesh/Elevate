import React from 'react'


import ecom4 from "../assets/Ecom4-removebg.png";
const Hero = () => {
    return (

        <div className='w-full h-auto bg-slate-800 overflow-hidden'>
            <div className='flex justify-between items-center max-w-[1280px] mx-auto  h-screen pt-10  md:gap-4 flex-col md:flex-row '>
                <div className='  md:w-1/2 h-auto '>

                    <h1 className="inline-block bg-gradient-to-r from-emerald-400 to-cyan-400  bg-clip-text text-7xl text-transparent font-serif text-center   font-bolder">Elevate Your Style </h1>
                    <h1 className=" bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 bg-clip-text text-3xl md:text-5xl text-center  text-transparent font-serif   pt-4  font-bold">With WatchMe </h1>
                    <p className=' hidden pt-3 text-center sm:block mx-auto text-gray-400 '>Welcome to WatchMe, where fashion meets individuality. Our mission is simple:<span className='text-center block mx-auto'>to help you express yourself through the art of clothing. </span>.</p>
                </div>
                <div className='md:w-1/2  md:pt-30'>
                    <img src={ecom4} alt='' />
                </div>
            </div>
        </div>

    )
}

export default Hero
