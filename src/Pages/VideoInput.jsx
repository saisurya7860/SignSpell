import React,{useState } from 'react';
import { FaMicrophone, FaMicrophoneSlash ,FaVideoSlash ,FaVideo} from 'react-icons/fa';

const VideoInput = () => {
  const [videoOn,setVideoOn] = useState(false);
  const [micOn,setMicOn] = useState(false);
  return (
    <div className='h-screen p-3'>
        <h2 className='text-2xl font-medium  text-gray-700 dark:text-gray-200'>OnCamera</h2>
        <div className='relative border-dashed border border-gray-300 dark:border-gray-500 dark:bg-gray-700 bg-gray-50 rounded-lg w-full h-1/2 sm:h-3/4 m-1'>
          <div className='text-gray-700 dark:text-gray-300 font-semibold text-2xl absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2'>On Camera</div>
        </div>

      <div className='flex justify-center gap-3 items-center p-2'>
        <button onClick = {() =>setVideoOn(!videoOn)} className={`${videoOn ? 'dark:bg-blue-400 bg-gray-500 text-gray-200 ' : 'dark:bg-gray-300 bg-blue-400'} p-3  dark:text-gray-700 cursor-pointer rounded-full text-2xl`}>
          {videoOn ? <FaVideo/> : <FaVideoSlash/>}
        </button>
        <button onClick = {() =>setMicOn(!micOn)} className={`${micOn ? 'dark:bg-blue-400 bg-gray-500 text-gray-200 ' : 'dark:bg-gray-300 bg-blue-400'} p-3   dark:text-gray-700 cursor-pointer rounded-full text-2xl`}>
          {micOn ? <FaMicrophone/> : <FaMicrophoneSlash/>}
        </button>
      </div>
      
    </div>
  
  )
}

export default VideoInput
