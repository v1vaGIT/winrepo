import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { View, Text, FlatList, ScrollView, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { multimedia_data } from "../../data/multimedia_data";

const MultimediaItemCard = ({ route }) => {
  const { title } = route.params
  return (
    <Text>{title}</Text>
  )
}
const Multimedia = ({ navigation }) => {
  const renderItem = ({ item }) => {
    return (
      <View style={styles.container}>
        <Text style={styles.mediaTitle}>{item.title}</Text>
          <ScrollView horizontal>
          {item.options.map(x => {
            return (
              <View style={styles.mediaBox}> 
              <TouchableOpacity onPress={() => navigation.navigate('media-item-card', {
                title: x.title
              })}>
                <Text style={styles.x_title}>{x.title}</Text>
              </TouchableOpacity>
              </View>
            )
          })}
        </ScrollView>
                  
    </View>
    )
  }
  return (
    <View>
      <View style={styles.header}>
        <View style={styles.headerOne}>
          <Image source={require('../../assets/news/Logo.jpg')} style={styles.logoHeader}/>
        </View>
        <View style={styles.headerTwo}>
          <Text style={styles.textHeader}>Мультимедиа</Text>
        </View>
      </View>
      <FlatList 
        data={multimedia_data}
        renderItem={renderItem}
        keyExtractor={x => x.id}
      />
    </View>
  )
}
const MediaStack = createNativeStackNavigator()
export const MultimediaStack = () => {
  return (
    <MediaStack.Navigator screenOptions={{headerShown: false}}>
      <MediaStack.Screen name='multimedia' component={Multimedia} />
      <MediaStack.Screen name='media-item-card' component={MultimediaItemCard} />
    </MediaStack.Navigator>
  )
}

const styles = StyleSheet.create({
  
  header: {
    display: 'flex',
    position: 'absolute',
    top: 0,
    start: 0,
    flexDirection: "row"
  },
  headerOne: {
    flex: 1, 
    alignItems: 'center',
  },
  headerTwo: {
    flex: 5,
    alignItems: 'flex-start'
  },
  logoHeader: {
    width: 30,
    height: 30,
    marginTop: '74%',
  },
  textHeader: {
    fontFamily: 'GothamPro-Medium',
    fontSize: 19,
    marginTop: '16%',
  },
  //----------------------------------------------------
  container: {
    marginTop: '20%'
  },
  mediaTitle: {
    fontSize: 20,
    fontFamily: 'GothamPro-Medium',
    textAlign:'center',
    marginTop: '7%'
  },
  mediaBox: {
    fontSize: 25
  },
  x_title: {
    fontSize: 25,
    padding: 10,
    fontFamily: 'GothamPro-Medium'

  }
})