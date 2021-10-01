import React, {useState} from 'react';
import {useDispatch} from "react-redux";
import {getComments} from "../../redux/actionCreators/actionPostsCreators";
import Comments from "../../pages/Comments/Comments";
import './postStyle.scss'

const Post = ({post}: any) => {

    const [openComments, setOpenComments] = useState(true);
    const dispatch = useDispatch();
    const viewComments = () => {
        dispatch(getComments(post.id))
    }
    return (
        <div className={'post-block'}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>

            {!post.comments.length ?
                <div className={'but'}>
                    <button onClick={viewComments}>view comments</button>
                </div>
                : <div className={'but'}>
                    <button
                        onClick={() => setOpenComments(!openComments)}>{openComments ? 'close comments' : 'view comments'}</button>
                </div>
            }
            <Comments post={post} openComments={openComments}/>
        </div>
    );
};
export default Post;