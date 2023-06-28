import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'

//Form Validation
import * as Yup from 'yup'

const PasswordSchema = Yup.object().shape({
  passwordLength: Yup.number().min(5,'Minimum should be 5').max(20,'Maximum should be 5').required('Length is required')
})

const App = () => {
  const [password, setPassword] = useState('')
  const [isPassGenerated, setIsPassGenerated] = useState(false)
  const [lowerCase, setLowerCase] = useState(true)
  const [upperCase, setUpperCase] = useState(false)
  const [numbers, setNumbers] = useState(false)
  const [symbols, setsymbols] = useState(false)

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
      setsymbols(false)
  }

  return (
    <View>
      <Text>Hello there</Text>
    </View>
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