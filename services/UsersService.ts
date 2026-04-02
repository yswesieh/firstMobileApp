import ApiBase from "@/services/ApiBase";
import {LOGIN_API, USERS_API} from "@/constants/api";

export const getCurrentUser = async (filters: any): Promise<Response> => {
    const token = "token";
    const response = await fetch(USERS_API, {
        method: "GET",
        body: filters,
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        }
    });
    return response;
}


export const getCurrentUser2 = async (filters: any) => {
    return await ApiBase.post(USERS_API, filters);
}

export const login = async (payload: any) => {
    return await ApiBase.post(LOGIN_API, payload);
}

export const logout = async () => {
    return await ApiBase.get('/api/v1/logout');
}
















