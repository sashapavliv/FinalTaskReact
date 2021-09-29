import React from 'react';
import {Modal} from "antd";

const DeleteUserModal = ({open,submit,handleCancel}:any) => {
    return (
        <div>
            <Modal title="Basic Modal" visible={open} onOk={submit} onCancel={handleCancel}>
                <p>Are you sure you want to delete this user?</p>
            </Modal>
        </div>
    );
};

export default DeleteUserModal;