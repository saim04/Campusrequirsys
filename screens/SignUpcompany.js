import React , { useState , useContext } from 'react'
import { View, Text , StatusBar , StyleSheet , Image , TextInput , ScrollView  , TouchableOpacity, Button} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FormInput from '../components/FormInput';
import FormButton from '../components/FormButton';
import { AuthContext } from '../navigation/AuthProvider';

export default function SignUpcompany({navigation}) {
    const [email,setEmail] = useState();
    const [password,setPassword] = useState();
    const [location,setLocation] = useState();
    const [fullName,setFullName] = useState();
    const [vacancy,setVacancy] = useState();
    const [required,setRequired] = useState();
    const [timing,setTiming] = useState();
    const [phoneNumber,setPhoneNumber] = useState();

    const { register } = useContext(AuthContext);
    const type = 'company'
    return (
        <>
        <StatusBar translucent backgroundColor='transparent' barStyle='dark-content' />
        <ScrollView>
        <View style={styles.container}>
            <Text style={styles.text}>Create an Account</Text>

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
            <FormInput 
                labelValue={fullName}
                onChangeText={(userPassword)=>setFullName(userPassword)}
                placeholderText="Company Name"
                iconType='user'
            />

            <FormInput 
                labelValue={location}
                onChangeText={(userPassword)=>setLocation(userPassword)}
                placeholderText="Location"
                iconType='user'
            />
            <FormInput 
                labelValue={required}
                onChangeText={(userPassword)=>setRequired(userPassword)}
                placeholderText="Requirements"
                iconType='user'
            />
            <FormInput 
                labelValue={timing}
                onChangeText={(userPassword)=>setTiming(userPassword)}
                placeholderText="Timing"
                iconType='user'
            />
            <FormInput 
                labelValue={vacancy}
                onChangeText={(userPassword)=>setVacancy(userPassword)}
                placeholderText="Number Of Vacancies"
                iconType='user'
            />
            <FormInput 
                labelValue={phoneNumber}
                onChangeText={(userPassword)=>setPhoneNumber(userPassword)}
                placeholderText="Phone Number"
                iconType='user'
                keyboardType='number-pad'
            />

            <FormButton
                buttonTitle='Sign Up'
                onPress={()=>register(fullName,email,password,vacancy,timing,phoneNumber,location,required,type)} 
            />

            <View style={styles.textPrivate}>
                    <Text style={styles.color_textPrivate}>
                    By registering, you confirm that you accept our{' '}
                    </Text>
                    <TouchableOpacity onPress={() => alert('Terms Clicked!')}>
                    <Text style={[styles.color_textPrivate, {color: '#e88832'}]}>
                        Terms of service
                    </Text>
                    </TouchableOpacity>
                    <Text style={styles.color_textPrivate}> and </Text>
                    <Text style={[styles.color_textPrivate, {color: '#e88832'}]}>
                    Privacy Policy
                    </Text>
            </View>

            <TouchableOpacity style={styles.navButton} onPress={()=>{navigation.navigate('login')}}>
                <Text style={styles.navButtonText}>Already Have an Account ? Log In.</Text>                
            </TouchableOpacity>

        </View>
        </ScrollView>
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
    text: {
      fontFamily: 'Kufam-SemiBoldItalic',
      fontSize: 28,
      marginBottom: 10,
      color: '#051d5f',
    },
    navButton: {
      marginTop: 15,
    },
    navButtonText: {
      fontSize: 18,
      fontWeight: '500',
      color: '#2e64e5',
      fontFamily: 'Lato-Regular',
    },
    textPrivate: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      marginVertical: 35,
      justifyContent: 'center',
    },
    color_textPrivate: {
      fontSize: 13,
      fontWeight: '400',
      fontFamily: 'Lato-Regular',
      color: 'grey',
    },
  });