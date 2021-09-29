import instance from "./instance";
import {apiConfig} from "../../redux/config/config";

const usersAPI = {
    getUsers: () => {
        return instance.get(`${apiConfig.gateAway}/users`).then(({ data }) => data);
    },
    getCurrentUser: (id:number|any) => {
        return instance.get(`${apiConfig.gateAway}/users/${id}`).then(({ data }) => data);
    },
    getUserByEmail: (email:any) => {
        console.log(`${apiConfig.gateAway}/users?email=${email}`)
        return instance.get(`${apiConfig.gateAway}/users?email=${email}`).then(({ data }) => data);
    },
};

export { usersAPI };