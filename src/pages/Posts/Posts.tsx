import React from 'react';
import {useSelector} from "react-redux";
import Post from "../../components/Post/Post";
import './postsStyle.scss'

const Posts = () => {
    const {posts}: any = useSelector(({posts}: any) => posts);

    return (
        <div className={'posts'}>
            {posts.map((value: any) => {
                return <Post key={value.id} post={value}/>
            })}
        </div>
    );
}

export default Posts;