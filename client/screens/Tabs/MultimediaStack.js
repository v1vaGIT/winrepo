import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { View, Text, FlatList, ScrollView, TouchableOpacity } from 'react-native';
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
      <View>
        <Text>{item.title}</Text>
        <ScrollView horizontal>
          {item.options.map(x => {
            return (
              <TouchableOpacity onPress={() => navigation.navigate('media-item-card', {
                title: x.title
              })}>
                <Text>{x.title}</Text>
              </TouchableOpacity>
            )
          })}
        </ScrollView>
    </View>
    )
  }
  return (
    <View>
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