import {View, Text, Image} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
  BulletinScreen,
  ConsultScreen,
  HomeScreen,
  OrderScreen,
  StoreScreen,
} from './src/screens';
import Icons from './src/constants/Icons';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function TabNavigator() {
  const tabOptions = icon => ({
    headerShown: false,
    tabBarIcon: () => (
      <Image
        source={Icons.home}
        style={{width: 25, height: 25, tintColor: 'red'}}
      />
    ),
  });
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          position: 'absolute',
          bottom: 25,
          left: 20,
          right: 20,
          elevation: 5,
          backgroundColor: '#ffffff',
          borderRadius: 15,
          height: 70,
          shadowColor: '#7F5DF0',
          shadowOffset: {
            width: 0,
            height: 10,
          },
          shadowOpacity: 0.25,
          shadowRadius: 3.5,
        },
        tabBarShowLabel: false,
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={tabOptions('home')}
      />
      <Tab.Screen
        name="Store"
        component={StoreScreen}
        options={tabOptions('bag-shopping')}
      />
      <Tab.Screen
        name="Orders"
        component={OrderScreen}
        options={tabOptions('rectangle-list')}
      />
      <Tab.Screen
        name="Consult"
        component={ConsultScreen}
        options={tabOptions()}
      />
      <Tab.Screen
        name="Bulletin"
        component={BulletinScreen}
        options={tabOptions()}
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
