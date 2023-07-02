import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
// Navigation
import { NavigationContainer } from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
//screen
import Home from './screens/Home'
import Details from './screens/Details'

export type RootStackParamList = {
  Home:undefined,
  Details:{product:Product}
}
//here we are creating our stack navigator in which we're deciding what screen will get what type of data
const Stack = createNativeStackNavigator<RootStackParamList>()

const App = () => {
  return (
    // NavigationContainer is a component that serves as the entry point for navigation in a RN application. It is responsible for managing the navigation tree and providing the navigation functionality to the rest of the application.
   <NavigationContainer>
    <Stack.Navigator initialRouteName='Home'>
          <Stack.Screen name="Home" component={Home} options={{title:'Trending Products'}}/>
          <Stack.Screen name="Details" component={Details} options={{title:'Produts Details'}} />
    </Stack.Navigator>
   </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({})