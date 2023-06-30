import { SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'

const App = () => {
  const [randomBackground, setRandomBackground] = useState('#ffffff')
  const generateColor = () => {
    const hexRange = '0123456789ABCDEF'
    let color = '#'
    for (let i = 0; i < 6; i++) {
     color += hexRange[Math.floor(Math.random()*16)]      
    }
    setRandomBackground(color)
  }
  return (
    <>
    <StatusBar backgroundColor={randomBackground}/>
    <View style={[styles.container,{backgroundColor:randomBackground}]}>
      <TouchableOpacity style={styles.actionButton} onPress={generateColor}>
        <View><Text style={styles.actionButtonText}>Press Me</Text></View>
      </TouchableOpacity>
    </View>
    </>
  )
}

export default App

const styles = StyleSheet.create({
  container:{
    // backgroundColor:'red',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  actionButton:{
    borderRadius:12,
    backgroundColor:'#6a1b4d',
    paddingVertical:10,
    paddingHorizontal:40,
  },
  actionButtonText:{
    fontSize:24,
    color:'white',
  }
})