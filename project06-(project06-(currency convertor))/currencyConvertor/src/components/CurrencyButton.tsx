import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
//PropsWithChildren- actually stops you from passing anything which looks like a string but actually a particular data type that is being passed you can always avoid this but in case you want a hundred percent surety that whatever the data you are passing in this component that should be of some particular type
 import type { PropsWithChildren } from 'react'

 type CurrencyButtonProps = PropsWithChildren<{
  name: string,
  flag: string,
 }>

const CurrencyButton = ({flag,name}: CurrencyButtonProps):JSX.Element=> {
  return (
    <View style={styles.buttonContainer}>
      <Text style={styles.flag}>{flag}</Text>
      <Text style={styles.country}>{name}</Text>
    </View>
  )
}

export default CurrencyButton

const styles = StyleSheet.create({
  buttonContainer:{
    alignItems: 'center',
    
  },
  flag:{
    fontSize:28,
    color:'#ffffff',
    marginBottom:2
  },
  country:{
    fontSize:14,
    color:'#2d3436',
    marginBottom:4,
    
  }
})