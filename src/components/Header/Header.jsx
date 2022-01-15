import React from 'react'
import CenterHeader from './CenterHeader'
import LeftHeader from './LeftHeader'
import RightHeader from './RightHeader'

export default function Header() {
    return (
        <div className="z-50 w-full h-[70px] fixed top-0 bg-white flex justify-between items-center dark:bg-[#293145] transition-all">
            <LeftHeader/>
            <CenterHeader/>
            <RightHeader/>
        </div>
    )
}
