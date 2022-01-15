import React from 'react'

export default function RightHeaderButton({classExtend, icon, image, username, onClick}) {
    return (
        <button onClick={onClick} className={`rounded-full outline-none h-[46px] w-[46px] bg-white p-0 mx-1 hover:bg-sky-100 group transition-all dark:bg-[#293145] dark:hover:bg-[#1a2236] ${classExtend}`}>
            {icon && <i className={`${icon} m-0 p-0 text-2xl text-sky-400 transition-all`}></i>}
            {username && 
                <div className="flex items-center">
                    <img src={image} alt="" className="h-[38px] w-[38px] rounded-full ml-[4px]"/>
                    {username && <h3 className="font-semibold ml-2 text-gray-700 dark:text-white">{username}</h3>}
                </div> 
            }
        </button>
    )
}
