import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { bootstrap } from './Bootstrap';
import AppLoading from 'expo-app-loading';
import { Text, View } from 'react-native';
import { Navigation } from './router'

export default function App() {

  const [isReady, setIsReady] = useState(false)

  if (!isReady) {
    return(
      <AppLoading
        startAsync={bootstrap}
        onFinish={() => setIsReady(true)}
        onError={(err => console.log(err))}
      />
    )
  }
  
  return (
    <Navigation />
  );
}
