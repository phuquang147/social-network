import React from 'react'
import SectionHeading from '../../SectionHeading'
import NewFeedItem from './NewFeedItem'

export default function NewFeeds() {
    const newFeedList = [
        {
            title: "Newfeeds",
            icon: "bx bx-tv",
            classExtend: "bg-gradient-to-br from-[#0093e9] to-[#80d0c7]"
        },
        {
            title: "Explore Stories",
            icon: "bx bx-video",
            classExtend: "bg-gradient-to-tr from-[#4158d0] via-[#c850c0] to-[#ffcc70]"
        },
        {
            title: "Popular Groups",
            icon: "bx bx-group",
            classExtend: "bg-gradient-to-tr from-[#fbda61] to-[#ff5acd]"
        },
        {
            title: "Author Profile",
            icon: "bx bx-user",
            classExtend: "bg-gradient-to-br from-[rgba(245,116,185,1)] to-[rgba(89,97,223,1)]"
            // background-image: linear-gradient( 64.5deg,  rgba(245,116,185,1) 14.7%, rgba(89,97,223,1) 88.7% );
        }
    ]

    return (
        <div className="shadow-custom rounded-lg px-3 pb-3 pt-2 dark:bg-[#293145] transition-all">
            <SectionHeading heading="New Feeds"/>
            <ul className="transition-all">
                {
                    newFeedList.map((newFeedItem, index) => (
                        <NewFeedItem newFeedItem={newFeedItem} key={index}/>
                    ))
                }
            </ul>
        </div>
    )
}
