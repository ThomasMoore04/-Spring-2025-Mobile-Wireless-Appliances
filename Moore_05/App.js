import { StatusBar } from 'expo-status-bar';
import { StyleSheet, SafeAreaView, Text, View, Image, Linking, Button, Link } from 'react-native';
export default function App() {

  return (
    <View style={styles.container}>
      <Image style={styles.Image} source={require("./assets/images/resturant.png")}/>
      <Text>Taco Bell on River Oaks Drive</Text>
      <Text onPress={() => Linking.openURL("tel:8437963529")}>Store Phone Number</Text>
      <Text onPress={() => Linking.openURL("https://www.google.com/maps/dir//4306+River+Oaks+Dr,+Myrtle+Beach,+SC+29579/@33.7599786,-78.941722,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x89006fbda14373e3:0x5f434f42a45de563!2m2!1d-78.8593208!2d33.760006?entry=ttu&g_ep=EgoyMDI1MDIyMy4xIKXMDSoJLDEwMjExNDUzSAFQAw%3D%3D")}>Store Address</Text>
      <Text onPress={() => Linking.openURL("https://locations.tacobell.com/sc/myrtle-beach/4306-river-oaks-drive.html?utm_source=yext&utm_campaign=googlelistings&utm_medium=referral&utm_term=039148&utm_content=website&y_source=1_NDEzODUzNDMtNzE1LWxvY2F0aW9uLndlYnNpdGU%3D")}>Our Website!</Text>
      <Link href={require("./pages/App2.tsx")} target="blank"> Resume </Link> 
      <StatusBar style="auto" />
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#5c2d73'
  },
  Image: {
    height: 100,
    resizeMode: "cover",
    width: "50%"
  },
});
