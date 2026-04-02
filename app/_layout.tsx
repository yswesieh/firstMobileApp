import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import {router, Stack} from 'expo-router';
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import {queryClient} from "@/lib/queryClient";

// import { StatusBar } from 'expo-status-bar';
import 'react-native-reanimated';

import { useColorScheme } from '@/hooks/use-color-scheme';
import {UserProvider} from "@/context/UserContext";
import StorageService from "@/services/StorageService";
import {useEffect} from "react";

export const unstable_settings = {
    anchor: '(tabs)',
};

export default function RootLayout() {
    const colorScheme = useColorScheme();

    // useEffect(async () => {
    //     const token = await StorageService.getToken();
    //     if (!token) {
    //         router.push('/login');
    //     }
    // });
    //


    return (
        <QueryClientProvider client={queryClient}>
            <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
                <UserProvider>
                    <Stack>
                        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
                        <Stack.Screen name="modal" options={{ presentation: 'modal', title: 'Modal' }} />
                    </Stack>
                </UserProvider>
                {/*<StatusBar style="auto" />*/}
            </ThemeProvider>
        </QueryClientProvider>
    );
}