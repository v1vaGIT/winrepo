import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
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
    <View>
      <FlatList 
        data={news_data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  )
}

const NewsStack = createNativeStackNavigator()

export const News = () => {
  return(
    <NewsStack.Navigator>
      <NewsStack.Screen name='newslist' component={NewsList} />
      <NewsStack.Screen name='article' component={Article} options={{headerShown: false}}/>
    </NewsStack.Navigator>
  )
}