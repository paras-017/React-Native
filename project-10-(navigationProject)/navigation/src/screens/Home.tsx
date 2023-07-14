import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'

// we need to import NativeStackScreenProps because we need to extract some props as well and we need to send some prop inthe navigation as well
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { RootStackParamList } from '../App'

//importing Components
import ProductItem from '../components/ProductItem'
import Separator from '../components/Separator'

//Data
import { PRODUCTS_LIST } from '../data/constants'

//Again, In order to use props in Home we need to define its type else it will throw an error of type:ANY .but for now we;re not using any props in Home its just for future proof
type HomeProps = NativeStackScreenProps<RootStackParamList,'Home'>

const Home = ({navigation}:HomeProps) => {
  return (
    <View style={styles.container}>
      <FlatList data={PRODUCTS_LIST} keyExtractor={item=> item.id} ItemSeparatorComponent={Separator} renderItem={({item})=>(
        <Pressable onPress={()=>{
          navigation.navigate('Details', {product:item})
        }}><ProductItem product={item}/></Pressable>
      )}/>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'center',

    padding: 12,
    backgroundColor: '#FFFFFF',
  },
});