import React from 'react'

import RightHeaderButton from './RightHeaderButton'
import MessageBox from './MessageBox'
import NotificationBox from './NotificationBox'
import UserSettingBox from './UserSettingBox'
import FriendRequestBox from './FriendRequestBox'
import { useRef } from 'react'

export default function RightHeaderItem({type, onClick, showref}) {
    // eslint-disable-next-line no-lone-blocks
    const darkMode = useRef(localStorage.theme || false)
    const toggleDarkMode = () => {
        if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) 
            document.documentElement.classList.add('dark')
        else
            document.documentElement.classList.remove('dark')
          
        if (!darkMode.current)
        {
            localStorage.theme = 'light'
            darkMode.current = true;
        }
        else
        {
            localStorage.theme = 'dark'
            darkMode.current = false;
        }
    }

    switch (type) {
        case 'friendrequest':
            return (
                <div>
                    <RightHeaderButton onClick={() => onClick(type)} icon="bx bx-user" classExtend={showref.friendrequest && " bg-sky-100 dark:bg-gray-900"}/>
                    {showref.friendrequest && <FriendRequestBox/>}
                </div>
            )
        case 'message':
            return (
                <div>
                    <RightHeaderButton onClick={() => onClick(type)} icon="bx bx-message-square" classExtend={showref.message && " bg-sky-100 dark:bg-gray-900"}/>
                    {showref.message && <MessageBox/>}
                </div>
            )
        case 'notification':
            return (
                <div>
                    <RightHeaderButton onClick={() => onClick(type)} icon="bx bx-notification" classExtend={showref.notification && " bg-sky-100 dark:bg-gray-900"}/>
                    {showref.notification && <NotificationBox />}
                </div>
            )
        case 'darkmode':
            return (
                <RightHeaderButton onClick={() => toggleDarkMode()} icon="bx bx-moon"/>
            )
        case 'usersetting':
            let classExtend = "w-auto pr-4 mr-2"
            if (showref.usersetting) classExtend += " bg-sky-100 dark:bg-gray-900"
            return (
                <div>
                    <RightHeaderButton onClick={() => onClick(type)} image={require('../../assets/img/avatar.jpg')} 
                                        username="Đỗ Phú Quang" 
                                        classExtend={classExtend}/>
                    {showref.usersetting && <UserSettingBox />}
                </div>        
            )
        default:
            return <></>
    }
    
}
