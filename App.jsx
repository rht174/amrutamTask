import {View, Text} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  BulletinScreen,
  ConsultScreen,
  HomeScreen,
  OrderScreen,
  StoreScreen,
} from './src/screens';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function TabNavigator() {
  const tabOptions = {headerShown: false};
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} options={tabOptions} />
      <Tab.Screen name="Store" component={StoreScreen} options={tabOptions} />
      <Tab.Screen name="Orders" component={OrderScreen} options={tabOptions} />
      <Tab.Screen
        name="Consult"
        component={ConsultScreen}
        options={tabOptions}
      />
      <Tab.Screen
        name="Bulletin"
        component={BulletinScreen}
        options={tabOptions}
      />
    </Tab.Navigator>
  );
}

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Main" component={TabNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
