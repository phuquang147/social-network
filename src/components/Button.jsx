import React from 'react'

export default function Button({content}) {
    return (
        <button className="h-[60px] w-full bg-sky-400 text-white text-md font-bold rounded-lg">
            {content}
        </button>
    )
}
