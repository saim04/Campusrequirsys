import React from 'react'
import { View } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';


const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const FeedStack = ({navigation}) => (
    <Stack.Navigator>
      <Stack.Screen
        name="Campus Recruitment System"
        component={HomeScreen}
        options={{
          headerTitleAlign: 'center',
          headerTitleStyle: {
            color: '#2e64e5',
            fontFamily: 'Kufam-SemiBoldItalic',
            fontSize:18
          },
          headerStyle: {
            shadowColor: '#fff',
            elevation: 0,
          },
          
        }}
      />
      
    </Stack.Navigator>
  );
  
  const AppStack = () => {
    return (
      <Tab.Navigator
        tabBarOptions={{
          activeTintColor: '#2e64e5',
        }}>
        <Tab.Screen
          name="Home"
          component={FeedStack}
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({color, size}) => (
              <MaterialCommunityIcons
                name="home-outline"
                color={color}
                size={size}
              />
            ),
          }}
        />
        
        <Tab.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
            // tabBarLabel: 'Home',
            tabBarIcon: ({color, size}) => (
              <Ionicons name="person-outline" color={color} size={size} />
            ),
          }}
        />
      </Tab.Navigator>
    );
  }
  
  export default AppStack;