import React from 'react'

export default function Friend({friend}) {
    return (
        <li className="flex p-3 hover:bg-gray-100 rounded-md items-center cursor-pointer dark:hover:bg-[#1a2236]">
            <div className="friend__item-avatar mr-3 relative h-[46px] w-[46px] rounded-full">
                <img src={friend.picture.thumbnail} alt="" className="rounded-full"/>
                <div className="absolute h-[14px] w-[14px] bg-green-400 border-2 border-white rounded-full bottom-0 right-0"></div>
            </div>
            <h4 className="text-md text-gray-600 font-medium dark:text-gray-200">{`${friend.name.first} ${friend.name.last}`}</h4>
        </li>
    )
}
