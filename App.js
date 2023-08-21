import { StatusBar } from 'expo-status-bar';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './screen/home';
import Detail from './screen/detail';

const Stack=createStackNavigator()

export default function App() {
  return (
    < >
     
      <StatusBar style="auto" />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name='Selected Dishes' component={Home} />
          <Stack.Screen name='detail' options={{headerShown:false}} component={Detail} />
        </Stack.Navigator>
      </NavigationContainer>

    </>
  );
}



