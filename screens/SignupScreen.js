import React , { useState , useContext } from 'react'
import { View, Text , StatusBar , StyleSheet , Image , TextInput , ScrollView  , TouchableOpacity, Button} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FormInput from '../components/FormInput';
import FormButton from '../components/FormButton';
import { AuthContext } from '../navigation/AuthProvider';

export default function SignupScreen({navigation}) {
    const [email,setEmail] = useState();
    const [password,setPassword] = useState();
    const [age,setAge] = useState();
    const [fullName,setFullName] = useState();
    const [gender,setGender] = useState();
    const [skills,setSkills] = useState();
    const [qualification,setQualification] = useState();
    const [phoneNumber,setPhoneNumber] = useState();

    const { registerstudent} = useContext(AuthContext);
    const type = 'student'
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
                placeholderText="Full Name"
                iconType='user'
            />

            <FormInput 
                labelValue={age}
                onChangeText={(userPassword)=>setAge(userPassword)}
                placeholderText="Age"
                iconType='user'
            />
            <FormInput 
                labelValue={gender}
                onChangeText={(userPassword)=>setGender(userPassword)}
                placeholderText="Gender"
                iconType='user'
            />
            <FormInput 
                labelValue={skills}
                onChangeText={(userPassword)=>setSkills(userPassword)}
                placeholderText="Your Skills..."
                iconType='user'
            />
            <FormInput 
                labelValue={qualification}
                onChangeText={(userPassword)=>setQualification(userPassword)}
                placeholderText="Qualification..."
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
                onPress={()=>registerstudent(fullName,email,password,skills,qualification,phoneNumber,gender,age,type)} 
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