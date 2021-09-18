import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { View, Text, FlatList, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { news_data } from "../../data/news_data";

const Article = ({ route }) => {
  const { id } = route.params
  const article = news_data.find(item => item.id === id)
  return (
    <Text>{article.title}</Text>
  )
}

const NewsList = ({ navigation }) => {
  const renderItem = ({ item }) => {
    return (
      <TouchableOpacity onPress={() => navigation.navigate('article', {
        id: item.id
      })}
      style={{ overflow: 'hidden'}}
      >
        <View>
          <Text>{item.title}</Text>
          <Text>{item.date}</Text>
        </View>
        <Text>{item.text}</Text>
      </TouchableOpacity>
    )
  }

  return (
    <View style={styles.screen}>
      <View style={styles.header}>
        <View style={styles.headerOne}>
          <Image source={require('../../assets/news/Logo.jpg')} style={styles.logoHeader}/>
        </View>
        <View style={styles.headerTwo}>
          <Text style={styles.textHeader}>Новости</Text>
        </View>
      </View>
      <View style={styles.body}>
        <FlatList 
          data={news_data}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      </View>
    </View>
  )
}

const NewsStack = createNativeStackNavigator()


export const News = () => {
  return(
    <NewsStack.Navigator screenOptions={{headerShown: false}}>
      <NewsStack.Screen name='newslist' component={NewsList} />
      <NewsStack.Screen name='article' component={Article} />
    </NewsStack.Navigator>
  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  header: {
    flex: 1,
    flexDirection: "row",
    height: '11%',
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
  body: {
    backgroundColor: 'red',
    height: '89%'
  },
});