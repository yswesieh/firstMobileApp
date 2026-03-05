import {View, Text, StyleSheet, ScrollView, Pressable} from "react-native";
import {useEffect, useState} from "react";
import {addProduct, getProducts} from "@/api/ProductsService";
import {Link} from "expo-router";
import {Image} from "expo-image";
import ProductCard from "@/components/product-card";

const Products = () => {

    const [products, setProducts] = useState([]);

    const handleAddProduct = async () => {
        const data = {
            name: "Test Product",
            price: 100,
            imageUrl: "https://picsum.photos/200/300",
            description: "This is a test product",
        };
        const response: any = await addProduct(data);
        setProducts([response.data, ...products]);
    }

    const fetchData = async () => {
        try {
            const response = await getProducts();
            console.log(response.data);
            setProducts(response.data);
        } catch (e) {

        }
    }

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <View style={{ marginTop: 20}}>
            <View style={styles.container}>
                <Text style={styles.title}>Product List</Text>
                <Pressable style={styles.button} onPress={handleAddProduct}>
                    Add Product
                </Pressable>
            </View>
            <ScrollView style={{ height: 500 }}>
                {products?.map((product : any) => (
                    <ProductCard key={product.id} {...product} />
                ))}
            </ScrollView>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    title: {
        fontSize: 18,
        fontWeight: "700",
        margin: 32,
        textAlign: "center",
    },
    button: {
        backgroundColor: "#2563eb",
        color: "#fff",
        padding: 8,
        borderRadius: 10,
        height: 40,
        marginEnd: 24,
    }
});

export default Products;
