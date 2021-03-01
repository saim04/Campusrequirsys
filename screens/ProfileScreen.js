import React , {useContext} from 'react'
import { View, Text , StyleSheet } from 'react-native'
import { AuthContext } from '../navigation/AuthProvider'
import FormButton from '../components/FormButton'


export default function ProfileScreen() {
    const { user , logout } = useContext(AuthContext)
    return (
        <View style={styles.container}>
            <Text>Welcome {user.email}</Text>
            <FormButton buttonTitle='Logout' onPress={()=>logout()} />
        </View>
    )
}

const styles = StyleSheet.create({
    container : {
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }
})