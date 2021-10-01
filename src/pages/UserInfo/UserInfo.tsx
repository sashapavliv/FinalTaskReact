import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useHistory} from "react-router";
import {getCurrentUser, setCurrentUser} from "../../redux/actionCreators/actionUsersCreators";
import Loader from "../../components/Loader/Loader";
import avatar from '../../assets/images/avatar.png';
import Posts from "../Posts/Posts";
import {getPosts} from "../../redux/actionCreators/actionPostsCreators";
import './userInfoStyle.scss';

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
                <div className={'information'}>
                    <p><span className={'info-block'}>Email:</span><p>{currentUser.email}</p></p>
                    <p><span className={'info-block'}>WebSite:</span> <p>{currentUser.website}</p></p>
                    <p><span className={'info-block'}>Company:</span> <p>{currentUser.company}</p></p>
                </div>
                {!currentUser.isAdd? <button className={'btn'} onClick={goToPosts}>View posts</button>: null}
                    <Posts/>
            </div> : <Loader/>}
        </div>
    );
};

export default UserInfo;