import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Colors } from 'react-native/Libraries/NewAppScreen'

export default function ElevatedCards() {
  return (
    <View>
        <Text style={styles.headingText}>Elevated Cards</Text>
        <ScrollView horizontal={true}  style={styles.container}>
            <View style={[styles.card, styles.cardElevated]}><Text>Tap</Text></View>
            <View style={[styles.card, styles.cardElevated]}><Text>Me</Text></View>
            <View style={[styles.card, styles.cardElevated]}><Text>To</Text></View>
            <View style={[styles.card, styles.cardElevated]}><Text>Scroll</Text></View>
            <View style={[styles.card, styles.cardElevated]}><Text>More...</Text></View>
            <View style={[styles.card, styles.cardElevated]}><Text>and...</Text></View>
            <View style={[styles.card, styles.cardElevated]}><Text>see...</Text></View>
            <View style={[styles.card, styles.cardElevated]}><Text>What is ...</Text></View>
            <View style={[styles.card, styles.cardElevated]}><Text>ScrollView...</Text></View>
        </ScrollView>
   </View>
  )
}

const styles = StyleSheet.create({
    headingText:{
        fontSize:24,
        paddingHorizontal:14
    },
    container:{
        padding:8
    },
    card:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
       width:100,
       height:100,
       borderRadius:8,
       color:'black',
       margin:8
    },
    cardElevated:{
        backgroundColor:'green',
        elevation:4,
        shadowOffset:{
            width:10,
            height:10
        },
        shadowColor:'white',
        shadowOpacity:0.4,
    },
})