import React from 'react';
import './commentsStyle.scss'
import Comment from "../Comment/Comment";
import classNames from "classnames";

const Comments = ({post,openComments}: any) => {
    return (
        <div className={classNames({'comments-block':true,'hide-comments':!openComments})}>
            {post.comments.map((value: any) => {
                return (
                    <Comment key={value.id} email={value.email} body={value.body}/>
                )
            })}
        </div>
    );
};

export default Comments;