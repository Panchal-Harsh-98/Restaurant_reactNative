import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SearchScreen from './src/controllers/SearchScreen.js';

const navigator = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <navigator.Navigator initialRouteName="Search" navigationOptions={headerVisible = false}  >
        <navigator.Screen name="Search" component={SearchScreen} />
      </navigator.Navigator>
    </NavigationContainer>
  )
}


export default App;