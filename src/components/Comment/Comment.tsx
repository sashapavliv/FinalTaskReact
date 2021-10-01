import React from 'react';
import avatar from "../../assets/images/avatar.png";
import {usersAPI} from '../../services/api/usersAPI';
import {useHistory} from 'react-router-dom'
import './commentStyle.scss';

interface IComment {
    email: string,
    body: string
}

const Comment = ({email, body}: IComment) => {

    const history = useHistory();

    const clickHandler = async () => {
        const [user] = await usersAPI.getUserByEmail(email);
        console.log(user)
        if (user) {
            history.push(`/users/${user.id}`)
        }
    }

    return (
        <div className={'comment-container'}>
            <div onClick={clickHandler} className={'avatar-email'}>
                <div className={'avatar-comment'}><img src={avatar} alt=""/></div>
                <p className={'email'}>{email}</p>
            </div>
            <p>{body}</p>
        </div>
    );
};
export default Comment;
