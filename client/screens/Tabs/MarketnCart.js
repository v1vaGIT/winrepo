import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image, FlatList } from 'react-native';
import { Cart } from "./Cart";
import { market_data } from "./market_data";

const MarketStack = createNativeStackNavigator()

const Market = ({ navigation }) => {
  const [firstButtonDisabled, setFirstButtonDisabled] = useState(true)

  const renderItem = ({ item }) => {
    return (
      <View style={styles.listItem}>
        <Text style={styles.productTitle}>{item.title}</Text>
        <View>
          <Text style={styles.price}>{item.price}</Text>
        </View>
        <View>
          
        </View>
    </View>
    )
  }

	const switchStyle1 = firstButtonDisabled ? styles.switchNotActive : styles.switchActive
	const switchStyle2 = !firstButtonDisabled ? styles.switchNotActive : styles.switchActive
  if (firstButtonDisabled) {
    return (
      <View style={{ flex: 1, alignItems: 'center'}}>
        <View style={styles.header}>
          <View style={styles.headerOne}>
            <Image source={require('../../assets/news/Logo.jpg')} style={styles.logoHeader}/>
          </View>
          <View style={styles.headerTwo}>
            <Text style={styles.textHeader}>Обратная связь</Text>
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
        <FlatList 
          style={styles.list}
          renderItem={renderItem}
          data={market_data}
          keyExtractor={x => x.id}
        />
      </View>
    )
    }
    else {
      return (
        <View style={{ flex: 1, alignItems: 'center'}}>
          <View style={styles.header}>
            <View style={styles.headerOne}>
              <Image source={require('../../assets/news/Logo.jpg')} style={styles.logoHeader}/>
            </View>
            <View style={styles.headerTwo}>
              <Text style={styles.textHeader}>Обратная связь</Text>
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
          <FlatList 
            style={styles.list}
            renderItem={renderItem}
            data={market_data}
            keyExtractor={x => x.id}
          />
        </View>
      )
    }
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
  price: {
    paddingVertical: 32,
    color: '#EA2A2A'
  },
  productTitle: {
    fontSize: 20,
  },
  listItem: {
    paddingVertical: 8,
    alignItems: 'flex-end'
  },
  list: {
    marginTop: 15,
    width: '80%',
  },
  photo: {
    width: 100,
    height: 100
  },
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