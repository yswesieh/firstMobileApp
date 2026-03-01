import {View, Text, StyleSheet, ScrollView} from "react-native";
import {useEffect, useState} from "react";
import {getProducts} from "@/api/ProductsService";
import {Image} from "expo-image";

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
            <Text>Products</Text>
            <ScrollView>
                {products?.map(({ id, name, description, imageUrl, price }: any) => (
                    <View style={styles.productCard} key={id}>
                        <Text>{name}</Text>
                        <Text>{description}</Text>
                        <Image style={styles.image} source={{uri: imageUrl}} />
                        <Text>{price}</Text>
                        <Text>{id}</Text>
                    </View>
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
    productCard: {
        flex: 1,
        padding: 40,
        justifyContent: "center",
        alignItems: "center",
        borderWidth: 1,
        borderColor: "#ddd",
        borderRadius: 10,
        margin: 20,
        textAlign: "center",
    },
    title: {
        fontSize: 28,
        fontWeight: "700",
        marginBottom: 32,
        textAlign: "center",
    },
    image: {
        height: 178,
        width: 290,
    },
});

export default Products;
