import React from 'react'
import OptionBox from './OptionBox'

export default function PostHeader({post}) {
    return (
        <div className="mb-4 flex justify-between">
            <div className="flex">
                <img src={post.avatar} alt="" className="h-[46px] w-[46px] rounded-full cover mr-4"/>
                <div className="flex flex-col items-start">
                    <h4 className="font-semibold text-[16px] dark:text-gray-100">{post.author_name}</h4>
                    <p className="font-semibold text-xs text-gray-500 dark:text-gray-400">{post.time}</p>
                </div>
            </div>
            <OptionBox/>
        </div>
    )
}
