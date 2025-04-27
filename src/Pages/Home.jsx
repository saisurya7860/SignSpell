import React, { useState } from 'react';
import { MdMenu } from "react-icons/md";
import { MdApps } from "react-icons/md";
import Hello from "../assets/General/Hello2.mp4";
import { FaPlay } from 'react-icons/fa';
import { FaClapperboard } from 'react-icons/fa6';
import { MdMoreVert } from 'react-icons/md';

const Home = () => {

    const homeData = {
        recentUploads: [
            {
              filename: 'Hello',
              video : Hello,
              size: '12MB',
              type: 'mp4',
              date: '2025-04-20',
              time: '10:30 AM'
            },
            {
              filename: 'Love',
              video : Hello,
              size: '8MB',
              type: 'mp4',
              date: '2025-04-21',
              time: '12:45 PM'
            },
            {
                filename: 'Sports',
                video : Hello,
                size: '8MB',
                type: 'mp4',
                date: '2025-04-21',
                time: '12:45 PM'
            },
            {
                filename: 'Dining',
                video : Hello,
                size: '8MB',
                type: 'mp4',
                date: '2025-04-21',
                time: '12:45 PM'
            },

          ]
    }

    const [grid,setGrid] = useState(false);
    const [selectedVideo,setSelectedVideo] = useState(null);
    

return (
    <div className='h-screen'>
        <div className='p-3 bg-gray-50 w-full dark:bg-gray-700 text-gray-700 dark:text-gray-200 rounded-lg flex justify-between text-2xl font-semibold'>
            <p>Welcome to SignSpell</p>
            <div className='flex cursor-pointer items-center '>
                <div onClick={() => setGrid(false)} className={`${grid ? 'bg-gray-300 text-gray-500 dark:bg-neutral-500 dark:text-gray-300': 'bg-blue-300 dark:bg-blue-400 dark:text-gray-800'} text-md  rounded-l-2xl py-0.5 px-1.5 border-r border-gray-400 dark:border-gray-200`}><MdMenu/></div>
                <div onClick={() => setGrid(true)} className={`${grid ? 'bg-blue-300 dark:bg-blue-400  dark:text-gray-800': 'bg-gray-300  text-gray-500 dark:bg-neutral-500 dark:text-gray-300'} text-md  rounded-r-2xl py-0.5 px-1.5`}><MdApps/></div>
            </div>
        </div>
        {/* Dashboard Recent uploads */}
        <h2 className='text-gray-700 dark:text-gray-300 text-xl font-semibold p-3'>Recent uploads</h2>
        {grid && (
            <div className='grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5 p-3'>
                {homeData.recentUploads.map((file,index) =>{
                    return(
                    <div key={index} className='bg-gray-50 dark:hover:bg-gray-600 dark:active:bg-gray-600 hover:bg-blue-100 active:bg-blue-100 dark:bg-gray-700 text-gray-700 p-4 dark:text-gray-200 rounded-2xl '>
                        <div className='relative'>
                            <video  src={file.video} className='w-full rounded-lg'></video>
                            <button onClick={() => setSelectedVideo(file.video)} className='text-3xl absolute cursor-pointer hover:text-gray-50 text-gray-400 dark:text-gray-300 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2' title='Play-Video'><FaPlay /></button>
                        </div>
                        
                        <div className='p-2 '>
                            <h3 className='font-semibold text-xl'>{file.filename}</h3>
                            <p className='text-sm font-medium'>Size: <span className='text-xs font-normal dark:text-gray-300 text-gray-500 '>{file.size}</span></p>
                            <p className='text-sm font-medium'>Type: <span className='text-xs font-normal dark:text-gray-300 text-gray-500 '>{file.type}</span></p>
                            <p className='text-sm font-medium'>date: <span className='text-xs font-normal dark:text-gray-300 text-gray-500 '>{file.date}</span></p>
                            <p className='text-sm font-medium'>Time: <span className='text-xs font-normal dark:text-gray-300 text-gray-500 '>{file.time}</span></p>
                        </div>
                    </div>
                    )})}
            </div>  
        )}
        {selectedVideo && (
        <div className="fixed top-0 left-0 w-full h-full bg-black/70 flex items-center justify-center z-50">
            <div className="bg-white dark:bg-gray-700 p-4 rounded-lg max-w-3xl w-full">
                <video src={selectedVideo} controls autoPlay className="w-full rounded" />
                <button onClick={() => setSelectedVideo(null)} className="mt-4 px-4 py-2 cursor-pointer bg-blue-500 text-gray-100 active:bg-gray-500 dark:text-gray-800 hover:bg-gray-500 dark:hover:text-gray-200 rounded" >Close</button>
            </div>
        </div>
        )}

        {!grid && (
            <div className='bg-gray-50 dark:bg-gray-700 p-2 pb-4 rounded-md'>
                <div className='grid sm:grid-cols-3 grid-cols-2 w-full  p-3 items-center font-semibold border-b border-gray-400 dark:border-gray-500'>
                    <div className=' text-gray-700 dark:text-gray-200'>Name</div>
                    <div className=' text-gray-700 dark:text-gray-200 text-center sm:block hidden'>File Size</div>
                    <div className=' text-gray-700 dark:text-gray-200 text-center sm:block hidden'>Date and Time</div>
                    <div className=' text-gray-700 dark:text-gray-200 text-end block sm:hidden'>Details</div>
                </div>
                {/* file heading div */}
                {homeData.recentUploads.map((file,index) =>{
                    return (
                    <div key={index} className='dark:hover:bg-gray-600 dark:active:bg-gray-600 hover:bg-blue-100 active:bg-blue-100 grid sm:grid-cols-3 grid-cols-2 w-full p-3 relative items-center border-b border-gray-400 dark:border-gray-500'>
                        <div className='flex gap-5 items-center text-gray-700 dark:text-gray-200'>
                            <div className='text-red-400'><FaClapperboard/></div>
                            <p className='font-semibold cursor-pointer dark:hover:text-blue-300 hover:text-gray-900' title='Play-Video' onClick={() => setSelectedVideo(file.video)}>{file.filename}.{file.type}</p>
                        </div>
                        <div className=' text-gray-700 dark:text-gray-200 text-sm text-center sm:block hidden'>{file.size}</div>
                        <div className=' text-gray-700 dark:text-gray-200 text-sm text-center sm:block hidden'>{file.date}</div>
                        <div className=' text-gray-700 dark:text-gray-200 absolute right-7 cursor-pointer'><MdMoreVert /></div>
                    </div>
                )})}
            </div> 
        )}
        
    </div>
);
};

export default Home;
