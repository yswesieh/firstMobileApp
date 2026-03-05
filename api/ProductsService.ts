import ApiBase from "@/api/ApiBase";

export const getProducts = async () => {
    return await ApiBase.get('/api/v1/products');
}

export const getProductById = async (id: any) => {
    return await ApiBase.get(`/api/v1/products/${id}`);
}

export const addProduct = async (payload: any) => {
    return await ApiBase.post(`/api/v1/products`, payload);
}
