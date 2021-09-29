import {
    DELETE_USER, EDIT_USER,
    SET_CURRENT_USER,
    SET_USER_MODEL,
    SET_USERS,
    SET_USERS_IS_LOADING
} from "../actionTypes/usersTypes";

const initialState = {
    users: [],
    currentUser: {
        id: 0,
        firstName: '',
        lastName: '',
        company: '',
        email: '',
        website: '',
        isAdd: false
    },
    isLoading: true
}

export const usersReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case SET_USERS: {
            return {
                ...state,
                users: action.payload
            }
        }
        case SET_USERS_IS_LOADING: {
            return {
                ...state,
                isLoading: action.payload
            }
        }
        case SET_CURRENT_USER: {
            return {
                ...state,
                currentUser: action.payload
            }
        }
        case SET_USER_MODEL: {
            console.log(action.payload)
            return {
                ...state,
                users: [...state.users,action.payload]
            }
        }
        case DELETE_USER: {
            const usersArray = [...state.users]
            const index = usersArray.findIndex((value:any) => value.id===action.payload)
            usersArray.splice(index,1);
            return {
                ...state,
                users: usersArray
            }
        }
        case EDIT_USER: {
            const usersArray = [...state.users]
            const users = usersArray.map((value:any) => {
                if(value.id===action.payload.id){
                    value=action.payload
                }
                return value;
            })
            return {
                ...state,
                users: users
            }
        }

        default: {
            return state
        }
    }
}