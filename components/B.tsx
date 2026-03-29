import {Pressable, Text, View} from "react-native";
import React from "react";
import C from "@/components/C";
import useCounter from "@/hooks/use-counter";

const B = () => {
    const {count, increment, decrement} = useCounter(0);

    return (
        <View>
            <Text>B</Text>
            <View style={{ flexDirection : "row" }}>
                <Pressable onPress={decrement}>
                    <Text>-</Text>
                </Pressable>
                <Text style={{ marginHorizontal: 10 }}>{count}</Text>
                <Pressable onPress={increment}>
                    <Text>+</Text>
                </Pressable>
            </View>
            <C></C>
        </View>

    )
}
export default B;
