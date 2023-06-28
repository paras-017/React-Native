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
  
})