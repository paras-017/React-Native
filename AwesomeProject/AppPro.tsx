import React from "react";
import { SafeAreaView, StyleSheet, Text, View, useColorScheme } from "react-native"
import { Colors } from "react-native/Libraries/NewAppScreen";

const AppPro = ():JSX.Element => {
    const isDarkMode = useColorScheme() === 'dark'
     
    return (
            <View style={styles.container}>
                <Text style = {isDarkMode?styles.whiteText:styles.darkText}>Hello There from App Pro</Text>
            </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        
    },
    whiteText:{
        color:'white'
    },
    darkText:{
        color:'black'
    }
})

export default AppPro