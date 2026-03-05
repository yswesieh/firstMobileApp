import {Link} from "expo-router";
import {Image} from "expo-image";
import {StyleSheet, Text, View} from "react-native";

const ProductCard = ({ id, name, price, imageUrl }: any) => {
    return (
        <View style={styles.productCard} key={id}>
            <Link href={"/product-details/" + id }>
                <Image style={styles.image} source={{uri: imageUrl}} />
                <Text style={styles.title}>{name} {price}</Text>
            </Link>
        </View>
    )
}

const styles = StyleSheet.create({
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
        fontSize: 18,
        fontWeight: "700",
        marginTop: 32,
        textAlign: "center",
    },
    image: {
        height: 178,
        width: 290,
    },
});

export default ProductCard;