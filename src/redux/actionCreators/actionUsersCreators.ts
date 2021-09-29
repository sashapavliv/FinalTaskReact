import {
    DELETE_USER, EDIT_USER,
    SET_CURRENT_USER,
    SET_USER_MODEL,
    SET_USERS,
    SET_USERS_IS_LOADING
} from "../actionTypes/usersTypes";
import {usersAPI} from "../../services/api/usersAPI";
import {setCorrectData} from "../../helpers/helpers";

export const setUsers = (payload: any) => ({type: SET_USERS, payload});
export const setUsersIsLoading = (payload:any) => ({type: SET_USERS_IS_LOADING, payload});
export const setCurrentUser = (payload:any) => ({type: SET_CURRENT_USER,payload});
export const setUserModel = (payload:any) => ({type: SET_USER_MODEL,payload})
export const deleteUser = (payload:any) => ({type: DELETE_USER,payload})
export const editUser = (payload:any) => ({type: EDIT_USER,payload})

export const getUsers = () => async (dispatch: any) => {
    try {
        dispatch(setUsersIsLoading(true))
        const users = await usersAPI.getUsers();
        const usersArray = users.map((value:any)=>{
            return setCorrectData(value);
        })
        dispatch(setUsers(usersArray));
        dispatch(setUsersIsLoading(false));
    } catch (e) {
        console.log(e)
    }
}
export const getCurrentUser = (id: Number | undefined) => async (dispatch: any) => {
    try {
        const user = await usersAPI.getCurrentUser(id);
        const userWithCorrectData = setCorrectData(user);
        dispatch(setCurrentUser(userWithCorrectData));
        dispatch(setUsersIsLoading(false));
    } catch (e) {
        console.log(e)
    }
}

