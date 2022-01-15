import React from 'react'
import SectionHeading from '../../SectionHeading'
import MorePageItem from './MorePageItem'

export default function MorePages() {
    const pageList = [
        {
            title: "Email Box",
            icon: "bx bxs-inbox"
        },
        {
            title: "Near Hotel",
            icon: "bx bx-hotel"
        },
        {
            title: "Latest Event",
            icon: "bx bx-calendar-event"
        },
        {
            title: "Live Stream",
            icon: "bx bx-video-recording"
        }
    ]

    return (
        <div className="shadow-custom rounded-lg px-3 pb-3 pt-2 dark:bg-[#293145] transition-all mt-4">
            <SectionHeading heading="More Pages"/>
            <ul className="transition-all">
                {
                    pageList.map((page, index) => (
                        <MorePageItem page={page} key={index}/>
                    ))
                }
            </ul>
        </div>
    )
}
