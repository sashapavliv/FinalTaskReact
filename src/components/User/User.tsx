import React, {useState} from 'react';
import './userStyle.scss';
import {useHistory} from 'react-router'
import DeleteUserModal from "../../modals/DeleteUserModal/DeleteUserModal";
import {useDispatch} from "react-redux";
import {deleteUser} from "../../redux/actionCreators/actionUsersCreators";
import AddUserModal from "../../modals/AddUserModal/AddUserModal";

const User = (props: any) => {
    const [openDelete, setOpenDelete] = useState(false)
    const [openEdit, setOpenEdit] = useState(false)
    const dispatch = useDispatch()
    const history = useHistory();
    const {firstName, lastName, email, website, company, id, isAdd} = props
    const handleDelete = () => {
        dispatch(deleteUser(id))
    }
    const goToUser = () => {
        history.push(`/users/${id}`);
    }
    return (
        <div className={'user-block'}>
            <div className={'info-block'}>
                <p className={'name'}>{firstName} {lastName}</p>
                <div className={'more-info'}>
                    <p><span className={'span-info'}>Email:</span><p>{email}</p></p>
                    <p><span className={'span-info'}>WebSite:</span> <p>{website}</p></p>
                    <p><span className={'span-info'}>Company:</span> <p>{company}</p></p>
                </div>
            </div>
            <div className={'buttons'}>
                <button onClick={goToUser}>More info</button>
                {isAdd ?
                    <div className={'two-buttons'}>
                        <button onClick={() => setOpenEdit(true)}>Edit</button>
                        <button onClick={() => setOpenDelete(true)}>Delete</button>
                    </div>
                    : null
                }
            </div>
            <DeleteUserModal open={openDelete} submit={handleDelete} handleCancel={() => setOpenDelete(false)}/>
            <AddUserModal visible={openEdit} user={props} onClose={() => setOpenEdit(false)}/>
        </div>
    );
};

export default User;