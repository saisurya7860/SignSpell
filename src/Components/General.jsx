import React from 'react'

const General = () => {
  return (
    <div>
        <div className='grid grid-cols-1 p-4 gap-y-3 transition-all'>
        <div className='border-b border-gray-400 dark:border-gray-500'>
            <p className='dark:text-gray-300  text-gray-700 text-lg font-semibold'>Languages</p>
            <div className='flex flex-col sm:flex-row  justify-between sm:items-center pb-1 dark:text-gray-300 text-gray-700 gap-3'>
            <p className='text-sm pb-1'>Select your preferred language</p>
            <select name="" id="" className=' dark:border-gray-600 appearance-none border border-gray-200 py-2 w-40 rounded-md px-1 sm:px-5 dark:bg-gray-800 dark:text-gray-300 text-gray-700'>
                <option value="English">English</option>  
                <option value="Tamil">Tamil</option>  
            </select>  
            </div>
        </div>

        <div className='border-b border-gray-400 dark:border-gray-500'>
            <p className='dark:text-gray-300 text-gray-700 text-lg font-semibold'>TimeZone</p>
            <div className='flex flex-col sm:flex-row justify-between sm:items-center pb-1 dark:text-gray-300 text-gray-700 pt-3 gap-3'>
            <p className='text-sm pb-1'>Affects how dates and times (e.g., batch creation time) are displayed</p>
                <select name="" id="" className='appearance-none border relative border-gray-200 rounded-md px-1 py-2 w-60  pr-10 dark:bg-gray-800 dark:border-gray-600 dark:text-gray-300 text-gray-700'>
                    <option value="Asia/Kolkata">Asia/Kolkata (IST)</option>
                    <option value="America/New_York">America/New_York (EST)</option>
                    <option value="America/Los_Angeles">America/Los_Angeles (PST)</option>
                    <option value="Europe/London">Europe/London (GMT)</option>
                    <option value="Europe/Berlin">Europe/Berlin (CET)</option>
                </select>      
                <style>{`
                    select {
                        background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="5" height="5" viewBox="0 0 24 24"><path d="M7 10l5 5 5-5z" fill="%23FFFFFF"/></svg>');
                        background-repeat: no-repeat;
                        background-position: right 10px center;
                        background-size: 25px;
                    }
                    `}</style>
            </div>
        </div>
        <div className='w-full mt-3 flex justify-end items-center'>
            <button className='bg-green-500 dark:bg-green-400 dark:hover:bg-green-500 text-gray-100 active:bg-gray-500 dark:text-gray-800 hover:bg-green-600 dark:hover:text-gray-200 p-2 rounded cursor-pointer'>Save General Settings</button>
        </div>
        </div>
    </div>
  )
}

export default General
