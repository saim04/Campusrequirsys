import React , { useState , useEffect } from 'react';
import {View, StatusBar} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import OnboardingScreen from '../screens/OnboardingScreen';
import SignupScreen from '../screens/SignupScreen';
import LoginScreen from '../screens/LoginScreen';
import AsyncStorage from '@react-native-community/async-storage';
import { ScreenStackHeaderLeftView } from 'react-native-screens';
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import SignUpcompany from '../screens/SignUpcompany.js'
const Stack = createStackNavigator();

export default function AuthStack({navigation}) {
  
  const [isFirstLaunched,setIsFirstLaunched] = useState(null);
  let routeName;

  useEffect(() => {
    AsyncStorage.getItem('alreadyLaunched').then(value =>{
      if(value===null){
        AsyncStorage.setItem('alreadyLaunched','true')
        setIsFirstLaunched(true)
      }else{
        setIsFirstLaunched(false)
      }
    })
  }, [])
  if(isFirstLaunched===null){
    return null;
  }else if(isFirstLaunched===true){
      routeName = 'onboarding'
  }else{
    routeName ='login'
  }
  return(
    (
      <>
        <StatusBar translucent backgroundColor='transparent' barStyle="dark-content" />
          <Stack.Navigator headerMode='none' initialRouteName={routeName}>
            <Stack.Screen name='onboarding' component={OnboardingScreen} options={{header:()=> null}} />
            <Stack.Screen name='login' component={LoginScreen} options={{header:()=> null}} />
            <Stack.Screen
                name="signup"
                component={SignupScreen}
                options={({navigation}) => ({
                  title: '',
                  headerStyle: {
                    backgroundColor: '#f9fafd',
                    shadowColor: '#f9fafd',
                    elevation: 0,
                  },
                  headerLeft: () => (
                    <View style={{marginLeft: 10}}>
                      <FontAwesome.Button 
                        name="long-arrow-left"
                        size={25}
                        backgroundColor="#f9fafd"
                        color="#333"
                        onPress={() => navigation.navigate('Login')}
                      />
                    </View>
                  ),
                })}
              />
              <Stack.Screen
                name="signupcompany"
                component={SignUpcompany}
                options={({navigation}) => ({
                  title: '',
                  headerStyle: {
                    backgroundColor: '#f9fafd',
                    shadowColor: '#f9fafd',
                    elevation: 0,
                  },
                  headerLeft: () => (
                    <View style={{marginLeft: 10}}>
                      <FontAwesome.Button 
                        name="long-arrow-left"
                        size={25}
                        backgroundColor="#f9fafd"
                        color="#333"
                        onPress={() => navigation.navigate('Login')}
                      />
                    </View>
                  ),
                })}
              />
          </Stack.Navigator>
      </>
    )
  )
};
