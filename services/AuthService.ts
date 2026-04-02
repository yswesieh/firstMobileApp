import ApiBase from "@/services/ApiBase";
import {LOGIN_API} from "@/constants/api";

export const login = async (payload: any) => {
    return await ApiBase.post(LOGIN_API, payload);
}

export const logout = async () => {
    return await ApiBase.get('/api/v1/logout');
}

