import { Text, StyleSheet, View } from 'react-native'
import React, { Component } from 'react'

export default class FlatCards extends Component {
  render() {
    return (
      <View>
        <Text style={styles.headingText}>Flat Cards</Text>
        <View style={styles.container}>
            <View style={[styles.card, styles.cardOne]}><Text>Red</Text></View>
            <View style={[styles.card, styles.cardTwo]}><Text>Green</Text></View>
            <View style={[styles.card, styles.cardThree]}><Text>Blue</Text></View>
            <View style={[styles.card, styles.cardFour]}><Text>Black</Text></View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
    headingText:{
        fontSize:24,
        paddingHorizontal:14
    },
    container:{
        display:'flex',
        flexDirection:'row'
    },
    card:{
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        width:100,
        height:100,
        borderRadius:5,
        margin:8
    },
    cardOne:{
        backgroundColor:'red'
    },
    cardTwo:{
        backgroundColor:'green'
    },
    cardThree:{
        backgroundColor:'blue'
    },
    cardFour:{
        backgroundColor:'black'
    }
})