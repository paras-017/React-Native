import { Image, ImageSourcePropType, StyleSheet,Text,View } from 'react-native'
import React, { PropsWithChildren, useState } from 'react'
import DiceOne from '../assets/one.png'
import Dicetwo from '../assets/two.png'
import DiceThree from '../assets/three.png'
import DiceFour from '../assets/four.png'
import DiceFive from '../assets/five.png'
import DiceSix from '../assets/six.png'

// we are restricting the type of  imageUrl just in case  the provided url is image url not some text,html based url
type DicePorps = PropsWithChildren<{
  imageUrl : ImageSourcePropType
}> 

const dice = ({imageUrl}:DicePorps):JSX.Element => {
 return (
  <View>
    <Image style={styles.diceImage} source={imageUrl}/>
  </View>
 )
}

const App = () => {

  return (
    <View>
        <Text>Hello</Text>
    </View>
  )
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFF2F2',
  },
  diceContainer: {
    margin: 12,
  },
  diceImage: {
    width: 200,
    height: 200,
  },
  rollDiceBtnText: {
    paddingVertical: 10,
    paddingHorizontal: 40,
    borderWidth: 2,
    borderRadius: 8,
    borderColor: '#E5E0FF',
    fontSize: 16,
    color: '#8EA7E9',
    fontWeight: '700',
    textTransform: 'uppercase',
  },
})