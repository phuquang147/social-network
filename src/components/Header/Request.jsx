import React from 'react'

export default function Request({user}) {
    const mutualFriend = Math.ceil(Math.random()*10)

    return (
        <li className="bg-white flex justify-between p-3 hover:bg-gray-100 rounded-lg cursor-pointer dark:bg-[#293145] dark:hover:bg-[#1a2236] transition-all">
            <div className="flex items-center">
                <img src={user.picture.thumbnail} alt="" 
                    className="h-[50px] rounded-full mr-4 "/>
                <div className="flex flex-col items-start">
                    <p className="font-semibold text-[16px] dark:text-gray-100">{`${user.name.first} ${user.name.last}`}</p>
                    <p className="text-[13px] dark:text-gray-400">{`${mutualFriend} in mutual friends`}</p>
                </div>
            </div>
            <div className="flex items-center">
                <button className="bg-sky-400 h-8 w-8 hover:bg-sky-300 rounded-md mr-2 outline-none"><i className='bx bx-plus text-2xl text-white' ></i></button>
                <button className="bg-red-400 h-8 w-8 hover:bg-red-300 rounded-md outline-none"><i className='bx bx-minus text-2xl text-white'></i></button>
            </div>
        </li>                        
    )
}
