import axios from "axios";

export const actualGetUserRequest = () => {
    return axios.request({
        method: "get",
        url: "https://jsonplaceholder.typicode.com/users/1",
    });
}