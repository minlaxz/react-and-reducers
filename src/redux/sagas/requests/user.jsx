import axios from "axios";

export const getUserRequest = () => {
    return axios.request({
        method: "get",
        url: "https://jsonplaceholder.typicode.com/users/1",
    });
}