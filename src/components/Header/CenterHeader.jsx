import React from 'react'
import CenterHeaderButton from './CenterHeaderButton'

export default function CenterHeader() {
    return (
        <div className="transition-all">
            <CenterHeaderButton icon="bx bx-home-alt"/>
            <CenterHeaderButton icon="bx bx-book-alt"/>
            <CenterHeaderButton icon="bx bx-video"/>
            <CenterHeaderButton icon="bx bx-group"/>
            <CenterHeaderButton icon="bx bx-shopping-bag"/>
        </div>
    )
}
