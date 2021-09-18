import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image, FlatList } from 'react-native';
import { Cart } from "./Cart";
import { market_data } from "../../data/market_data";
import { restourant_data } from "../../data/restourant_data";

const MarketStack = createNativeStackNavigator()

const Market = ({ navigation }) => {
  const [firstButtonDisabled, setFirstButtonDisabled] = useState(true)

  const renderMarketItem = ({ item }) => {
    return (
      <View style={styles.listItem}>
        <View>
        <Image style={styles.photo} source={require('../../assets/market/003.jpg')} />
        </View>
        <View style={styles.info}>
          <Text style={styles.productTitle}>{item.title}</Text>
          <View style={styles.priceBadge}>
            <Text style={styles.price}>{item.price}</Text>
          </View>
        </View>
      </View>
    )
  }
  const renderRestourantItem = ({ item }) => {
    return (
      <View style={styles.listItem}>
        <View>
        <Image style={styles.photo} source={require('../../assets/restourant/котлета.jpg')} />
        </View>
        <View style={styles.info}>
          <Text style={styles.productTitle}>{item.title}</Text>
          <Text style={styles.ingr}>{item.ingridients}</Text>
          <View style={styles.priceBadge}>
            <Text style={styles.price}>{item.price}</Text>
          </View>
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
            <Text style={styles.textHeader}>Покупки</Text>
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
          renderItem={renderRestourantItem}
          data={restourant_data}
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
              <Text style={styles.textHeader}>Покупки</Text>
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
            renderItem={renderMarketItem}
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
  priceBadge: {
    backgroundColor: '#EA2A2A',
    borderRadius: 30
  },
  price: {
    color: '#fff',
    fontSize: 16,
    paddingVertical: 3,
    paddingHorizontal: 8,
  },
  ing: {

  },
  productTitle: {
    fontSize: 22,
  },
  info: {
    alignItems: 'flex-end',
    justifyContent: 'space-between'
  },
  listItem: {
    display: 'flex',
    flexDirection: 'row',
    paddingVertical: 8,
    justifyContent: 'space-between',
  },
  list: {
    marginTop: 15,
    width: '85%',
  },
  photo: {
    width: 100,
    height: 100,
    alignItems: 'flex-start'
  },
  switch: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginTop: '25%',
    backgroundColor: '#fff',
    borderRadius: 30
  },
	switchActive: {
		backgroundColor: '#EA2A2A',
    paddingHorizontal: 60,
    paddingVertical: 8,
    borderRadius: 30
	},
	switchNotActive: {
		backgroundColor: '#fff',
    paddingHorizontal: 60,
    paddingVertical: 8,
    borderRadius: 30
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