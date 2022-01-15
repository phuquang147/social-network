import React from 'react'

export default function LeftHeader() {
    return (
        <div className="h-[70px] flex items-center transition-all">
            <img src={require('../../assets/img/icon.png')} alt="" className="h-[46px] mx-4"/>
            <div className="header__search h-12 relative">
                <input type="text" 
                        placeholder="Search here ..." 
                        name="" id="" 
                        className="header__search-input h-full w-[350px] bg-gray-100 outline-none border-none rounded-full px-4 py-2 dark:bg-[#1a2236] dark:text-white text-sm"/>
                <div className="header__search-btn h-[40px] w-[40px] bg-white rounded-full flex items-center justify-center absolute top-1 right-1 cursor-pointer dark:bg-[#293145]">
                    <i className='bx bx-search header__search-icon text-[#6fc2ff] text-lg'></i>
                </div>
            </div>
        </div>
    )
}
