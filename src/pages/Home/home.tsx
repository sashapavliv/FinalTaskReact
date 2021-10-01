import React from 'react';
import {Link} from 'react-router-dom'
import './homeStyles.scss'

const Home = () => {
    return (
        <div className={'home-block'}>
            <div>
                <p className={'welcome'}>
                    Welcome guys!
                </p>
                <p className={'text'}>
                    If you want to see users click below!
                </p>
                <div className={'link-block'}>
                    <Link className={'link'} to={'/users'}>Users</Link>
                </div>
            </div>
        </div>
    );
};
export default Home;