import React from 'react'
import BoxHeading from './BoxHeading'
import BottomButton from '../BottomButton'
import Request from './Request'
import {useState ,useEffect} from 'react'

export default function MessageBox() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        async function getUsers() {
            const users = await fetch("https://randomuser.me/api/?results=6");
            return users.json();
        } 
        getUsers().then((data) => setUsers(data.results));
    }, [])

    return (
        <div className="h-[500px] w-[400px] bg-white absolute right-4 top-[70px] transition-all animate-fade-in-down shadow-[0_0_20px_4px_rgba(0,0,0,0.12)] rounded-xl z-10 flex flex-col dark:bg-[#293145]">
            <BoxHeading title="Friend Request"/>
                <ul className="max-h-[390px] p-3 pt-0 overflow-y-scroll">
                    {
                        users.map((user, index) => (
                            <Request user={user} key={index}/>
                        ))
                    }
                </ul>        
            <BottomButton content="View All Friend Request"/>
        </div>
    )
}
