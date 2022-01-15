import React from 'react'
import ReactBox from './ReactBox'
import ShareBox from './ShareBox'
import CommentBox from './CommentBox'
import { useState } from 'react'

export default function PostAction() {
    const [show, setShow] = useState("hidden")
    const toggleComment = () => {
        show==="hidden" ? setShow("flex") : setShow("hidden")
    }

    return (
        <>
            <div className="flex py-2">
                <ReactBox/>
                <CommentBox onClick={toggleComment}/>
                <ShareBox/>
            </div>
            <div className={`border-t-[1px] border-gray-300 py-4 flex dark:border-gray-500 ${show}`}>
                <img src={require("../../../../assets/img/avatar.jpg")} alt="" className="h-10 w-10 rounded-full mr-4"/>
                <input type="text" placeholder="Enter your comment" className="w-full outline-none border-2 rounded-full px-4 py-1 h-10 text-sm leading-8 dark:bg-[#1a2236] dark:border-gray-600 dark:text-gray-200"/>
                <button className="">
                    <i className='bx bx-send text-2xl leading-6 text-sky-400 p-2 bg-sky-100 rounded-full ml-4 dark:bg-[#1a2236]'></i>
                </button>
            </div>
        </>
    )
}
