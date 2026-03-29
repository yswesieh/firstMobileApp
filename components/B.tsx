import {Pressable, Text, View} from "react-native";
import React from "react";
import C from "@/components/C";
import useCounter from "@/hooks/use-counter";

const B = ({onChange, email}: any) => {
    const {count, increment, decrement} = useCounter(0);

    return (
        <View>
            <Text>B</Text>
            <View style={{ flexDirection : "row" }}>
                <Pressable onPress={decrement}>-</Pressable>
                <Text style={{ marginHorizontal: 10 }}>{count}</Text>
                <Pressable onPress={increment}>+</Pressable>
            </View>
            <C onChange={onChange} email={email}></C>
        </View>

    )
}
export default B;
