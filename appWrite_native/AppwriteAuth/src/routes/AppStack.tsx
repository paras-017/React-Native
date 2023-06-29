//Authorized User will come here
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Home from '../screens/Home'

export type AppStackParamList = {
    Home: undefined
} 

const AppStack = () => {
  return (
    <View>
      <Text>AppStack</Text>
    </View>
  )
}

export default AppStack

const styles = StyleSheet.create({})