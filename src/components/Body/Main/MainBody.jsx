import React from 'react'
import ButtonLoadMorePost from './ButtonLoadMorePost'
import NewPost from './NewPost'
import PostList from './PostList'

export default function MainBody() {
    return (
        <div className="pb-1">
            <NewPost/>
            <PostList/>
            <ButtonLoadMorePost/>
        </div>
    )
}
