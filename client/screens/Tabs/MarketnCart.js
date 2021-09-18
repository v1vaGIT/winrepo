import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { Cart } from "./Cart";

const MarketStack = createNativeStackNavigator()

const Market = ({ navigation }) => {
  const [firstButtonDisabled, setFirstButtonDisabled] = useState(false)

	const switchStyle1 = firstButtonDisabled ? styles.switchNotActive : styles.switchActive
	const switchStyle2 = !firstButtonDisabled ? styles.switchNotActive : styles.switchActive

  return (
    <View style={{ flex: 1, alignItems: 'center'}}>
      <View style={styles.header}>
        <View style={styles.headerOne}>
          <Image source={require('../../assets/news/Logo.jpg')} style={styles.logoHeader}/>
        </View>
        <View style={styles.headerTwo}>
          <Text style={styles.textHeader}>Обратная связь</Text>
        </View>
        <View>
          
        </View>
      </View>
      <TouchableOpacity style={styles.switch} onPress={() => setFirstButtonDisabled(!firstButtonDisabled)}>
					<View style={switchStyle1}>
						<Text>Магазин</Text>
					</View>
					<View style={switchStyle2}>
						<Text>Ресторан</Text>
					</View>
			</TouchableOpacity>
    </View>
  )
}

export const MarketnCart = () => {

  return (
    <MarketStack.Navigator screenOptions={{headerShown: false}}>
      <MarketStack.Screen name='market' component={Market} />
      <MarketStack.Screen name='cart' component={Cart} />
    </MarketStack.Navigator>
  )
}

const styles = StyleSheet.create({
  switch: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginTop: '30%',
  },
	switchActive: {
		backgroundColor: '#EA2A2A',
    paddingHorizontal: 60,
    paddingVertical: 8
	},
	switchNotActive: {
		backgroundColor: '#fff',
    paddingHorizontal: 60,
    paddingVertical: 8
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
  }
})