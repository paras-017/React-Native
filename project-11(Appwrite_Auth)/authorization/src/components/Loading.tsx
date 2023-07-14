import { ActivityIndicatorBase, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Loading = () => {
  return (
    <View style={styles.container}>
        <ActivityIndicatorBase size='large' color='#1d9b40'/>
      <Text>Loading</Text>
    </View>
  )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})

export default Loading