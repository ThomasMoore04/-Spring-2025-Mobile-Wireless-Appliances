import { StatusBar } from 'expo-status-bar';
import { StyleSheet, SafeAreaView, Text, View, Image, Linking } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Image style={styles.Image} source={require("./assets/Headshot.png")}/>
      <Text>Thomas Moore's Business Card</Text>
      <Text onPress={() => Linking.openURL("tel:8434652924")}>My Phone Number</Text>
      <Text onPress={() => Linking.openURL("mailto:tmoore44@hgtc.edu")}>My Email</Text>
      <Text onPress={() => Linking.openURL("github.com/ThomasMoore04")}>My Git Hub</Text>
      <StatusBar style="auto" />
    </View>
  );
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
