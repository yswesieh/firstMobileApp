import ApiBase from "@/api/ApiBase";

const getCurrentUser = async (filters: any): Promise<Response> => {
    const token = "token";
    const response = await fetch("/api/v1/users", {
        method: "GET",
        body: filters,
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        }
    });
    return response;
}


const getCurrentUser2 = async (filters: any) => {
    return await ApiBase.get('/api/v1/users', filters);
}

const login = async (payload: any) => {
    return await ApiBase.post('/api/v1/login', payload);
}

const logout = async () => {
    return await ApiBase.get('/api/v1/logout');
}


try {
    const reselt = await getCurrentUser2({ id: 1 })
} catch (e) {
    console.log(e);
}