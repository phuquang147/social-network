import React from 'react'
import SectionHeading from '../../SectionHeading'

export default function NewPost() {
    return (
        <div className="shadow-custom rounded-lg dark:bg-[#293145] px-6 pb-4 transition-all mb-4">
            <div className="flex items-center">
                <i className='bx bx-pencil h-8 w-8 my-4 text-[16px] bg-[#f5f5f5] dark:bg-[#1a2236] dark:text-gray-100 flex items-center justify-center text-sky-400 rounded-full' ></i>
                <SectionHeading heading="Create Post"/>
            </div>
            <textarea className="text-sm w-full p-4 outline-none rounded-lg border-2 h-[100px] min-h-[60px] dark:bg-[#1a2236] dark:border-gray-600 dark:text-gray-100" placeholder="What's on your mind?"></textarea>
            <div className="flex justify-between mt-2">
                <div className="flex">
                    <div className="flex items-center px-2 hover:bg-gray-100 rounded-md cursor-pointer dark:hover:bg-[#1a2236]">
                        <i className='bx bx-video mr-2 text-[24px] text-red-400'></i>
                        <h4 className="text-sm font-bold text-gray-500 dark:text-gray-200">Live Video</h4>
                    </div>
                    <div className="flex items-center px-2 hover:bg-gray-100 rounded-md cursor-pointer dark:hover:bg-[#1a2236]">
                        <i className='bx bx-photo-album mr-2 text-[24px] text-green-400' ></i>
                        <h4 className="text-sm font-bold text-gray-500 dark:text-gray-200">Photo/Video</h4>
                    </div>
                    <div className="flex items-center px-2 hover:bg-gray-100 rounded-md cursor-pointer dark:hover:bg-[#1a2236]">
                        <i className='bx bx-camera mr-2 text-[24px] text-orange-400' ></i>
                        <h4 className="text-sm font-bold text-gray-500 dark:text-gray-200">Feeling/Activity</h4>
                    </div>
                </div>
                <button className="bg-sky-400 text-white font-bold px-5 py-2 rounded-lg hover:bg-sky-300">Post</button>
            </div>
        </div>
    )
}
