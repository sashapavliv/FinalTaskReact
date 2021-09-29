import {SET_POST_COMMENTS, SET_POSTS, SET_POSTS_IS_LOADING} from "../actionTypes/postsTypes";
import {postsAPI} from "../../services/api/postsAPI";

export const setPosts = (payload: any) => ({type: SET_POSTS, payload});
export const setPostsIsLoading = (payload:any) => ({type: SET_POSTS_IS_LOADING, payload});
export const setPostComments = (payload: any) => ({type: SET_POST_COMMENTS, payload});

export const getPosts = (id:number) => async (dispatch: any) => {
    try {
        dispatch(setPostsIsLoading(true))
        const posts = await postsAPI.getPosts(id)
        const postsArray = posts.map((value:any)=>{
            value.comments=[];
            return value;
        })
        dispatch(setPosts(postsArray));
        dispatch(setPostsIsLoading(false));
    } catch (e) {
        console.log(e)
    }
}

export const getComments = (id:number) => async (dispatch: any) => {
    try {
        dispatch(setPostsIsLoading(true))
        const comments = await postsAPI.getComments(id)
        dispatch(setPostComments({comments,id}));
        dispatch(setPostsIsLoading(false));
    } catch (e) {
        console.log(e)
    }
}