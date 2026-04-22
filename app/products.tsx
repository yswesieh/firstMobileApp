import {View, Text, StyleSheet, ScrollView, Pressable} from "react-native";

import ProductCard from "@/components/product-card";
import {useProducts} from "@/hooks/use-products";
import {useCreateProduct} from "@/hooks/use-create-product";
import type { Product } from "@/types/product";

const Products = () => {

    const handleAddProduct = async () => {
        const data = {
            name: "Test Product",
            price: 100,
            imageUrl: "https://picsum.photos/200/300",
            description: "This is a test product",
        };
        mutate(data);
    }

    const { data, isLoading, error } = useProducts();


    const { mutate } = useCreateProduct();

    if(isLoading) return (
        <View style={{ marginTop: 20}}>
            <Text>Loading...</Text>
        </View>
    )

    if(error) return (
        <View style={{ marginTop: 20}}>
            <Text>Error fetching data</Text>
        </View>
    )

    return (
        <View style={{ marginTop: 20}}>
            <View style={styles.container}>
                <Text style={styles.title}>Product List</Text>
                <Pressable style={styles.button} onPress={handleAddProduct}>
                    Add Product
                </Pressable>
            </View>
            <ScrollView style={{ height: 500 }}>
                {data?.map((product: Product) => (
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
    },
});

export default Products;
