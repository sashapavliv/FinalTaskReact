import React from 'react';
import {Modal} from "antd";
import './deleteModalStyle.scss';

const DeleteUserModal = ({open,submit,handleCancel}:any) => {
    return (
        <div className={'delete-modal'}>
            <Modal className={'title-modal'} title="Delete user" visible={open} onOk={submit} onCancel={handleCancel}>
                <p>Are you sure you want to delete this user?</p>
            </Modal>
        </div>
    );
};

export default DeleteUserModal;