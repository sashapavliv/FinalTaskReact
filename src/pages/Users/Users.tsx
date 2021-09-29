import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getUsers} from "../../redux/actionCreators/actionUsersCreators";
import User from "../../components/User/User";
import Loader from "../../components/Loader/Loader";
import AddUserModal from "../../modals/AddUserModal/AddUserModal";
import './usersStyles.scss'

const Users = () => {
    const [open, setOpen] = useState(false);
    const {isLoading, users}: any = useSelector(({users}: any) => users)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getUsers());
    }, [])

    return (
        <div className={'users-block'}>
            <div className={'add-button'}>
                <button onClick={() => setOpen(true)}>add</button>
            </div>
            {
                users.map((user: any) => (
                        <User key={users.id} firstName={user.firstName} lastName={user.lastName} email={user.email}
                              website={user.website}
                              company={user.company} id={user.id} isAdd={user.isAdd}/>
                    )
                )
            }
            <AddUserModal visible={open} onClose={() => setOpen(false)}/>
            {isLoading ? <Loader/> : null}
        </div>
    );
};
export default Users;