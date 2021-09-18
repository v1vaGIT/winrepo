import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { View, Text, FlatList, ScrollView, TouchableOpacity, StyleSheet, Image, Linking } from 'react-native';
import { multimedia_data } from "../../data/multimedia_data";

const MultimediaItemCard = ({ route }) => {
  const { title } = route.params
  return (
    <Text>{title}</Text>
  )
}
const Multimedia = ({ navigation }) => {
  
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
      <View style={styles.container}>
        <TouchableOpacity onPress={() => Linking.openURL("https://play.google.com/store/apps/category/GAME?hl=ru&gl=US")}>
        <Image style={styles.img1} source={require('../../assets/media/games.jpg')}/>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => Linking.openURL("https://www.kinopoisk.ru/")}>
        <Image style={styles.img1} source={require('../../assets/media/Kino.jpg')}/>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => Linking.openURL("https://www.litres.ru/")}>
        <Image style={styles.img1} source={require('../../assets/media/Litres.jpg')}/>
        </TouchableOpacity>

      </View>
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
    
    marginTop: '27%',
    maxWidth: '100%',
    backgroundColor:'#CCCCCC',
    justifyContent:'center',
        
  },
  img1: {
    width: '100%',
    height: 230,
        
  }
  
})