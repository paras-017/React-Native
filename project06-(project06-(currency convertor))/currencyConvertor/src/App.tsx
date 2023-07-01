import { FlatList, Pressable, SafeAreaView, StyleSheet, Text, TextInput, View } from 'react-native'
import Snackbar from 'react-native-snackbar';
import {currencyByRupee} from './constants'               //constants
import React, { useState } from 'react'
import CurrencyButton from './components/CurrencyButton';


const App = ():JSX.Element => {
const [inputValue, setInputValue] = useState('')
const [resultValue, setResultValue] = useState('')
const [targetCurrency, setTargetCurrency] = useState('')

const buttonPressed = (targetValue:Currency) =>{
  if(!inputValue){
    return Snackbar.show({
      text: 'Please enter a value',
      backgroundColor: '#EA7773',
      textColor: '#000000',
      duration: Snackbar.LENGTH_SHORT
    })
  }
  const inputAmount = parseFloat(inputValue)
  if(!isNaN(inputAmount)){
    const convertedValue = inputAmount *  targetValue.value
    const result = `${targetValue.symbol} ${convertedValue.toFixed(2)}`
    setResultValue(result)
    setTargetCurrency(targetValue.name)
  }else{
    return Snackbar.show({
      text: 'Not a valid number to convert',
      backgroundColor: '#f4be2c',
      textColor: '#000000',
      duration: Snackbar.LENGTH_SHORT
    })
  }
}
 
  return (
    <>
      <View style={styles.container}>
        <View style={styles.topContainer}>
          <View style={styles.rupeesContainer}>
            <Text style={styles.rupee}>₹</Text>
            <TextInput maxLength={14} value={inputValue} clearButtonMode='always' onChangeText={setInputValue} keyboardType='number-pad' placeholder='Enter amount in Rupee'/>
          </View>
          {resultValue && (<Text style={styles.resultTxt}>{resultValue}</Text>)}
        </View>
        <View style={styles.bottomContainer}>
          <FlatList numColumns={3} data={currencyByRupee} keyExtractor={(item)=>item.name} renderItem={({item})=>(
            <Pressable style={[styles.button, targetCurrency === item.name && styles.selected]} onPress={()=> buttonPressed(item)}>
             <CurrencyButton {...item}/>
            </Pressable>
          )}/>
        </View>
      </View>
    </>
  )
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#515151',
  },
  topContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  resultTxt: {
    fontSize: 32,
    color: '#000000',
    fontWeight: '800',
  },
  rupee: {
    marginRight: 8,

    fontSize: 22,
    color: '#000000',
    fontWeight: '800',
  },
  rupeesContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  inputAmountField: {
    height: 40,
    width: 200,
    padding: 8,
    borderWidth: 1,
    borderRadius: 4,
    backgroundColor: '#FFFFFF',
  },
  bottomContainer: {
    flex: 3,
  },
  button: {
    flex: 1,

    margin: 12,
    height: 60,

    borderRadius: 12,
    backgroundColor: '#fff',
    elevation: 2,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowColor: '#333',
    shadowOpacity: 0.1,
    shadowRadius: 1,
  },
  selected: {
    backgroundColor: '#ffeaa7',
  },
});