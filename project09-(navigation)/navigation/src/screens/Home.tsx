import React from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { RootStackParamList } from '../App'

type HomeProps = NativeStackScreenProps<RootStackParamList, 'Home'>

const Home = ({navigation}:HomeProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.smallText}>Home Screen</Text>
      {/*Method-1 */}
      <Button title='Go to details' onPress={()=>navigation.navigate('Details',{productId:'12ER3'})}/>                

      {/*Method-2 */}
      {/* <Button title='Go to details' onPress={()=> navigation.navigate('Details')}/> */}

    {/*Method-3 */}
      {/* <Button title='Go to details' onPress={()=> navigation.push('Details')}/>*/}
    </View>
  )
}

export default Home

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