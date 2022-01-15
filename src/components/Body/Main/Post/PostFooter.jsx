import React from 'react'
import PostAction from './PostAction'
import PostInfo from './PostInfo'

export default function PostFooter({post}) {
    return (
        <div className="relative">
            <PostInfo post={post}/>
            <PostAction/>
        </div>
    )
}
