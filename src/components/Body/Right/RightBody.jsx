import React from 'react'
import SectionHeading from '../../SectionHeading'
import Friend from './Friend'
import BottomButton from '../../BottomButton'
import {useState ,useEffect} from 'react'

export default function RightBody() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        async function getUsers() {
            const users = await fetch("https://randomuser.me/api/?results=10");
            return users.json();
        }
          
        getUsers().then((data) => setUsers(data.results));
    }, [])

    return (
        <div className="shadow-custom rounded-lg pt-2 dark:bg-[#293145] transition-all">
            <div className="ml-3"><SectionHeading heading="Online Friend" /></div>
            <ul className="overflow-y-auto max-h-[calc(100vh-190px)] h-screen px-3 pb-3">
                {
                    users.map((user, index) => (
                        <Friend key={index} friend={user}/>
                    ))
                }
            </ul>
            <BottomButton content="All Friends"/>
        </div>
    )
}
