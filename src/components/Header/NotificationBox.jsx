import React from 'react'
import BoxHeading from './BoxHeading'
import BottomButton from '../BottomButton'
import Notification from './Notification'

export default function MessageBox() {
    const messagetList = [
        {
            name: "Phú Quang",
            avatar: require('../../assets/img/avatar1.png'),
            content: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe, iure!",
            time: "15 mins ago"
        },
        {
            name: "Phú Quang",
            avatar: require('../../assets/img/avatar2.png'),
            content: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe, iure!",
            time: "15 mins ago"
        },
        {
            name: "Phú Quang",
            avatar: require('../../assets/img/avatar3.png'),
            content: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe, iure!",
            time: "15 mins ago"
        },
        {
            name: "Phú Quang",
            avatar: require('../../assets/img/avatar1.png'),
            content: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe, iure!",
            time: "15 mins ago"
        },
        {
            name: "Phú Quang",
            avatar: require('../../assets/img/avatar2.png'),
            content: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe, iure!",
            time: "15 mins ago"
        },
        {
            name: "Phú Quang",
            avatar: require('../../assets/img/avatar3.png'),
            content: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe, iure!",
            time: "15 mins ago"
        },
    ]

    return (
        <div className="h-[500px] w-[400px] bg-white absolute right-4 top-[70px] transition-all animate-fade-in-down shadow-[0_0_20px_4px_rgba(0,0,0,0.12)] rounded-xl z-10 flex flex-col dark:bg-[#293145]">
            <BoxHeading title="Notifications"/>
                <ul className="max-h-[390px] p-3 pt-0 overflow-y-scroll">
                    {
                        messagetList.map((notification, index) => (
                            <Notification notification={notification} key={index}/>
                        ))
                    }
                </ul>
            <div className=""></div>
            <BottomButton content="View All Notifications"/>
        </div>
    )
}
