import { Image, ImageSourcePropType, Pressable, StyleSheet,Text,TouchableOpacity,View } from 'react-native'
import React, { PropsWithChildren, useState } from 'react'
import ReactNativeHapticFeedback from "react-native-haptic-feedback";
import DiceOne from '../assets/one.png'
import Dicetwo from '../assets/two.png'
import DiceThree from '../assets/three.png'
import DiceFour from '../assets/four.png'
import DiceFive from '../assets/five.png'
import DiceSix from '../assets/six.png'

//heptic feedback
const options = {
  enableVibrateFallback: true,
  ignoreAndroidSystemSettings: false,
};

// we are restricting the type of  imageUrl just in case  the provided url is image url not some text,html based url
type imageUrlProps = PropsWithChildren<{
  imageUrl : ImageSourcePropType
}> 

const Dice = ({imageUrl}:imageUrlProps):JSX.Element => {
 return (
  <View>
    <Image style={styles.diceImage} source={imageUrl}/>
  </View>
 )
}

const App = () => {

  const [diceImage, setDiceImage] = useState<ImageSourcePropType>(DiceFive)
  const rollDiceOnTap = () => {
    const randomNumber = Math.floor(Math.random() * 6) 
    switch (randomNumber) {
      case 1:
        setDiceImage(DiceOne)
        break;
      case 2:
        setDiceImage(Dicetwo)
        break;
      case 3:
        setDiceImage(DiceThree)
        break;
      case 4:
        setDiceImage(DiceFour)
        break;
      case 5:
        setDiceImage(DiceFive)
        break;
      case 6:
        setDiceImage(DiceSix)
        break;
    
      default:
        setDiceImage(DiceOne)
        break;
    }
    ReactNativeHapticFeedback.trigger("impactLight", options);
  }

  return (
    <View style={styles.container}>
        <Dice imageUrl={diceImage}/>
        <TouchableOpacity onPress={()=>rollDiceOnTap()}>
          <Text style={styles.rollDiceBtnText}>Roll the Dice</Text>
        </TouchableOpacity>
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
    marginTop:10,
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