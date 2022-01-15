import React from 'react'

export default function PostBody({post}) {
    return (
        <div>
            <p className="text-left text-sm font-normal dark:text-gray-200">{post.content}</p>
            {post.image && <img src={post.image} alt="" className="rounded-lg mt-4"/>}
            {post.video && <video controls src={post.video} alt="" className="rounded-lg mt-4"/>}
        </div>
    )
}
