import {Text, TextInput, StyleSheet, Pressable, FlatList, View} from "react-native";
// import {Image} from "expo-image";

const DATA = [
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        title: 'First Item',
    },
    {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
        title: 'Second Item',
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d72',
        title: 'Third Item',
    },
];

type ItemProps = {title: string};

const Item = ({title}: ItemProps) => (
    <View style={styles.item}>
        <Text style={styles.title}>{title}</Text>
    </View>
);
function HomeScreen () {
    const handleTextChange = (text: string) => {
        console.log(text);
    }
    const onPressFunction = (e: any) => {
        console.log("1111");
    }


    return (
        <View style={styles.container}>
            <Text>Hello</Text>
            {/*<Image style={styles.image} source={require('@/assets/images/react-logo.png')} />*/}
            <TextInput onChangeText={handleTextChange} />
            <Pressable onPress={onPressFunction}>
                <Text>Im pressable!</Text>
            </Pressable>

            <FlatList
                data={DATA}
                renderItem={({item}) => <Item title={item.title} />}
                keyExtractor={item => item.id}
            />
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
    image: {
        width: 300,
        height: 400,
    },
    item: {
        backgroundColor: '#f9c2ff',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
    },
    title: {
        fontSize: 32,
    },
})
export default HomeScreen;