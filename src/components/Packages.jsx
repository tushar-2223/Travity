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
                            <div className='bg-delhi bg-cover w-full h-[30rem] rounded-xl mb-5 p-2 bg-blue-600/10 overflow-hidden hover:border-4 hover:border-gray-900'>
                                <div className='h-full w-full p-7 flex items-end justify-between'>
                                    <div>
                                        <h1 className='text-6xl font-bold text-white'>Delhi</h1>
                                        <h4 className='text-blue-500 font-bold text-2xl'>5 Day</h4>
                                    </div>
                                    <div>
                                        <button className='p-3 bg-blue-300 rounded-full'><ArrowOutwardIcon /></button>
                                    </div>
                                </div>
                            </div>

                            <div className='bg-assam bg-cover w-full h-[20rem] rounded-xl mb-5 p-2 bg-blue-600/10 overflow-hidden hover:border-4 hover:border-gray-900'>
                                <div className='h-full w-full p-7 flex items-end justify-between'>
                                    <div>
                                        <h1 className='text-6xl font-bold text-white'>Assam</h1>
                                        <h4 className='text-blue-500 font-bold text-2xl'>5 Day</h4>
                                    </div>
                                    <div>
                                        <button className='p-3 bg-blue-300 rounded-full'><ArrowOutwardIcon /></button>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div className='w-full md:w-[400px] md:pr-5'>

                            <div className='bg-himalya bg-cover w-full h-[20rem] rounded-xl mb-5 p-2 bg-blue-600/10 overflow-hidden hover:border-4 hover:border-gray-900'>
                                <div className='h-full w-full p-7 flex items-end justify-between'>
                                    <div>
                                        <h1 className='text-6xl font-bold text-white'>Himalya</h1>
                                        <h4 className='text-blue-500 font-bold text-2xl'>5 Day</h4>
                                    </div>
                                    <div>
                                        <button className='p-3 bg-blue-300 rounded-full'><ArrowOutwardIcon /></button>
                                    </div>
                                </div>
                            </div>


                            <div className='bg-goa bg-cover w-full h-[30rem] rounded-xl mb-5 p-2 bg-blue-600/10 overflow-hidden hover:border-4 hover:border-gray-900'>
                                <div className='h-full w-full p-7 flex items-end justify-between'>
                                    <div>
                                        <h1 className='text-6xl font-bold text-white'>Goa</h1>
                                        <h4 className='text-blue-500 font-bold text-2xl'>5 Day</h4>
                                    </div>
                                    <div>
                                        <button className='p-3 bg-blue-300 rounded-full'><ArrowOutwardIcon /></button>
                                    </div>
                                </div>
                            </div>

                        </div>

                        <div className='w-full md:w-[400px]'>

                            <div className='bg-gujarat bg-cover w-full h-[51rem] rounded-xl mb-5 p-2 bg-blue-600/10 overflow-hidden hover:border-4 hover:border-gray-900'>
                                <div className='h-full w-full p-7 flex items-end justify-between'>
                                    <div>
                                        <h1 className='text-6xl font-bold text-white'>Gujarat</h1>
                                        <h4 className='text-blue-500 font-bold text-2xl'>10 Day</h4>
                                    </div>
                                    <div>
                                        <button className='p-3 bg-blue-300 rounded-full'><ArrowOutwardIcon /></button>
                                    </div>
                                </div>
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
