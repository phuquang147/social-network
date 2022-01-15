import React from 'react'

export default function ButtonLoadMorePost() {
    return (
        <button className="w-full shadow-custom rounded-lg h-[70px] flex items-center justify-center group hover:bg-sky-400 transition-all dark:bg-[#293145] dark:hover:bg-sky-400">
            <div className="inline-flex animate-loading">
                <div className="w-6 h-6 border-2 border-sky-400 rounded-full mx-[5px] my-0 group-hover:border-white"></div>
                <div className="w-6 h-6 border-2 border-sky-400 rounded-full mx-[5px] my-0 group-hover:border-white"></div>
            </div>
        </button>
    )
}