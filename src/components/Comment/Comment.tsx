import React, {useImperativeHandle} from 'react';
import './commentStyle.scss'
import avatar from "../../assets/images/avatar.png";
import {usersAPI} from '../../services/api/usersAPI';
import {useHistory} from 'react-router-dom'

const Comment = ({email, body}: any) => {

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
                <h3>{email}</h3>
            </div>
            <p>{body}</p>
        </div>
    );
};

export default Comment;
