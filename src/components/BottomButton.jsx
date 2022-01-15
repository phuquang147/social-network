import React from 'react'
import { Link } from "react-router-dom";

export default function BottomButton({content, icon, path="/"}) {
    return (
        <Link to={path}>
            <button className="leading-[50px] h-[50px] p-0 flex content-center items-center justify-center w-full bg-sky-400 text-white text-md rounded-b-xl hover:bg-sky-300 outline-none">
                {content}
                {icon && <i className={`text-lg ml-2 ${icon}`}></i>}
            </button>
        </Link>
    )
}
