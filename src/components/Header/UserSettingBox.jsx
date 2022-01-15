import React from 'react'
import BoxHeading from './BoxHeading'
import BottomButton from '../BottomButton'
import HeaderSettingItem from './HeaderSettingItem'

export default function UserSettingBox() {
    const settingList = [
        {
            title: "My Profile",
            description: "View personal profile details",
            icon: "bx bxs-user-detail"
        },
        {
            title: "Edit Profile",
            description: "Modify your personal details",
            icon: "bx bx-edit-alt"
        },
        {
            title: "Account Settings",
            description: "Manage your account parameters",
            icon: "bx bx-cog"
        },
        {
            title: "Privacy Settings",
            description: "Control your privacy parameters",
            icon: "bx bx-slider"
        }
    ]
    return (
        <div className="w-[400px] bg-white absolute right-4 top-[70px] transition-all animate-fade-in-down shadow-[0_0_20px_4px_rgba(0,0,0,0.12)] rounded-xl z-10 flex flex-col dark:bg-[#293145]">
            <BoxHeading title="Hi Quang"/>   
                <ul className="p-3 pt-0">
                    {
                        settingList.map((setting, index) => (
                            <HeaderSettingItem setting={setting} key={index}/>
                        ))
                    }
                </ul>
            <BottomButton content="Sign Out" icon="bx bx-log-out" path="/login"/>
        </div>
    )
}
