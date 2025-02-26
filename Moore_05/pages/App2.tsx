import { StyleSheet, Text, View, TextInput, FlatList, SafeAreaView, Image, ImageSourcePropType } from 'react-native';
import { useState } from  'react';

interface OurItem{
  id: String;
  itemName: String;
  price: String;
  ourImage: String;
}

const DATA: OurItem[]= [
  {id: '1', itemName: 'Regular Crunchy Taco | ', price: '$1.79 | ', ourImage: require('./assets/images/item1.jpg')},
  {id: '2', itemName: 'Beefy Five Layer Burrito |', price: '$3.99 |', ourImage: require('./assets/images/item2.jpg')},
  {id: '3', itemName: 'Cheesy Double Beef Burrito |', price: '$2.79 |', ourImage: require('./assets/images/item3.jpg')},
  {id: '4', itemName: 'Nacho Fries |', price: '$2.39 |', ourImage: require('./assets/images/item4.jpg')},
  {id: '5', itemName: 'Beef Chalupa Supreme |', price: '$5.19 |', ourImage: require('./assets/images/item5.jpg')},
]

const ItemComponent = ({ item }: { item: OurItem}) => (
 <View style={styles.item}>
  <Text>{item.itemName}</Text>
  <Text>{item.price}</Text>
  <Image 
  style = {{height: 100, width: 75}}
  source = {item.ourImage as ImageSourcePropType} />
 </View>
);

export default function App() {
  return (
    <SafeAreaView>
      <Text> </Text>
      <Text>           Our Top Items!</Text>
      <FlatList
        data = {DATA}
        renderItem={({ item }) =>
          <ItemComponent item = {item}/>
      }
        />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#ccbbbd',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 5,
  }
})

