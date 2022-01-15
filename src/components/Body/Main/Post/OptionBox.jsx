import React from 'react'
import Option from './Option'
import { useState } from 'react';

export default function OptionBox() {
    const optionList = [
        {
            icon: "bx bx-bookmark",
            title: "Save Post",
            description: "Add this to your saved items"
        },
        {
            icon: "bx bx-x-circle",
            title: "Hide Post",
            description: "Hide This Post"
        },
        {
            icon: "bx bx-bookmark",
            title: "Unfollow",
            description: "Unfollow this author"
        }
    ];

    const [show, setShow] = useState("hidden")
    const toggleOption = () => {
        show==="hidden" ? setShow("block") : setShow("hidden")
    }

    return (
        <div className="z-10">
            <button onClick={toggleOption}>
                <i className='bx bx-dots-horizontal-rounded text-2xl leading-6 bg-gray-200 p-2 rounded-full dark:bg-[#1a2236] dark:text-gray-200'></i>
            </button>
            <ul className={`absolute top-17 right-6 bg-white shadow-custom rounded-lg p-3 dark:bg-[#1a2236] ${show}`}>
                {
                    optionList.map((option, index) => (
                        <Option option={option} key={index}/>
                    ))
                }
            </ul>
        </div>
    )
}
