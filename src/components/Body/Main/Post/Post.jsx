import React from 'react'
import PostBody from './PostBody'
import PostFooter from './PostFooter'
import PostHeader from './PostHeader'


export default function Post({post}) {
    return (
        <li className="shadow-custom rounded-lg dark:bg-[#293145] p-6 pb-0 mb-4 relative">
            <PostHeader post={post}/>
            <PostBody post={post}/> 
            <PostFooter post={post}/>
        </li>
    )
}
