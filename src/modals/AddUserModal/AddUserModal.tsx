import React, {useEffect, useState} from 'react';
import {Drawer} from 'antd';
import {Formik, Form, Field, ErrorMessage} from 'formik'
import {useDispatch, useSelector} from "react-redux";
import {editUser, setUserModel} from "../../redux/actionCreators/actionUsersCreators";
import './addModalStyle.scss'

const AddUserModal = ({onClose, visible, user}: any) => {

    const {users} = useSelector(({users}: any) => users);
    const dispatch = useDispatch();

    const [data, setData] = useState<any>({
        firstName: '',
        lastName: '',
        company: '',
        email: '',
        website: ''
    });

    const handleValidate = (values: any) => {
        const error: any = {};
        if (values.email.trim().length === 0) error.email = 'Email is required'
        if (values.firstName.trim().length === 0) error.firstName = 'First name is required'
        if (values.lastName.trim().length === 0) error.lastName = 'Last Name is required'
        if (values.company.trim().length === 0) error.company = 'Company is required'
        if (values.website.trim().length === 0) error.website = 'Website is required'
        return error;
    }

    const submit = (values: any, {setSubmitting}: any) => {
        if (!user) {
            const userModel = {
                id: users[users.length - 1].id + 1,
                ...values,
                isAdd: true
            }
            dispatch(setUserModel(userModel));
        } else {
            const userModel = {
                id: user.id,
                ...values,
                isAdd: user.isAdd
            }
            dispatch(editUser(userModel));
        }
        setSubmitting(false);
        onClose();
    }

    useEffect(() => {
        if (user) setData(user);
    }, [user])


    return (
        <div>
            <Drawer title="Write your info" placement="right" onClose={onClose} visible={visible}>
                <Formik initialValues={data} onSubmit={submit} validate={handleValidate}>
                    {({isSubmitting}) => {
                        return (
                            <Form>
                                <div className="form-block">
                                    <div className="input-block">

                                            <label htmlFor="">Email</label>

                                        <Field type="text" name="email" placeholder="Enter email"/>
                                        <ErrorMessage className="error" name="email" component="p"/>
                                    </div>
                                    <div className="input-block">
                                        <label htmlFor="">First name</label>
                                        <Field type="text" name="firstName" placeholder="Enter first name"/>
                                        <ErrorMessage className="error" name="firstName" component="p"/>
                                    </div>
                                    <div className="input-block">
                                        <label htmlFor="">Last name</label>
                                        <Field type="text" name="lastName" placeholder="Enter last name"/>
                                        <ErrorMessage className="error" name="lastName" component="p"/>
                                    </div>
                                    <div className="input-block">
                                        <label htmlFor="">Company name</label>
                                        <Field type="text" name="company" placeholder="Enter company name"/>
                                        <ErrorMessage className="error" name="company" component="p"/>
                                    </div>
                                    <div className="input-block">
                                        <label htmlFor="">Website</label>
                                        <Field type="text" name="website" placeholder="Enter website"/>
                                        <ErrorMessage className="error" name="website" component="p"/>
                                    </div>
                                    <div className="action-submit-block">
                                        <button disabled={isSubmitting} type="submit">
                                            Submit
                                        </button>
                                    </div>
                                </div>
                            </Form>
                        )
                    }}
                </Formik>
            </Drawer>
        </div>
    );
};

export default AddUserModal;