import React from 'react'
import BoxHeading from './BoxHeading'
import BottomButton from '../BottomButton'
import Message from './Message'

export default function MessageBox() {
    const messageList = [
        {
            name: "Phú Quang",
            avatar: require('../../assets/img/avatar1.png'),
            content: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe, iure!",
            time: "15 mins ago"
        },
        {
            name: "Phú Quang",
            avatar: require('../../assets/img/avatar2.png'),
            content: "Lorem ipsum dolor sit",
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
        <div className="h-[500px] w-[400px] bg-white absolute right-4 top-[70px] transition-all animate-fade-in-down shadow-custom rounded-xl z-10 flex flex-col dark:bg-[#293145]">
            <BoxHeading title="Messages"/>
                <ul className="max-h-[390px] p-3 pt-0 overflow-y-scroll">
                    {
                        messageList.map((message, index) => (
                            <Message message={message} key={index}/>
                        ))
                    }
                </ul>
            <div className=""></div>
            <BottomButton content="View All Messages"/>
        </div>
    )
}
