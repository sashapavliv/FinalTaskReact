import {SET_POST_COMMENTS, SET_POSTS, SET_POSTS_IS_LOADING} from "../actionTypes/postsTypes";

const initialState = {
    posts: [],
    isLoading: true
}

export const postsReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case SET_POSTS: {
            return {
                ...state,
                posts: action.payload
            }
        }
        case SET_POSTS_IS_LOADING: {
            return {
                ...state,
                isLoading: action.payload
            }
        }
        case SET_POST_COMMENTS: {
            const postsArray = [...state.posts]
            const posts = postsArray.map((value: any) => {
                if (value.id === action.payload.id) {
                    value.comments=action.payload.comments;
                }
                return value;
            })
            return {
                ...state,
                posts: posts
            }
        }

        default: {
            return state
        }
    }
}