import React,{useState} from 'react'

const Settings = () => {
  const [activeTab, setActiveTab] = useState('General');

  const tabs = ['General', 'Account', 'Subscription'];
  const settingsData = {
    generalData : [
      {
      settingTitle : 'Languages',
      titleDescription : 'Select the display language for the interface',
      },
      {
        settingTitle : 'TimeZone',
        titleDescription : 'Select the display language for the interface',
      },
      {
        settingTitle : '',
        titleDescription : 'Select the display language for the interface',
      },
      
    ]
    
  }

  return (
    <div className='h-screen p-3 '>
      <div className='dark:bg-gray-700 bg-gray-50 rounded-md p-2'>
        <p className='dark:text-gray-300 text-gray-700  text-2xl font-semibold'>Settings</p>
        <div className=''>
          <nav className='flex gap-3 items-center dark:text-gray-400 border-b font-normal text-md border-gray-300 dark:border-gray-500'>
            {tabs.map((tab) => (
              <p
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`py-2 px-1 border-b-2 cursor-pointer
                  ${activeTab === tab ? 'border-blue-500 text-blue-500 font-semibold' : 'border-transparent'}`}
              >
                {tab}
              </p>
            ))}
          </nav>
        </div>
      </div>

              {/* Start of nav links */}
      <div className=" dark:bg-gray-700 bg-gray-50 rounded-md p-2 mt-5">
            {activeTab === 'General' && (
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
                        <style jsx>{`
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
                  <button className='bg-blue-500 dark:bg-blue-400 dark:hover:bg-blue-500 text-gray-100 active:bg-gray-500 dark:text-gray-800 hover:bg-blue-600 dark:hover:text-gray-200 p-2 rounded cursor-pointer'>Save General Settings</button>
                </div>
              </div>
            )}            

        {activeTab === 'Account' && <div>This is Account content.</div>}
        {activeTab === 'Subscription' && <div>This is Subscription content.</div>}
      </div>
    </div>
  
  )
}

export default Settings
