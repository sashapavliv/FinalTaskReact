import React from 'react'
import classNames from "classnames";
import Comment from "../../components/Comment/Comment";
import './commentsStyle.scss';

const Comments = ({post, openComments}: any) => {
    return (
        <div className={classNames({'comments-block': true, 'hide-comments': !openComments})}>
            {post.comments.map((value: any) => {
                return (
                    <Comment key={value.id} email={value.email} body={value.body}/>
                )
            })}
        </div>
    );
};

export default Comments;