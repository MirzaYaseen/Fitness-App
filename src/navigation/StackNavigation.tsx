import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {
  Text,
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import WorkOut from '../screens/WorkOut';
import Day1 from '../screens/Day1';
import BottomTab from '../screens/BottomTab';
import PostExercise from '../screens/PostExercise';
import Notifications from '../screens/Notifications';
import Settings from '../screens/Settings';
import Triangle from '../screens/Triangle';

const Stack = createStackNavigator();

const StackNavigation = () => (
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen
        name="Bottom"
        component={BottomTab}
        options={{
          title: 'Mental Health',
          headerStyle: {
            backgroundColor: '#5E3B63',
            height: 70,
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
            marginTop: 25,
          },
          headerLeft: () => (
            <TouchableOpacity>
              <Image
                source={require('../assets/back_arrow.png')}
                style={{marginLeft: 15, width: 18, height: 15, marginTop: 28}}
              />
            </TouchableOpacity>
          ),
        }}
      />
      <Stack.Screen
        name="WorkOut"
        component={WorkOut}
        options={{
          title: 'Workout',
          headerStyle: {
            backgroundColor: '#5E3B63',
            height: 70,
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
            marginTop: 25,
          },
          headerLeft: () => (
            <TouchableOpacity>
              <Image
                source={require('../assets/back_arrow.png')}
                style={{marginLeft: 15, width: 18, height: 15, marginTop: 28}}
              />
            </TouchableOpacity>
          ),
        }}
      />
      <Stack.Screen
        name="Day1"
        component={Day1}
        options={{
          title: 'Workout (Day 1)',
          headerStyle: {
            backgroundColor: '#5E3B63',
            height: 70,
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
            marginTop: 25,
          },
          headerLeft: () => (
            <TouchableOpacity>
              <Image
                source={require('../assets/back_arrow.png')}
                style={{marginLeft: 15, width: 18, height: 15, marginTop: 28}}
              />
            </TouchableOpacity>
          ),
        }}
      />

      <Stack.Screen
        name="Post"
        component={PostExercise}
        options={{
          title: 'Add Excercise',
          headerStyle: {
            backgroundColor: '#5E3B63',
            height: 70,
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
            marginTop: 25,
          },
          headerLeft: () => (
            <TouchableOpacity>
              <Image
                source={require('../assets/back_arrow.png')}
                style={{marginLeft: 15, width: 18, height: 15, marginTop: 28}}
              />
            </TouchableOpacity>
          ),
        }}
      />

      <Stack.Screen
        name="Notification"
        component={Notifications}
        options={{
          title: 'Notifications',
          headerStyle: {
            backgroundColor: '#5E3B63',
            height: 70,
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
            marginTop: 25,
          },
          headerLeft: () => (
            <TouchableOpacity>
              <Image
                source={require('../assets/back_arrow.png')}
                style={{marginLeft: 15, width: 18, height: 15, marginTop: 28}}
              />
            </TouchableOpacity>
          ),
        }}
      />
      <Stack.Screen
        name="Settings"
        component={Settings}
        options={{
          title: 'Settings',
          headerStyle: {
            backgroundColor: '#5E3B63',
            height: 70,
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
            marginTop: 25,
          },
          headerLeft: () => (
            <TouchableOpacity>
              <Image
                source={require('../assets/back_arrow.png')}
                style={{marginLeft: 15, width: 18, height: 15, marginTop: 28}}
              />
            </TouchableOpacity>
          ),
        }}
      />
      <Stack.Screen
        name="Triangle"
        component={Triangle}
        options={{
          title: 'Excercises',
          headerStyle: {
            backgroundColor: '#5E3B63',
            height: 70,
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
            marginTop: 25,
          },
          headerLeft: () => (
            <TouchableOpacity>
              <Image
                source={require('../assets/back_arrow.png')}
                style={{marginLeft: 15, width: 18, height: 15, marginTop: 28}}
              />
            </TouchableOpacity>
          ),
        }}
      />
    </Stack.Navigator>
  </NavigationContainer>
);

export default StackNavigation;
