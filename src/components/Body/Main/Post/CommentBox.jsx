import React from 'react'

export default function CommentBox({onClick}) {
    return (
        <div onClick={onClick} className="group hover:bg-sky-100 px-4 py-1 rounded-md cursor-pointer dark:text-gray-100 dark:hover:bg-[#1a2236]">
            <div className="flex items-center group-hover:text-sky-400">
                <i className='bx bx-comment text-2xl mr-2' ></i>
                Comment
            </div>
        </div>
    )
}
