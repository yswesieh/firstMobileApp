import {addDoc, collection, getDocs} from "firebase/firestore"
import { db } from "./firebaseConfig"

type Product = {
    name: string,
    price: number,
    imageUrl: string,
    description?: string,
}

export const fetchProducts = async () => {
    const snapshot = await getDocs(collection(db, "products"))

    return snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
    }))
}


export const createProduct = async (product: Product) => {
    const doc = await addDoc(collection(db, "products"), product)
    return doc.id
}
