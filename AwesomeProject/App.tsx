import React from 'react'
import { SafeAreaView, ScrollView, Text } from 'react-native'
import FlatCards from './components/FlatCards'
import ElevatedCards from './components/ElevatedCards'

const App = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <FlatCards/>
        <ElevatedCards/>
      </ScrollView>
    </SafeAreaView>
  )
}

export default App