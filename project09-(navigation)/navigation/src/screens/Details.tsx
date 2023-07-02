import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { RootStackParamList } from '../App'
import { NativeStackScreenProps } from '@react-navigation/native-stack'

import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack/lib/typescript/src/types'


type DetailsProps = NativeStackScreenProps<RootStackParamList,'Details'>

const Details = ({navigation,route}:DetailsProps) => {
  const {productId}  = route.params
  return (
    <View style={styles.container}>
      {/* <Text style={styles.smallText}>heeeello</Text> */}
      <Text style={styles.smallText}>Details:{productId}</Text>
      <Button title='Go to Home' onPress={()=>navigation.navigate('Home')}/>
      {/* <Button title='Go to 1 screen back' onPress={()=>navigation.goBack()}/> */}
      {/* <Button title='Go to 2 screen back' onPress={()=>navigation.pop(2)}/> */}
      {/* <Button title='Go to intial page screen back' onPress={()=>navigation.popToTop()}/> */}
    </View>
  )
}

export default Details

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      },
      smallText:{
          color: 'black',
      }
})