import { Image } from 'expo-image';
import {Animated, Platform, Pressable, ScrollView, StyleSheet, Text, TextInput, View} from 'react-native';
import FlatList = Animated.FlatList;
import NewComponent from "@/components/new-component";
import {useState} from "react";

const DATA = [
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        title: 'First Item 1',
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

export default function HomeScreen() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleNameChange = (text: string) => {
      setName(text)
  }

  const handleEmailChange = (text: string) => {
      setEmail(text);
  }

  const handleOnPress = () => {

  }

  const Item = ({title}: any) => (
    <View style={styles?.item}>
        <Text style={styles?.title}>{title}</Text>
    </View>
  );

  return (
    <ScrollView>
        <Image source={require('@/assets/images/react-logo.png')} style={styles.reactLogo} />
        <Text>Hello World</Text>
        <TextInput style={styles.input} placeholder="Enter your name" onChangeText={handleNameChange}></TextInput>
        <TextInput style={styles.input} placeholder="Enter your email" onChangeText={handleEmailChange}></TextInput>
        <Pressable onPress={handleOnPress}>
            <Text>Press me</Text>
            <Text>Press me</Text>
        </Pressable>
        {/*<FlatList*/}
        {/*    data={DATA}*/}
        {/*    renderItem={({item}) => <Item title={item.title} />}*/}
        {/*    keyExtractor={item => item.id}*/}
        {/*/>*/}
        <NewComponent name={name} email={email} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
  },
  input: {
    padding: 10,
    marginTop: 10,
    borderWidth: 1,
    borderColor: '#ccc'
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
});
