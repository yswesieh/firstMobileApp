import {StyleSheet, Text, View} from "react-native";
import A from "@/components/A";
import B from "@/components/B";
import {useEffect, useState} from "react";
import StorageService from "@/services/StorageService";

function HomeScreen () {
    const [user, setUser] = useState<any>("");

    const logout = async () => {
        StorageService.removeToken();
        StorageService.clearAsyncStorage();
    }

    const getData = async () => {
        try {
            const data = await StorageService.getUser();
            setUser(data);
        } catch (e) {
        }
    }

    useEffect(() => {
        getData();
    }, []);

    return (
        <View style={styles.container}>
            <Text>{user.firstName}</Text>
            <A></A>
            <B></B>
        </View>
    )

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 100,
    },
})
export default HomeScreen;