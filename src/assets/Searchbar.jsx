import React from 'react'
import Button from '@mui/material/Button';

export const Searchbar = () => {
    return (
        <>
            <div className='bg-white/90 mx-0 md:mx-40 border-2 rounded-xl p-5 flex flex-col'>
                <div className='flex flex-wrap justify-evenly'>
                    <div className='flex flex-col p-2'>
                        <label htmlFor="From" className='my-0 md:my-2 font-bold text-[16px] md:text-[18px] text-blue'>From</label>
                        <input className='p-2 outline-none border-2 rounded-xl w-60' name='From' type="text" />
                    </div>

                    <div className='flex flex-col p-2'>
                        <label htmlFor="Destination" className='my-0 md:my-2 font-bold text-[16px] md:text-[18px] text-blue'>Destination</label>
                        <input className='p-2 outline-none border-2 rounded-xl w-60' name='Destination' type="text" />
                    </div>

                    <div className='flex flex-col p-2'>
                        <label htmlFor="Guest" className='my-0 md:my-2 font-bold text-[16px] md:text-[18px] text-blue'>Guest</label>
                        <select className='p-2 outline-none border-2 rounded-xl w-60' name='Guist' type="number" >
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                        </select>
                    </div>

                    <div className='flex flex-col p-2'>
                        <label htmlFor="From" className='my-0 md:my-2 font-bold text-[16px] md:text-[18px] text-blue'>Start Date</label>
                        <input className='p-2 outline-none border-2 rounded-xl w-60' name='sdate' type="date" />
                    </div>

                    <div className='flex flex-col p-2'>
                        <label htmlFor="From" className='my-0 md:my-2 font-bold text-[16px] md:text-[18px] text-blue'>End Date</label>
                        <input className='p-2 outline-none border-2 rounded-xl w-60' name='edate' type="date" />
                    </div>
                </div>

                <div className='flex justify-center mt-4'>
                    <Button variant="contained" name='search' className='bg-blue-500 font-bold text-xl text-white rounded-full'>Generate Plan</Button>
                </div>

                
                
            
            </div>

        </>
    )
}
