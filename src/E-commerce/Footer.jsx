import React from 'react'

const Footer = () => {
    return (
        <div className="w-full h-auto bg-slate-900 border-t-[1px] mb-20 md:mb-0 border-white ">
            <div className="grid md:grid-cols-4 grid-cols-3 p-4 max-w-[1280px] mx-auto h-auto text-center">
                <div className="text-white ">
                    <h1 className="text-gray-500  font-serif font-extrabold">About </h1>
                    <p className='p-1 capitalize'>contact us</p>
                    <p className='p-1 capitalize'>Career</p>
                    <p className='p-1 capitalize'>WatchMe</p>
                    <p className='p-1 capitalize'>information</p>
                </div>

                <div className="text-white">
                    <h1 className=" text-gray-500   font-serif">Social</h1>
                    <p className='p-1 capitalize'>Facebook</p>
                    <p className='p-1 capitalize'>Twitter</p>
                    <p className='p-1 capitalize'>Youtube</p>
                    <p className='p-1 capitalize'>instagram</p>
                </div>


                <div className="text-white">
                    <h1 className="text-gray-500   font-serif font-extrabold">Help</h1>
                    <p className='p-1 capitalize'>shipping</p>
                    <p className='p-1 capitalize'>cancelation &return </p>
                    <p className='p-1 capitalize'>FAQ</p>

                </div>
                <div className="text-white">
                    <h1 className="text-gray-500   font-serif font-extrabold">Consume policyl</h1>
                    <p className='p-1 capitalize'>terma of use</p>
                    <p className='p-1 capitalize'>Security</p>
                    <p className='p-1 capitalize'>Privercy</p>
                    <p className='p-1 capitalize'>Sitemap</p>
                </div>

            </div>
        </div>






    )
}

export default Footer