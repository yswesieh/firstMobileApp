import ApiBase from "@/services/ApiBase";
import {LOGIN_API} from "@/constants/api";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
import app from "./firebaseConfig";
import StorageService from "@/services/StorageService";
import {router} from "expo-router";

const auth = getAuth(app);


export const login = async (payload: any) => {
    const response = await signInWithEmailAndPassword(auth, payload.email, payload.password);
    const user = response.user;
    const token = await user.getIdToken();

    await StorageService.saveUser(user);
    await StorageService.saveToken(token);
    return user;

}

export const signup = async (payload: any) => {
    const response = await createUserWithEmailAndPassword(auth, payload.email, payload.password);
    const user = response.user;
    const token = await user.getIdToken();
    await StorageService.saveUser(user);
    await StorageService.saveToken(token);
    return user;
}

export const logout = async () => {
    return await ApiBase.get('/api/v1/logout');
}

