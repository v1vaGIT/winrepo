import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React, { useLayoutEffect } from "react";
import { View, Text, TouchableOpacity } from 'react-native';
import { Cart } from "./Cart";

const MarketStack = createNativeStackNavigator()

const Market = ({ navigation }) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity onPress={() => navigation.navigate('cart')}>
          <Text>Ssss</Text>
        </TouchableOpacity>
      )
    })
  })

  return (
    <View>
      <Text>Market</Text>
    </View>
  )
}

export const MarketnCart = () => {

  return (
    <MarketStack.Navigator>
      <MarketStack.Screen name='market' component={Market} />
      <MarketStack.Screen name='cart' component={Cart} />
    </MarketStack.Navigator>
  )
}