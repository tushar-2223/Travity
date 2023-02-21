import React from 'react'
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import Header from '../assets/Header'

export const Packages = () => {
    return (
        <div id='packages'>
            <Header title="Our best Packages" />

            <div className='flex justify-center items-center px-2 md:px-0'>
                <div className='bg-white/90 rounded-xl border-2'>
                    <div className='flex flex-wrap py-5 px-5'>

                        <div className='w-full md:w-[400px] md:pr-5'>
                            <div className='relative w-full h-[30rem] rounded-xl mb-5 bg-blue-600/10 overflow-hidden'>


                                <div className='absolute w-full bottom-0 p-7 flex items-end justify-between z-10'>
                                    <div>
                                        <h1 className='text-6xl font-bold text-white'>Delhi</h1>
                                        <h4 className='text-blue-500 font-bold text-2xl'>5 Day</h4>
                                    </div>
                                    <div>
                                        <button className='p-3 bg-blue-300 rounded-full'><ArrowOutwardIcon /></button>
                                    </div>
                                </div>

                                <div className='h-full w-full bg-delhi bg-cover hover:scale-125 transition delay-50 ease-in-out'></div>

                            </div>


                            <div className='relative w-full h-[20rem] rounded-xl mb-5 bg-blue-600/10 overflow-hidden'>

                                <div className='absolute w-full bottom-0 p-7 flex items-end justify-between z-10'>
                                    <div>
                                        <h1 className='text-6xl font-bold text-white'>Assam</h1>
                                        <h4 className='text-blue-500 font-bold text-2xl'>5 Day</h4>
                                    </div>
                                    <div>
                                        <button className='p-3 bg-blue-300 rounded-full'><ArrowOutwardIcon /></button>
                                    </div>
                                </div>

                                <div className='h-full w-full bg-assam bg-cover hover:scale-125 transition delay-50 ease-in-out'></div>

                            </div>
                        </div>


                        <div className='w-full md:w-[400px] md:pr-5'>

                            <div className='relative w-full h-[20rem] rounded-xl mb-5 bg-blue-600/10 overflow-hidden'>


                                <div className='absolute w-full bottom-0 p-7 flex items-end justify-between z-10'>
                                    <div>
                                        <h1 className='text-6xl font-bold text-white'>Himalya</h1>
                                        <h4 className='text-blue-500 font-bold text-2xl'>5 Day</h4>
                                    </div>
                                    <div>
                                        <button className='p-3 bg-blue-300 rounded-full'><ArrowOutwardIcon /></button>
                                    </div>
                                </div>

                                <div className='h-full w-full bg-himalya bg-cover hover:scale-125 transition delay-50 ease-in-out'></div>

                            </div>



                            <div className='relative w-full h-[30rem] rounded-xl mb-5 bg-blue-600/10 overflow-hidden'>


                                <div className='absolute w-full bottom-0 p-7 flex items-end justify-between z-10'>
                                    <div>
                                        <h1 className='text-6xl font-bold text-white'>Goa</h1>
                                        <h4 className='text-blue-500 font-bold text-2xl'>5 Day</h4>
                                    </div>
                                    <div>
                                        <button className='p-3 bg-blue-300 rounded-full'><ArrowOutwardIcon /></button>
                                    </div>
                                </div>

                                <div className='h-full w-full bg-goa bg-cover hover:scale-125 transition delay-50 ease-in-out'></div>

                            </div>

                        </div>

                        <div className='w-full md:w-[400px]'>

                            <div className='relative w-full h-[51rem] rounded-xl mb-5 bg-blue-600/10 overflow-hidden'>
                            
                                
                                 <div className='absolute w-full bottom-0 p-7 flex items-end justify-between z-10'>
                                    <div>
                                        <h1 className='text-6xl font-bold text-white'>Gujarat</h1>
                                        <h4 className='text-blue-500 font-bold text-2xl'>5 Day</h4>
                                    </div>
                                    <div>
                                        <button className='p-3 bg-blue-300 rounded-full'><ArrowOutwardIcon /></button>
                                    </div>
                                </div>

                                <div className='h-full w-full bg-gujarat bg-cover hover:scale-125 transition delay-50 ease-in-out'></div>

                            </div>



                        </div>


                    </div>

                    <div className='flex justify-center p-2'>
                        <h1 className='font-bold text-xl cursor-pointer'>show more <ArrowOutwardIcon /></h1>
                    </div>
                </div>
            </div>
        </div>
    )
}
