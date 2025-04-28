import React,{useState} from 'react'
import General from '../Components/General';
import Accounts from '../Components/Accounts';
import Subscription from '../Components/Subscription';

const Settings = () => {
  const [activeTab, setActiveTab] = useState('General');

  const tabs = ['General', 'Account', 'Subscription'];
  

  return (
    <div className='min-h-screen p-3 '>
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
              <General/>
            )}            

        {activeTab === 'Account' && (
          <Accounts/>
        )}
        {activeTab === 'Subscription' && (
          <Subscription/>
        )}
      </div>
    </div>
  
  )
}

export default Settings
