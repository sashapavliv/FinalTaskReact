import instance from "./instance";
import {apiConfig} from "../../redux/config/config";

const postsAPI = {
    getPosts: (id:number) => {
        return instance.get(`${apiConfig.gateAway}/posts`,{params:{userId:id}}).then(({data}) => data);
    },
    getComments: (id:number) => {
        return instance.get(`${apiConfig.gateAway}/comments`,{params:{postId:id}}).then(({data}) => data);
    },
}
export {postsAPI}