import React, { createContext , useState } from "react";
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

export const AuthContext = createContext();

export default function AuthProvider({children}) {

    const [user,setUser] = useState(null);

    return (
            <AuthContext.Provider value={{
                user,
                setUser,
                login: async (email,password)=>{
                    try {
                        await auth().signInWithEmailAndPassword( email , password )
                    } catch (error) {   
                        alert(error)
                    }
                },
                registerstudent : async (fullName,email,password,skills,qualification,phoneNumber,gender,age,type)=>{
                    try {
                        await auth().createUserWithEmailAndPassword( email , password )
                        firestore()
                        .collection('students')
                        .add({
                            email : email ,
                            gender: gender ,
                            age : age , 
                            name : fullName ,
                            phoneNumber : phoneNumber,
                            qualification:qualification,
                            skills:skills ,
                            type : type
                        })
                    } catch (error) {   
                        alert(error)
                    }
                },
                register : async (fullName,email,password,vacancy,timing,phoneNumber,location,required,type)=>{
                    try {
                        await auth().createUserWithEmailAndPassword( email , password )
                        firestore()
                        .collection('company')
                        .add({
                            email : email ,
                            name : fullName ,
                            vacancy : vacancy,
                            phoneNumber : phoneNumber,
                            timing:timing,
                            location:location ,
                            requirements : required ,
                            type : type
                        })
                    } catch (error) {   
                        alert(error)
                    }
                },
                logout : async () => {
                    try {
                        await auth().signOut()
                    } catch (error) {
                        console.log(error)
                    }
                }

            }
            }>
                { children }
            </AuthContext.Provider>
        )
}
