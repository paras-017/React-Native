import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

//Form Validation
import * as Yup from 'yup'

const PasswordSchema = Yup.object().shape({
  passwordLength: Yup.number().min(5,'Minimum length should be 5').max(20,'Maximum length should be 5').required('Length is required')
})


const App = () => {
  return (
    <View>
      <Text>Hello there</Text>
    </View>
  )
}

export default App

const styles = StyleSheet.create({})