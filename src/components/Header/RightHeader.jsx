import React from 'react'
import RightHeaderItem from './RightHeaderItem'
import { useState, useRef } from 'react'

export default function RightHeader() {
    const [show, setShow] = useState({
        friendrequest: false,
        message: false,
        notification: false,
        usersetting: false
    })

    const prevType = useRef();
    const ref = useRef(false);

    const handleToggle = (type) => {
        if (prevType.current===type)
            ref.current=!ref.current
        else
            ref.current=true;

        const newShow = {
            friendrequest: false,
            message: false,
            notification: false,
            usersetting: false
        }
        newShow[type]=ref.current
        setShow(newShow);
        prevType.current=type;
    }
    
    return (
        <div className="flex items-center transition-all">
            <RightHeaderItem onClick={handleToggle} showref={show} type="friendrequest"/>
            <RightHeaderItem onClick={handleToggle} showref={show} type="message"/>
            <RightHeaderItem onClick={handleToggle} showref={show} type="notification"/>
            <RightHeaderItem type="darkmode"/>
            <RightHeaderItem onClick={handleToggle} showref={show} type="usersetting"/>
        </div>
    )
}
