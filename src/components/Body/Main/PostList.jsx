import React from 'react'
import Post from './Post/Post'

export default function PostList() {
    const postList = [
        {
            author_name: "Phu Quang",
            avatar: require('../../../assets/img/avatar.jpg'),
            time: "22 min ago",
            content: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore aliquam, totam placeat, veritatis voluptatum neque tenetur ut amet velit, officiis a at praesentium quis explicabo dignissimos quos similique illum provident!",
            image: require('../../../assets/img/photo.jpg'),
            video: "",
            react_list: ['like', 'haha', 'sad'],
            react_count: 14,
            comment_count: 7,
            share_count: 2
        },
        {
            author_name: "Phu Quang",
            avatar: require('../../../assets/img/avatar.jpg'),
            time: "22 min ago",
            content: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore aliquam, totam placeat, veritatis voluptatum neque tenetur ut amet velit, officiis a at praesentium quis explicabo dignissimos quos similique illum provident!",
            image: "",
            video: require('../../../assets/img/video.mp4'),
            react_list: ['like', 'haha', 'sad'],
            react_count: 14,
            comment_count: 7,
            share_count: 2
        }


    ]

    return (
        <ul className="transition-all">
            {
                postList.map((post, index) => (
                    <Post post={post} key={index}/>
                ))
            }
        </ul>
    )
}
