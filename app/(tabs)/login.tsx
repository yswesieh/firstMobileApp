import React from "react";
import {
    Text,
    StyleSheet,
    Alert,
    Pressable,
} from "react-native";
import { useForm } from "react-hook-form";
import { SafeAreaView } from "react-native-safe-area-context";
import { FormInput } from "@/components/ui/FormInput";

type FormData = {
    email: string;
    password: string;
};

export default function LoginScreen() {
    const { control, handleSubmit } = useForm<FormData>({ mode: "all" });

    const onSubmit = (data: FormData) => {
        Alert.alert("Login Data", JSON.stringify(data));
    };

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>Login Page</Text>

            <FormInput
                name="email"
                control={control}
                placeholder="Email"
                keyboardType="email-address"
                autoCapitalize="none"
                rules={{
                    required: "Email is required",
                    pattern: {
                        value: /^\S+@\S+$/i,
                        message: "Invalid email",
                    },
                }}
            />

            <FormInput
                name="password"
                control={control}
                placeholder="Password"
                secureTextEntry
                rules={{
                    required: "Password is required",
                    minLength: {
                        value: 6,
                        message: "Minimum 6 characters",
                    },
                }}
            />
            <Pressable
                onPress={handleSubmit(onSubmit)}
                style={({ pressed }) => [
                    styles.button,
                    pressed && { opacity: 0.7 },
                ]}
            >
                <Text style={styles.buttonText}>Login</Text>
            </Pressable>
        </SafeAreaView>
    );
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
});
