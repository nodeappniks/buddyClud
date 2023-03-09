import axios from "axios";
import Config from "./Config";
// import config from "../config";
export default class UserService {
    static register(data, url) {
        return axios.post(`${url}/users/register`, data);
    }
    static auth(data, url) {
        return axios.post(`${url}/users/login`, data);
    }
}
