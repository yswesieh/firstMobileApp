import {Text, View} from "react-native";
import React from "react";
import {useUser} from "@/context/UserContext";

const A = () => {

    const { user } = useUser();

    return (
        <View>
            <Text>A user email: {user.email}</Text>
        </View>

    )
}
export default A;
