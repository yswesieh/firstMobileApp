import {Text, View} from "react-native";

const NewComponent = ({name, email}: any) => {
    return (
        <View>
            <Text>Your name is: {name}</Text>
            <Text>Your email is: {email}</Text>
        </View>
    );
}

export default NewComponent;