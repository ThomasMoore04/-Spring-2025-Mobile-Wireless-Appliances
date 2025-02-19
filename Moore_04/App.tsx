import { StyleSheet, Text, View, TextInput, FlatList, SafeAreaView, Image, ImageSourcePropType } from 'react-native';
import { useState } from  'react';

interface OurItem{
  id: String;
  movieName: String;
  rating: String;
  ourImage: String;
}

const DATA: OurItem[]= [
  {id: '1', movieName: 'Ballistic: Ecks vs. Sever | ', rating: '3.7/10: IMDB | ', ourImage: require('./assets/images/movie1.jpg')},
  {id: '2', movieName: 'One Missed Call |', rating: '4/10: IMDB |', ourImage: require('./assets/images/movie2.jpg')},
  {id: '3', movieName: 'Left Behind |', rating: '3.1/10: IMDB |', ourImage: require('./assets/images/movie3.jpg')},
  {id: '4', movieName: 'A Thousand Words |', rating: '5.9/10: IMDB |', ourImage: require('./assets/images/movie4.jpg')},
  {id: '5', movieName: 'Baby Geniuses 2 |', rating: '1.5/10: IMDB |', ourImage: require('./assets/images/movie5.jpg')},
  {id: '6', movieName: 'Pinocchio (2002) |', rating: '4.2/10: IMDB |', ourImage: require('./assets/images/movie6.jpg')},
  {id: '7', movieName: 'The Nutcracker (2010) | ', rating: '4.1/10: IMDB | ', ourImage: require('./assets/images/movie7.jpg')},
  {id: '8', movieName: 'Cabin Fever (2016) |', rating: '3.7/10: IMDB |', ourImage: require('./assets/images/movie8.jpg')},
  {id: '9', movieName: 'Wagon East! |', rating: '4.8/10: IMDB |', ourImage: require('./assets/images/movie9.jpg')},
  {id: '10', movieName: 'Problem Child |', rating: '5.5/10: IMDB |', ourImage: require('./assets/images/movie10.jpg')}

]

const ItemComponent = ({ item }: { item: OurItem}) => (
 <View style={styles.item}>
  <Text>{item.movieName}</Text>
  <Text>{item.rating}</Text>
  <Image 
  style = {{height: 100, width: 75}}
  source = {item.ourImage as ImageSourcePropType} />
 </View>
);

export default function App() {
  return (
    <SafeAreaView>
      <Text> </Text>
      <Text>           Worst Movies According to Rotten Tomatoes</Text>
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

