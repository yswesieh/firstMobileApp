import {Pressable, StyleSheet, Text, View} from "react-native";
import A from "@/components/A";
import B from "@/components/B";
import {useEffect, useState} from "react";
import StorageService from "@/services/StorageService";
import { Gesture, GestureDetector } from "react-native-gesture-handler";

function HomeScreen () {
    const [user, setUser] = useState<any>("");



    const tap = Gesture.Tap().onEnd(() => {
        console.log("tapped");
    });

    const pan = Gesture.Pan().onEnd((e) => {
        console.log("update", e);

    })
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

    // useEffect(() => {
    //     getData();
    // }, []);

    return (
        <View style={styles.container}>
            <GestureDetector gesture={pan}>
                <Text>text 1111</Text>
            </GestureDetector>
            <Pressable onPress={logout} style={({ pressed }) => ({ opacity: pressed ? 0.5 : 1 })}></Pressable>
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