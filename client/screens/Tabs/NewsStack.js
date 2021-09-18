import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { View, Text, FlatList, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { news_data } from "../../data/news_data";

const Article = ({ route }) => {
  const { id } = route.params
  const article = news_data.find(item => item.id === id)
  return (
    <View style={styles.News}>
      <View style={styles.header}>
        <View style={styles.headerOne}>
          <Image source={require('../../assets/news/Logo.jpg')} style={styles.logoHeader}/>
        </View>
        <View style={styles.headerTwo}>
          <Text style={styles.textHeader1}>{article.title}</Text>
        </View>
      </View>
      <View style={styles.body}>
        <Text style={styles.TextText1}>{article.text}</Text>
      </View>
    </View>
  )
}

const NewsList = ({ navigation }) => {
  const renderItem = ({ item }) => {
    return (
      <TouchableOpacity onPress={() => navigation.navigate('article', {
        id: item.id
      })}
      style={{ overflow: 'hidden'} } style={styles.button}
      >
        <View style={styles.News}>
          <View style={styles.NewsHeader}>
            <View style={styles.NewsTitle}>
              <Text style={styles.TextTitle}>{item.title}</Text>
            </View>
            <View style={styles.NewsDate}>
              <Text style={styles.TextDate}>{item.date}</Text>
            </View>
          </View>
          <View style={styles.NewsBody}>
            <Text numberOfLines={3} style={styles.TextText}>{item.text}</Text>
          </View>
        </View>
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
  textHeader1: {
    fontFamily: 'GothamPro-Medium',
    fontSize: 17,
    marginTop: '16%',
  },
  body: {
    height: '89%',
    marginTop: '23%'
  },
  button: {
    marginHorizontal: '2%',
    marginVertical: '2%',
    borderBottomWidth: 1,
  },
  TextTitle: {
    fontFamily: 'GothamPro-Medium',
    fontSize: 20,
  },
  TextDate: {
    fontFamily: 'GothamPro-Medium',
    fontSize: 15,
  },
  TextText: {
    fontFamily: 'GothamPro-Light',
    fontSize: 20,
    textAlign:'justify',
    padding: '2%'
  },
  TextText1: {
    fontFamily: 'GothamPro-Light',
    fontSize: 20,
    textAlign:'justify',
    paddingHorizontal: '5%',
    paddingTop: '2%',
  },
  News: {
    flex: 1,
  },
  NewsHeader: {
    flex: 1,
    flexDirection: "row",
    height: '15%',
  },
  NewsTitle: {
    flex: 1, 
    alignItems: 'flex-start',
    justifyContent: 'center',
    paddingLeft: '2%'
  },
  NewsDate: {
    flex: -1,
    alignItems: 'flex-end',
    justifyContent: 'center',
    paddingRight: '2%'
  },
  asdf: {
backgroundColor: 'blue',
  },
});