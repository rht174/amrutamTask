import {View, Text, Image} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  BulletinScreen,
  ConsultScreen,
  HomeScreen,
  OrderScreen,
  StoreScreen,
} from '../screens';
import Icons from '../constants/Icons';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  const tabOptions = (icon, name) => ({
    headerShown: false,
    tabBarIcon: ({focused}) => {
      return (
        <View style={{alignItems: 'center', justifyContent: 'center'}}>
          <Image
            source={icon}
            style={{
              width: 20,
              height: 20,
              tintColor: focused ? 'green' : 'grey',
            }}
          />
          <Text style={{color: focused ? 'green' : 'grey', fontSize: 12}}>
            {name}
          </Text>
          <View
            style={{
              borderBottomWidth: 3,
              borderBottomColor: focused ? 'green' : 'grey',
              height: 7,
              width: 30,
            }}
          />
        </View>
      );
    },
  });

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          //   position: 'absolute',
          //   bottom: 15,
          //   left: 15,
          //   right: 15,
          elevation: 5,
          backgroundColor: '#ffffff',
          //   borderRadius: 15,
          height: 65,
          //   shadowColor: '#233f1c',
          shadowOffset: {
            width: 0,
            height: 5,
          },
          shadowOpacity: 0.2,
          shadowRadius: 2.5,
        },
        tabBarShowLabel: false,
        tabBarHideOnKeyboard: true,
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={tabOptions(Icons.home, 'Home')}
      />
      <Tab.Screen
        name="Store"
        component={StoreScreen}
        options={tabOptions(Icons.store, 'Store')}
      />
      <Tab.Screen
        name="Orders"
        component={OrderScreen}
        options={tabOptions(Icons.order, 'Orders')}
      />
      <Tab.Screen
        name="Consult"
        component={ConsultScreen}
        options={tabOptions(Icons.consult, 'Consult')}
      />
      <Tab.Screen
        name="Bulletin"
        component={BulletinScreen}
        options={tabOptions(Icons.bulletin, 'Bulletin')}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
