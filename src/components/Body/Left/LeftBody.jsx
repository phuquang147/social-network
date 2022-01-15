import React from 'react'
import MorePages from './MorePages'
import NewFeeds from './NewFeeds'

export default function LeftBody() {
    return (
        <div className="w-full transition-all">
            <NewFeeds/>
            <MorePages/>
        </div>
    )
}
