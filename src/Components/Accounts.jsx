import React,{useState} from 'react'
import { FaCameraRetro, FaEye, FaEyeSlash, FaLocationArrow, FaLock, FaMapMarker, FaMapMarkerAlt, FaSearchLocation, FaSuitcase, FaUnlockAlt, FaUserLock } from 'react-icons/fa';
import { FaEnvelope } from 'react-icons/fa';
import { FaPen } from 'react-icons/fa';

const Accounts = () => {
    const accountData = {
        userProfile:{
          name: 'Surya',
          Email: '123@gmail.com',
          memberSince: 'Apr 19, 2025, 3:26 PM',
          bio:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae in fuga velit quas aliquam cupiditate',
          position:'heello',
          company:'abc',
          loation:'covai',
        }
    }

    const [editProfile,setEditProfile] = useState(false);
    const [userImage,setUserImage] = useState(null);
    const [showPassword,setShowPassword] = useState(false);

    const handleImageChange = (e) => {
      const file = e.target.files[0];
      if (file){
        setUserImage(URL.createObjectURL(file));
      }
    };
  return (
    <div className='p-6 '>
        <div className='flex flex-col sm:flex-row justify-center sm:justify-start items-center gap-5 pl-6'>
          <div className="flex items-center justify-center">
            <label htmlFor="fileInput" className="cursor-pointer flex items-center justify-center rounded-full w-38 h-38 bg-gray-300 hover:bg-gray-400 dark:bg-gray-900  dark:hover:bg-gray-800">
              {userImage ?(
                <img src={userImage} alt="Selected user image" className="rounded-full object-cover w-full h-full" />
              ) : ( <div className='text-2xl dark:text-gray-400 text-gray-700'><FaCameraRetro/></div>)}
              
              <input
                id="fileInput"
                type="file"
                name="img"
                accept="image/*"
                className="hidden"
                onChange={handleImageChange}
              />
            </label>
          </div>
        

          {/* Username and email div */}
          <div className='flex flex-col items-start justify-center gap-3'>
              <p className='text-3xl font-bold text-gray-800 dark:text-gray-300'>{accountData.userProfile.name}</p>
              <div className=" text-gray-500 dark:text-gray-400 flex items-center gap-2">
                <FaEnvelope/>
                <p className='font-semibold text-sm text-gray-700 dark:text-gray-400'>{accountData.userProfile.Email}</p>
              </div>
              <p className='text-gray-600 text-xs  dark:text-gray-400 '>MemberSince: {accountData.userProfile.memberSince}</p>
              {!editProfile ? <button className='cursor-pointer text-gray-800 dark:text-gray-300  w-30 pl-2 h-10 dark:bg-gray-800 bg-gray-300 rounded-md border flex items-center gap-2 border-gray-400 dark:border-gray-600' onClick={()=> setEditProfile(!editProfile)}><FaPen/> Edit Profile</button>
              :
              <div className='space-x-2'> 
                <button className='cursor-pointer py-1 px-2 bg-gray-300 text-gray-800 dark:text-gray-200 dark:bg-gray-800 border border-gray-400 dark:border-gray-600 rounded' onClick={()=> setEditProfile(!editProfile)}>Cancel</button>
                <button className='cursor-pointer py-1 px-3 border-gray-600 rounded text-gray-100 bg-green-500' onClick={()=> setEditProfile(!editProfile)}>Save</button>
              </div>}
              
          </div>
        </div>
        
        {!editProfile && (
        <div className='border-t border-gray-600 mt-6 p-6  flex flex-col  space-y-6'>
          <p className='text-lg font-semibold text-gray-800 dark:text-gray-300 '>Profile Details</p>
          <div className='text-gray-800 dark:text-gray-300 '>
            <div className='font-semibold'>Bio</div>
            <div className='text-sm text-gray-500 dark:text-gray-400'>{accountData.userProfile.bio}</div>
          </div>
          <div className=' flex flex-col sm:flex-row gap-4 justify-between'>
            <div className=''>
              <p className=' font-semibold mb-2 text-gray-800 dark:text-gray-300'>positon</p>
              <div className='flex items-center gap-1'>
                <p className='text-gray-400'><FaSuitcase/></p>
                <p className='font- text-base italic text-gray-500 dark:text-gray-400'>{accountData.userProfile.position}</p>
              </div>
            </div>

            <div className=''>
              <p className=' font-semibold mb-2 text-gray-800   dark:text-gray-300'>Company</p>
              <div className='flex items-center gap-1'>
                <p className='text-gray-400'><FaSuitcase/></p>
                <p className='font- text-base italic text-gray-00 dark:text-gray-400'>{accountData.userProfile.company}</p>
              </div>
            </div>

            <div className=''>
              <p className=' font-semibold mb-2 text-gray-800  dark:text-gray-300'>Location</p>
              <div className='flex items-center gap-1'>
                <p className='text-gray-400'><FaMapMarkerAlt/></p>
                <p className='font- text-base italic text-gray-00 dark:text-gray-400'>{accountData.userProfile.loation}</p>
              </div>
            </div> 
          </div>
          
        </div>
      )}
        {editProfile && (
        <div className='border-t border-gray-600 mt-6 p-6'>
          <p className='text-lg font-semibold text-gray-800 dark:text-gray-300'>Profile Details</p>
          <div className='mt-3'>
            <p>Bio</p>
            <textarea name="Bio" id="" className='outline-none px-2 py-1 bg-gray-300 dark:bg-gray-800 rounded w-full mt-2 h-20'></textarea>
          </div>

          <div className='flex flex-col sm:flex-row gap-4 justify-between '>
            <div className='w-full'>
              <p className='mt-3'>Position</p>
              <input type="text" className='outline-none px-2 bg-gray-300 dark:bg-gray-800 rounded w-full  mt-2 h-10' />
            </div>

            <div className='w-full'>
              <p className='mt-3'>Company</p>
              <input type="text" className='outline-none px-2 bg-gray-300 dark:bg-gray-800 rounded w-full  mt-2 h-10' />
            </div>

            <div className='w-full'>
              <p className='mt-3'>Position</p>
              <input type="text" className='outline-none px-2 bg-gray-300 dark:bg-gray-800 rounded w-full  mt-2 h-10' />
            </div>
          </div>
        </div>
      )}

        <div className='mt-6 p-6 bg-gray-100 dark:bg-gray-900 rounded-md border-gray-300 dark:border-gray-600 border'>
          <div className='flex items-center gap-2 mb-4'>
            <div className='text-xl font-light text-green-400'><FaUnlockAlt/></div>
            <p className='text-lg font-semibold text-gray-800 dark:text-gray-300'>Change Password</p>
          </div>

          <div className='mt-7 border-t border-gray-600 pt-4 flex flex-col gap-3 lg:flex-row justify-between'>
                <div>
                  <div className='mb-2 text-sm text-gray-600'>Current Password</div>
                  <div className='relative max-w-70'>
                      <input type="text" className='focus:outline-none focus:ring-2 focus:ring-green-600 bg-gray-50 outline-none px-2 dark:bg-gray-600 py-1 w-full rounded border border-gray-500 '/>
                      <button type="button" className="cursor-pointer absolute inset-y-0 right-2 flex items-center dark:text-gray-400 text-gray-600  dark:hover:text-gray-200" onClick={() =>setShowPassword(!showPassword)}>
                        {showPassword ? <FaEyeSlash /> : <FaEye />}
                      </button>
                  </div>
                </div>

                <div>
                  <div className='mb-2 text-sm  text-gray-600'>New Password</div>
                  <div className='relative max-w-70'>
                      <input type="text" className='focus:outline-none focus:ring-2 focus:ring-green-600 outline-none bg-gray-50 px-2 dark:bg-gray-600 py-1 w-full rounded border border-gray-500 '/>
                      <button type="button" className=" cursor-pointer absolute inset-y-0 right-2 flex items-center dark:text-gray-400 text-gray-600  dark:hover:text-gray-200" onClick={()      =>setShowPassword(!showPassword)}>
                        {showPassword ? <FaEyeSlash /> : <FaEye />}
                      </button>
                  </div>
                </div>

                <div>
                  <div className='mb-2 text-sm  text-gray-600'>Confirm Password</div>
                  <div className='relative max-w-70'>
                      <input type="text" className='focus:outline-none focus:ring-2 focus:ring-green-600 outline-none px-2 bg-gray-50  dark:bg-gray-600 py-1 w-full rounded border border-gray-500 '/>
                      <button type="button" className=" cursor-pointer absolute inset-y-0 right-2 flex items-center dark:text-gray-400 text-gray-600  dark:hover:text-gray-200" onClick={()      =>setShowPassword(!showPassword)}>
                        {showPassword ? <FaEyeSlash /> : <FaEye />}
                      </button>
                  </div>
                </div>
          </div>
        </div>
          {/* Password div completed */}

        
    </div>
  )
}

export default Accounts
