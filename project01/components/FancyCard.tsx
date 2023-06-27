import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function FancyCard() {
  return (
    <View>
      <Text style={styles.headingText}>Trending Places</Text>
      <View style={[styles.card, styles.cardElevated]}>
        <Image source={{uri:'https://images.unsplash.com/photo-1552308995-2baac1ad5490?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80'}} style={styles.cardImage}/>
        <View style={styles.cardBody}>
            <Text style={styles.cardTitle}>My Desktop</Text>
            <Text style={styles.cardLabel}>Custom PC table with German Technology of V12 powerfull CPU</Text>
            <Text style={styles.cardDescription}>The Smart Desktop table is a database table that stores information about advanced desktop computers equipped with the latest technology and smart features. This table is specifically designed to capture details related to cutting-edge d</Text>
            <Text style={styles.cardFooter}>buy at Amazon</Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    headingText: {
      fontSize:24,
      textAlign: 'center',      
      marginBottom:15
    },
    card:{
        borderRadius:10,
        padding:10,

    },
    cardElevated:{
        // backgroundColor:'#FFFFFF',
        elevation:3,
        shadowOffset:{
            height:1,
            width:1
        }
    },
    cardImage:{
        height:200,
        // marginBottom:8,
    },
    cardBody:{
         gap:5
    },
    cardTitle:{
        marginTop:10,
        fontSize:25,
        fontWeight:'500',

    },
    cardLabel:{
        fontSize:20,
    },
    cardDescription:{
        marginTop:10,
        fontSize:17,
        textAlign:'justify'
    },
    cardFooter:{
        color:'violet',
    }
})