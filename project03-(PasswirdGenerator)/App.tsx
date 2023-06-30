import { SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'

//Form Validation
import * as Yup from 'yup'
import { Form, Formik } from 'formik'
import BouncyCheckbox from 'react-native-bouncy-checkbox'

const PasswordSchema = Yup.object().shape({
  passwordLength: Yup.number().min(5,'Minimum length should be 5').max(20,'Maximum length should be 20').required('Length is required')
})

const App = () => {   
  const [password, setPassword] = useState('')
  const [isPassGenerated, setIsPassGenerated] = useState(false)
  const [lowerCase, setLowerCase] = useState(true)
  const [upperCase, setUpperCase] = useState(false)
  const [numbers, setNumbers] = useState(false)
  const [symbols, setSymbols] = useState(false)

  const generatePasswordString = (passwordLength:number) => {
     let characterList = ''
     const upperCaseChars ='ABCDEFGHIJKLMNOPQRSTUVWXYZ'
     const lowerCaseChars = 'abcdefghijklmnopqrstuvwxyz'
     const numbersChars = '0123456789'
     const symbolsChars = '!@#$%^&*'
     
     if(lowerCase) characterList += lowerCaseChars
     if(upperCase) characterList += upperCaseChars
     if(numbers) characterList += numbersChars
     if(symbols) characterList += symbolsChars
          
     const passwordResult = createPassword(characterList, passwordLength)
      setPassword(passwordResult)
      setIsPassGenerated(true)

  }
  const createPassword = (characters:string, passwordLength:number)=>{
    let result = ''
    for(let i =0; i<passwordLength; i++){
      const characterIndex = Math.round(Math.random() * characters.length)
      result += characters[characterIndex]
    }
    return result
  }
  const resetPassword = () => {
      setPassword('')
      setIsPassGenerated(false)
      setLowerCase(true)
      setUpperCase(false)
      setNumbers(false)
      setSymbols(false)
  }

  return (
    <ScrollView keyboardShouldPersistTaps='handled'>
      <SafeAreaView style={styles.appContainer}>
      <View style={styles.formContainer}>
        <Formik
            initialValues={{passwordLength: '' }}
            validationSchema = {PasswordSchema}
            onSubmit = {values=>{
              console.log(values);
              generatePasswordString(+values.passwordLength)  //TODO
         }}>
        {({values,errors,touched,isValid,handleChange,handleSubmit,handleReset})  => (
            <>
              <View style={styles.inputWrapper}>
                <View style={styles.inputColumn}>
                  <Text style={styles.heading}>Password Length</Text>
                    {touched.passwordLength && errors.passwordLength && (
                      <Text style={styles.errorText}>{errors.passwordLength}</Text>
                    )}
                </View>
                {/* handleChange takes string as an argument */}
                  <TextInput style={styles.inputStyle} value={values.passwordLength} onChangeText={handleChange('passwordLength')}   placeholder='Ex. 8' keyboardType='numeric'/>
              </View>
              <View style={styles.inputWrapper}>
                <Text style={styles.heading}>Include LowerCase</Text>
                <BouncyCheckbox disableBuiltInState isChecked={lowerCase} onPress={()=>setLowerCase(prev=>!prev)} fillColor='#29AB87'/>
              </View>
              <View style={styles.inputWrapper}>
                <Text style={styles.heading}>Include UpperCase</Text>
                <BouncyCheckbox disableBuiltInState isChecked={upperCase} onPress={()=>setUpperCase(prev=>!prev)} fillColor='#29AB87'/>
              </View>
              <View style={styles.inputWrapper}>
                <Text style={styles.heading}>Include Numbers</Text>
                <BouncyCheckbox disableBuiltInState isChecked={numbers} onPress={()=>setNumbers(prev=>!prev)} fillColor='#29AB87'/>
              </View>
              <View style={styles.inputWrapper}>
                <Text style={styles.heading}>Include Symbols</Text>
                <BouncyCheckbox disableBuiltInState isChecked={symbols} onPress={()=>setSymbols(prev=>!prev)} fillColor='#29AB87'/>
              </View>
    

              <View style={styles.formActions}>
{/*  Onpress is collecting all the data and sending to the handleSubmit and on handlesubmit  will acutally call onSubmit*/}
                <TouchableOpacity disabled={!isValid} style={styles.primaryBtn} onPress={()=>handleSubmit()}><Text style={styles.primaryBtnTxt}>Generate Password</Text></TouchableOpacity>
                <TouchableOpacity style={styles.primaryBtn} onPress={()=>{handleReset(); resetPassword()}}><Text style={styles.primaryBtnTxt}>Reset</Text></TouchableOpacity>
              </View>
            </>
        )}
        </Formik>
      </View>
      {isPassGenerated ? (
      <View style={[styles.card, styles.cardElevated]}>
        <Text style={styles.subTitle}>Result:</Text>
        <Text style={styles.description}>Long Press to copy</Text>
        <Text selectable style={styles.generatedPassword}>{password}</Text>
      </View>
        ):null}
        </SafeAreaView>
    </ScrollView>
  )
}

export default App

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
  },
  formContainer: {
    margin: 8,
    padding: 8,
  },
  title: {
    fontSize: 32,
    fontWeight: '600',
    marginBottom: 15,
  },
  subTitle: {
    fontSize: 26,
    fontWeight: '600',
    marginBottom: 2,
  },
  description: {
    color: '#758283',
    marginBottom: 8,
  },
  heading: {
    fontSize: 15,
  },
  inputWrapper: {
    marginBottom: 15,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  inputColumn: {
    flexDirection: 'column',
  },
  inputStyle: {
    padding: 8,
    width: '30%',
    borderWidth: 1,
    borderRadius: 4,
    borderColor: '#16213e',
  },
  errorText: {
    fontSize: 12,
    color: '#ff0d10',
  },
  formActions: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  primaryBtn: {
    width: 120,
    padding: 10,
    borderRadius: 8,
    marginHorizontal: 8,
    backgroundColor: '#5DA3FA',
  },
  primaryBtnTxt: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: '700',
  },
  secondaryBtn: {
    width: 120,
    padding: 10,
    borderRadius: 8,
    marginHorizontal: 8,
    backgroundColor: '#CAD5E2',
  },
  secondaryBtnTxt: {
    textAlign: 'center',
  },
  card: {
    padding: 12,
    borderRadius: 6,
    marginHorizontal: 12,
  },
  cardElevated: {
    backgroundColor: '#ffffff',
    elevation: 1,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowColor: '#333',
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  generatedPassword: {
    fontSize: 22,
    textAlign: 'center',
    marginBottom: 12,
    color:'#000'
  },
})