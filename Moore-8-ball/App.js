import { StyleSheet, Text, View, TextInput, boolean } from 'react-native';
import {Button} from './components/Button';
import { useState } from  'react';

export default function App() {

  const [showAppInfo, setShowAppInfo] = useState<boolean>(false);

  const [enterText, setText] = useState('');

  const responses = [
    "It is certain",
    "It is decidedly so",
    "Without a doubt",
    "Yes definitely",
    "You may rely on it",
    "As I see it, yes",
    "Most likely",
    "Outlook good",
    "Yes",
    "Signs point to yes",
    "Reply hazy, try again",
    "Ask again later",
    "Better not tell you now",
    "Cannot predict now",
    "Concentrate and ask again",
    "Don't count on it",
    "My reply is no",
    "My sources say no",
    "Outlook not so good",
    "Very doubtful"
  ];

  let magic = responses[Math.floor(Math.random() * responses.length)];
  console.log(magic);
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
      >
        {showAppInfo ? (
            <View style={StyleSheet.optionsRow}>
              <Text>Your Question was... {enterText}</Text>
              <Text> Magic EightBall Says!: {magic} </Text>
            </View>
        ) : (
          <View>
            <TextInput 
              value = {enterText}
              onChangeText = {setText}
              placeholder="Enter Text Here"
            />
            <Button label = "Enter your choice:" onPress={()=> setShowAppInfo(true)} />
          </View>
        )
      
      }
      </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  Image: {
    height: 100,
    resizeMode: "cover",
    width: "50%"
  },
});
