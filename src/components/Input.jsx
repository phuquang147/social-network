import React from 'react'

export default function Input({type, placeholder}) {
    let icon, inputType
    switch(type) {
        case 'name':
            icon = 'bx bx-user'
            inputType = 'text'
            break;
        case 'email':
            icon = 'bx bx-mail-send'
            inputType = 'text'
            break;
        case 'password': 
        case 'newpassword':
        case 'repassword':
            icon = 'bx bx-lock-alt'
            inputType = 'password'
            break;
        default:
            throw new Error('Invalid type')
    }

    return (
        <div className="border-2 border-sky-400 rounded-lg flex items-center w-full h-[60px] mb-4 overflow-hidden">
            <i className={`${icon} text-2xl leading-6 p-4 h-[56px] bg-sky-100 text-sky-400 rounded-tl-md rounded-bl-md`}></i>
            <input type={inputType} placeholder={placeholder} className="outline-none h-full w-full rounded-tr-md rounded-br-md px-4 text-gray-600"/>
        </div>
    )
}
