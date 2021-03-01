import React , { useState , useContext } from 'react'
import { View, Text , StatusBar , StyleSheet , Image , TextInput  , TouchableOpacity, Button} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FormInput from '../components/FormInput';
import FormButton from '../components/FormButton';
import { AuthContext } from '../navigation/AuthProvider'

export default function LoginScreen({navigation}) {
    const [email,setEmail] = useState();
    const [password,setPassword] = useState();

    const { login } = useContext(AuthContext);

    return (
        <>
        <StatusBar translucent backgroundColor='transparent' barStyle='dark-content' />
        <View style={styles.container}>
            <Text style={styles.text}>RN Social App</Text>

            <FormInput 
                labelValue={email}
                onChangeText={(userEmail)=>setEmail(userEmail)}
                placeholderText="Email"
                iconType='user'
                keyboardType='email-address'
                autoCapitalize='none'
                autoComplete={false}
            />

            <FormInput 
                labelValue={password}
                onChangeText={(userPassword)=>setPassword(userPassword)}
                placeholderText="Password"
                iconType='lock'
                secureTextEntry={true}
            />

            <FormButton
                buttonTitle='Sign In'
                onPress={()=>login(email,password)} 
            />

            <TouchableOpacity style={styles.forgotButton} onPress={()=>{navigation.navigate('signup')}}>
                <Text style={styles.navButtonText}>Sign Up As Student</Text>                
            </TouchableOpacity>

            <TouchableOpacity style={styles.forgotButton} onPress={()=>{navigation.navigate('signupcompany')}}>
                <Text style={styles.navButtonText}>Sign Up As Company</Text>                
            </TouchableOpacity>

        </View>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
      justifyContent: 'center',
      alignItems: 'center',
      flex:1,
      padding: 20,
      paddingTop: 50
    },
    logo: {
      height: 150,
      width: 150,
      resizeMode: 'cover',
    },
    text: {
      fontFamily: 'Kufam-SemiBoldItalic',
      fontSize: 28,
      marginBottom: 10,
      color: '#051d5f',
    },
    navButton: {
      marginTop: 15,
    },
    forgotButton: {
      marginVertical: 35,
    },
    navButtonText: {
      fontSize: 18,
      fontWeight: '500',
      color: '#2e64e5',
      fontFamily: 'Lato-Regular',
    },
  });