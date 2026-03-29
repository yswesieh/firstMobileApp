import {StyleSheet, Text, TextInput, View} from "react-native";
import React, {useState} from "react";
import {useUser} from "@/context/UserContext";

const D = () => {
    const { user, setUser } = useUser();

    const onChange = (text: string) => {
        setUser({email: text, name: user.name});
    }

    return (
        <View>
            <Text>D: User Email {user.email}</Text>
            <TextInput
                style={[styles.input]}
                onChangeText={onChange}
                value={user?.email}
                placeholder="Email"
                keyboardType="email-address"
                autoCapitalize="none"
            />

            <Text>UserName: {user?.name}</Text>
            <Text>Email: {user?.email}</Text>
        </View>

    )
}
export default D;

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
        marginBottom: 32,
        textAlign: "center",
    },
    button: {
        backgroundColor: "#2563eb",
        paddingVertical: 14,
        borderRadius: 10,
    },
    buttonText: {
        color: "#fff",
        textAlign: "center",
        fontSize: 16,
        fontWeight: "600",
    },
    reactLogo: {
        height: 178,
        width: 290,
    },
    label: {
        marginBottom: 6,
        fontSize: 14,
        fontWeight: "500",
    },
    input: {
        height: 50,
        borderWidth: 1,
        borderColor: "#ddd",
        borderRadius: 10,
        paddingHorizontal: 16,
        backgroundColor: "#fff",
    },
    errorInput: {
        borderColor: "#ff4d4f",
    },
    errorText: {
        color: "#ff4d4f",
        marginTop: 4,
        fontSize: 12,
    },
});
