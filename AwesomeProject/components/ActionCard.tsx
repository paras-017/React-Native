import { Image, Linking, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

export default function ActionCard() {
    function openWebsite(websiteLink:string){
        Linking.openURL(websiteLink)
    }
  return (
    <View>
      <Text style={styles.headingText}>Blog Card</Text>
      <View style={[styles.card, styles.elevatedCard]}>
          <Image source={{uri:'https://miro.medium.com/v2/resize:fit:1400/1*3EivatZx8_5mx5J3zvqyhA.png'}} style={styles.cardImage}/>
          <View style={styles.headingContainer}>
               <Text style={styles.headerText}>What's new in Next 13.4</Text>
          </View>
          <View style={styles.bodyContainer}>
                <Text numberOfLines={3} style={styles.text}>
                    The App Router represents a new foundation for the future of Next.js, but we recognize there are opportunities to make  the experience better. We'd like to give an update on what our current priorities are.For the upcoming releases of Next.js, we are focusing on the following areas:
                </Text>
          </View>
          <View style={styles.FooterContainer}>
                <TouchableOpacity onPress={()=>openWebsite('https://nextjs.org/blog/june-2023-update')}>
                    <Text style={styles.link}>Read More</Text>
                </TouchableOpacity>
          </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    headingText: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        margin: 10,
    },
    card:{
       width: 366,
       height: 360,
       borderRadius:6,
       marginHorizontal:12
    },
    elevatedCard: {
        backgroundColor:'#8d47f5',
        elevation:3,
        padding:4,
        shadowOffset:{
            width:1,
            height:1,
        },
        shadowColor:'#333',
        marginBottom:10
    },
    headingContainer: {
        height: 40,
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center'
    },
    headerText: {
        fontSize:20,
    },
    cardImage: {
        height:200
    },
    bodyContainer: {
    },
    text:{
        fontSize:17
    },
    FooterContainer: {
        marginTop:10,
    },
    link: {
        fontSize:17,
        width:123,
        color:'#000000',
        backgroundColor:'#FFF',
        paddingHorizontal:20,
        paddingVertical:6,
        borderRadius:6,
    },
})