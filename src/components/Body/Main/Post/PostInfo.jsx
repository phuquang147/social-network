import React from 'react'
import ReactIcon from './ReactIcon'

export default function PostInfo({post}) {
    return (
        <div className="flex items-center justify-between border-b-[1px] border-gray-300 py-4 dark:text-gray-200 dark:border-gray-500">
            <div className="flex items-center">
                <div className="flex">
                    {
                        post.react_list.map((react, index) => (
                            <ReactIcon type={react} classExtend="h-6" key={index}/>
                        ))
                    }
                </div>
                <h4 className="ml-2">{post.react_count}</h4>
            </div>
            <div className="flex items-center">
                <h4>{`${post.comment_count} Comments`}</h4>
                <div className="h-1 w-1 bg-black rounded-full mx-3 mt-1 dark:bg-gray-200"></div>
                <h4 className="">{`${post.share_count} Shares`}</h4>
            </div>
        </div>
    )
}
