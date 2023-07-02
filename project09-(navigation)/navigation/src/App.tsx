import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {StyleSheet} from 'react-native';
import Home from './screens/Home';
import Details from './screens/Details';

//  "param list" is a TypeScript type that defines the available screen names and their respective parameters in a navigation stack
export type RootStackParamList = {
  Home: undefined;                                                          //no parameters is required
  Details:{productId:string}  | undefined;                //parameters is optional
};
// we a have multiple type fo navigator such as Stack, Drawer  we are explicitly mentioning that I want to use the stack Navigator but as I'll move on to different screen these screen may expect some data to be passed on to him.These data what type of data that they can expect ? that's why  we have created this RootStackParamList
const Stack = createNativeStackNavigator<RootStackParamList>()

function App(): JSX.Element {
  
  return (
    <NavigationContainer >
       {/* The navigator packages  export a generic types to each of its children to define types for both the navigation and route props from the corresponding navigator*/}
       <Stack.Navigator initialRouteName='Home'>
            <Stack.Screen name='Details' component={Details} options={{title:"Product detail"}}/>
            <Stack.Screen name='Home' component={Home} options={{title:"Trending products"}}/>
       </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({

});

export default App;
