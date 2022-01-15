import React from 'react'
import LeftBody from './Left/LeftBody'
import MainBody from './Main/MainBody'
import RightBody from './Right/RightBody'

export default function Body() {
    return (
        <div className="container relative top-[70px] flex justify-center bg-white dark:bg-[#1a2236] transition-all">
            <div className="w-[25%] h-[calc(100vh-70px)] bg-white dark:bg-[#1a2236] fixed left-0 p-2 transition-all overflow-y-auto">
                <LeftBody/>
            </div>
            <div className="w-[50%] bg-white dark:bg-[#1a2236] p-2">
                <MainBody/>
            </div>
            <div className="w-[25%] bg-white dark:bg-[#1a2236] fixed right-0 p-2">
                <RightBody/>
            </div>
        </div>
    )
}
