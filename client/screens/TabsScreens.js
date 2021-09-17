import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import { View, Text } from 'react-native'
import { Feedback } from "./Tabs/Feedback";
import { MarketnCart } from "./Tabs/MarketnCart";
import { Multimedia } from "./Tabs/Multimedia";
import { News } from "./Tabs/News";
import { Train } from "./Tabs/Train";

const Tabs = createBottomTabNavigator()

export const TabsScreens = () => {
  return (
    <Tabs.Navigator>
      <Tabs.Screen name='train' component={Train}/>
      <Tabs.Screen name='news' component={News} />
      <Tabs.Screen name='market' component={MarketnCart} options={{headerShown: false}}/>
      <Tabs.Screen name='multimedia' component={Multimedia} />
      <Tabs.Screen name='feedback' component={Feedback} />
    </Tabs.Navigator>
  )
}