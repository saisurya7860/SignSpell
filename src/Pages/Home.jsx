import React, { useState } from 'react';
import { MdMenu } from "react-icons/md";
import { MdApps } from "react-icons/md";



const Home = () => {

    const homeData = {
        recentUploads: [
            {
              filename: 'video1.mp4',
              size: '12MB',
              type: 'mp4',
              date: '2025-04-20',
              time: '10:30 AM'
            },
            {
              filename: 'video2.mp4',
              size: '8MB',
              type: 'mp4',
              date: '2025-04-21',
              time: '12:45 PM'
            },
            {
                filename: 'video2.mp4',
                size: '8MB',
                type: 'mp4',
                date: '2025-04-21',
                time: '12:45 PM'
            },
            {
                filename: 'video2.mp4',
                size: '8MB',
                type: 'mp4',
                date: '2025-04-21',
                time: '12:45 PM'
            },

          ]
    }

    const [grid,setGrid] = useState(false);

return (
    <div className='h-screen'>
        <div className='p-3 bg-gray-50 w-full dark:bg-gray-700 text-gray-700 dark:text-gray-200 rounded-lg flex justify-between text-2xl font-semibold'>
            <p>Welcome to SignSpell</p>
            <div className='flex cursor-pointer items-center '>
                <div className='text-md bg-gray-300 text-gray-500  dark:bg-neutral-500 dark:text-gray-300 rounded-l-2xl py-0.5 px-1.5 border-r border-gray-400 dark:border-gary-200'><MdMenu/></div>
                <div className='text-md bg-gray-300 text-gray-500 dark:bg-neutral-500 dark:text-gray-300 rounded-r-2xl py-0.5 px-1.5'><MdApps/></div>
            </div>
        </div>
        {/* Dashboard Recent uploads */}
        <h2 className='text-gray-700 dark:text-gray-300 text-xl font-semibold p-3'>Recent uploads</h2>
        <div className='grid grid-cols-3 gap-5 p-3'>
            {homeData.recentUploads.map((file,index) =>{
                return(
                <div key={index} className='bg-gray-50 dark:bg-gray-700 text-gray-700 p-4 dark:text-gray-200 rounded-2xl '>
                    <video src="" controls className='w-full rounded-lg'></video>
                    <div className='p-2'>
                        <h3>{file.filename}</h3>
                        <p>Size: {file.size}</p>
                        <p>Type: {file.type}</p>
                        <p>Date: {file.date}</p>
                        <p>Time: {file.time}</p>
                    </div>
                </div>
                )})}
            
        </div>
        
    </div>
);
};

export default Home;
