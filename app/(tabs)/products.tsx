import {View, Text, StyleSheet, ScrollView} from "react-native";
import {useEffect, useState} from "react";
import {getProducts} from "@/api/ProductsService";
import {Image} from "expo-image";
import {Link} from "expo-router";
import ProductCard from "@/components/product-card";

const Products = () => {

    const [products, setProducts] = useState([]);

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
        <View>
            <Text style={styles.title}>Products</Text>
            <ScrollView>
                {products?.map((product: any) => (
                    <ProductCard key={product.id} {...product} />
                ))}
            </ScrollView>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24,
        justifyContent: "center",
        backgroundColor: "#f9fafb",
    },
    title: {
        fontSize: 28,
        fontWeight: "700",
        margin: 32,
        textAlign: "center",
    },
    // button: {
    //     backgroundColor: "#2563eb",
    //     paddingVertical: 14,
    //     borderRadius: 10,
    // }
});

export default Products;
