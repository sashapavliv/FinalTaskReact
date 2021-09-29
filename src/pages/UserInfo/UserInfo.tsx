import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useHistory} from "react-router";
import {getCurrentUser, setCurrentUser} from "../../redux/actionCreators/actionUsersCreators";
import Loader from "../../components/Loader/Loader";
import avatar from '../../assets/images/avatar.png';
import './userInfoStyle.scss'
import Posts from "../Posts/Posts";
import {getPosts} from "../../redux/actionCreators/actionPostsCreators";

const UserInfo = () => {
    const {currentUser, users, isLoading}: any = useSelector(({users}: any) => users)
    const dispatch = useDispatch()
    const history = useHistory();

    const goToPosts = () => {
        dispatch(getPosts(currentUser.id));
    }

    useEffect(()=>{
        const pathname = history.location.pathname;
        const pathArray = pathname.split('/');
        const userId: number = +pathArray[pathArray.length - 1];
        if (users.length) {
            const user = users.find((element: any) => {
                return element.id === userId;
            })
            dispatch(setCurrentUser(user))
        } else {
            dispatch(getCurrentUser(userId))
        }
    },[history.location.pathname])

    return (
        <div>
            {!isLoading ? <div className={'full-info'}>
                <div className={'avatar'}><img src={avatar} alt=""/></div>
                <p className={'name'}>{currentUser.firstName} {currentUser.lastName}</p>
                <p className={'user-info'}><span className={'info'}>Email: </span>{currentUser.email}
                    <span className={'info'}>WebSite:</span> {currentUser.website}
                    <span className={'info'}>Company:</span> {currentUser.company}</p>
                {!currentUser.isAdd? <button className={'btn'} onClick={goToPosts}>View posts</button>: null}
                <div>
                    <Posts/>
                </div>
            </div> : <Loader/>}
        </div>
    );
};

export default UserInfo;