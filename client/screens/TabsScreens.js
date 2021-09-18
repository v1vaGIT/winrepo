import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import { View, Text } from 'react-native'
import { Feedback } from "./Tabs/Feedback";
import { MarketnCart } from "./Tabs/MarketnCart";
import { MultimediaStack } from "./Tabs/MultimediaStack";
import { News } from "./Tabs/NewsStack";
import { Train } from "./Tabs/Train";
import {Image } from 'react-native';

const Tabs = createBottomTabNavigator()

export const TabsScreens = () => {
  return (
    <Tabs.Navigator initialRouteName='  ' screenOptions={{headerShown: false}}>
      <Tabs.Screen name=' ' component={Train} options={{tabBarIcon: ({focused}) => (
        <View style={{alignItems:'center', justifyContent:'center', top: 7}}>
          <Image 
            source={require('../assets/tabsIcons/icons8-поезд-80.png')} 
            resizeMode = 'contain'
            style={{
              width: 30,
              height: 30,
              tintColor: focused ? "e32f45" : "#748c94"
            }}
          />
        </View>
      ),}}/>
    <Tabs.Screen name='  ' component={News} options={{tabBarIcon: ({focused}) => (
      <View style={{alignItems:'center', justifyContent:'center', top: 7}}>
        <Image 
          source={require('../assets/tabsIcons/icons8-новости-50.png')} 
          resizeMode = 'contain'
          style={{
            width: 30,
            height: 30,
            tintColor: focused ? "e32f45" : "#748c94"
          }}
        />
      </View>
    ),}}/>
    <Tabs.Screen name='   ' component={MarketnCart} options={{tabBarIcon: ({focused}) => (
      <View style={{alignItems:'center', justifyContent:'center', top: 7}}>
        <Image 
          source={require('../assets/tabsIcons/icons8-продуктовый-магазин-50.png')} 
          resizeMode = 'contain'
          style={{
            width: 30,
            height: 30,
            tintColor: focused ? "e32f45" : "#748c94"
          }}
        />
      </View>
    ),}}/>
    <Tabs.Screen name='     ' component={MultimediaStack} options={{tabBarIcon: ({focused}) => (
      <View style={{alignItems:'center', justifyContent:'center', top: 7}}>
        <Image 
          source={require('../assets/tabsIcons/icons8-видео-плейлист-50.png')} 
          resizeMode = 'contain'
          style={{
            width: 30,
            height: 30,
            tintColor: focused ? "e32f45" : "#748c94"
          }}
        />
      </View>
    ),}}/>
    <Tabs.Screen name='      ' component={Feedback} options={{tabBarIcon: ({focused}) => (
      <View style={{alignItems:'center', justifyContent:'center', top: 7}}>
        <Image 
          source={require('../assets/tabsIcons/icons8-комментарии-50.png')} 
          resizeMode = 'contain'
          style={{
            width: 30,
            height: 30,
            tintColor: focused ? "e32f45" : "#748c94"
          }}
        />
        </View>
      ),}}/>
    </Tabs.Navigator>
  )
}