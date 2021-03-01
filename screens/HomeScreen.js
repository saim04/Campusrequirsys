import React , { useContext , useEffect , useState } from 'react'
import { View, Text , StyleSheet , FlatList , TouchableOpacity } from 'react-native'
import FormButton from '../components/FormButton'
import  Ionicons from 'react-native-vector-icons/Ionicons'
import { AuthContext } from '../navigation/AuthProvider'
import PostCard from '../components/PostCard'
import { Container } from '../styles/FeedStyles'
import firestore from '@react-native-firebase/firestore';
import { set } from 'react-native-reanimated'

const Posts = [
        {
          id: '1',
          userName: 'Jenny Doe',
          userImg: require('../assets/users/user-3.jpg'),
          postTime: '4 mins ago',
          post: 'Hey there, this is my test for a post of my social app in React Native.',
          postImg: require('../assets/posts/post-img-3.jpg'),
          liked: true,
          likes: '14',
          comments: '5'
        },
        {
          id: '2',
          userName: 'John Doe',
          userImg: require('../assets/users/user-1.jpg'),
          postTime: '2 hours ago',
          post: 'Hey there, this is my test for a post of my social app in React Native.',
          postImg: 'none',
          liked: false,
          likes: '8',
          comments: '0'
        },
        {
          id: '3',
          userName: 'Ken William',
          userImg: require('../assets/users/user-4.jpg'),
          postTime: '1 hours ago',
          post: 'Hey there, this is my test for a post of my social app in React Native.',
          postImg: require('../assets/posts/post-img-2.jpg'),
          liked: true,
          likes: '1',
          comments: '0'
        },
        {
          id: '4',
          userName: 'Selina Paul',
          userImg: require('../assets/users/user-6.jpg'),
          postTime: '1 day ago',
          post: 'Hey there, this is my test for a post of my social app in React Native.',
          postImg: require('../assets/posts/post-img-4.jpg'),
          liked: true,
          likes: '22',
          comments: '4'
        },
        {
          id: '5',
          userName: 'Christy Alex',
          userImg: require('../assets/users/user-7.jpg'),
          postTime: '2 days ago',
          post: 'Hey there, this is my test for a post of my social app in React Native.',
          postImg: 'none',
          liked: false,
          likes: '0',
          comments: '0'
        },
    ];
export default function HomeScreen() {
    const { user , logout } = useContext(AuthContext)
    const [display,setDisplay] = useState(null)
    const [display1,setDisplay1] = useState(null)
    const [loading,setLoading] = useState(true)
  
    const fetchPosts = () => {
      const list = []
      firestore()
      .collection('students')
      .get()
      .then(querySnapshot => {
        console.log('Total users: ', querySnapshot.size);

      querySnapshot.forEach(documentSnapshot => {
        const {age,email,gender,qualification,skills,phoneNumber,type,name} = documentSnapshot.data()
        list.push({
          age,email,gender,qualification,skills,phoneNumber,type,name,id:documentSnapshot.id
        });
        setDisplay(list)
      });
  });
    }
    const fetchcompanies = () => {
      const list = []
      firestore()
      .collection('company')
      .get()
      .then(querySnapshot => {
        console.log('Total users: ', querySnapshot.size);

      querySnapshot.forEach(documentSnapshot => {
        const {email,timing,name,vacancy,phoneNumber,location,requirements,type } = documentSnapshot.data()
        list.push({
          email,name,vacancy,phoneNumber,location,requirements,type ,timing ,id:documentSnapshot.id
        });
        setDisplay1(list)
      });
  });
    }
    useEffect(() => {
      fetchPosts()
      fetchcompanies()
    },[])
    return (
        <Container>
          <TouchableOpacity 
          style={{backgroundColor:'blue',padding:10,borderRadius:50}}
          onPress={()=>fetchPosts()}
          >
            <Text style={{color:'#fff'}}>See Students and companies.</Text>
          </TouchableOpacity>
            <FlatList
                data={display}
                renderItem={({item})=> 
                <View style={{borderColor:'#dddddd',borderWidth:1,borderRadius:5,marginTop:10,width:'auto'}}>
                        <View style={{flexDirection:'row',padding:20}}>
                            <View style={{backgroundColor:'blue',height:40,borderRadius:50,width:40,alignItems:'center',justifyContent:'center'}}>
                                <Text style={{color:'#fff',fontSize:20}}>{item.email.charAt(0).toUpperCase()}</Text>
                            </View>
                            <View style={{flexDirection:'row',alignItems:'center'}}>
                                <Text style={{fontWeight:'bold',marginLeft:10,fontSize:15}}>
                                    {item.name}  Type : {item.type}
                                </Text>
                            </View>
                        </View>
                        <View 
                            style={{
                            borderBottomColor: '#dddddd',
                            borderBottomWidth: 1,
                            width:'90%',
                            alignSelf:'center',
                            }}
                            >
                         </View>
                        <View style={{}}>
                        <View style={{flexDirection:'row'}}>
                            <View style={{flexDirection:'row',alignItems:'center',padding:10,marginTop:10}}>
                                <Text style={{color:'#a6a6a6'}}>Mobile Number : </Text>
                                <Text style={{fontWeight:'bold'}}> 
                                    {item.phoneNumber}
                                </Text>
                            </View>
                        </View>
                        <View style={{flexDirection:'row'}}>
                            <View style={{flexDirection:'row',alignItems:'center',padding:10}}>
                                <Text style={{color:'#a6a6a6'}}>Age :</Text>
                                <Text style={{}}> 
                                    {item.age}
                                </Text>
                            </View>
                        </View>
                        <View style={{flexDirection:'row'}}>
                            <View style={{flexDirection:'row',alignItems:'center',padding:10}}>
                                <Text style={{color:'#a6a6a6'}}>Gender : </Text>
                                <Text style={{}}> 
                                    {item.gender}
                                </Text>
                            </View>
                        </View>
                        <View style={{flexDirection:'row'}}>
                            <View style={{flexDirection:'row',alignItems:'center',padding:10}}>
                                <Text style={{color:'#a6a6a6'}}>Skills : </Text>
                                <Text style={{}}> 
                                    {item.skills}
                                </Text>
                            </View>
                        </View>
                        <View style={{flexDirection:'row'}}>
                            <View style={{flexDirection:'row',alignItems:'center',padding:10}}>
                                <Text style={{color:'#a6a6a6'}}>Email : </Text>
                                <Text style={{}}> 
                                    {item.email}
                                </Text>
                            </View>
                        </View>
                        <View style={{flexDirection:'row'}}>
                            <View style={{flexDirection:'row',alignItems:'center',padding:10}}>
                                <Text style={{color:'#a6a6a6'}}>Qualification : </Text>
                                <Text style={{}}> 
                                    {item.qualification}
                                </Text>
                            </View>
                        </View>
                        </View>
                    </View>
              }
                keyExtractor={item=>item.id}
                showsVerticalScrollIndicator={false}
            />
            <FlatList
                data={display1}
                renderItem={({item})=> 
                <View style={{borderColor:'#dddddd',borderWidth:1,borderRadius:5,marginTop:10,width:'auto'}}>
                        <View style={{flexDirection:'row',padding:20}}>
                            <View style={{backgroundColor:'blue',height:40,borderRadius:50,width:40,alignItems:'center',justifyContent:'center'}}>
                                <Text style={{color:'#fff',fontSize:20}}>{item.email.charAt(0).toUpperCase()}</Text>
                            </View>
                            <View style={{flexDirection:'row',alignItems:'center'}}>
                                <Text style={{fontWeight:'bold',marginLeft:10,fontSize:15}}>
                                    {item.name}  Type : {item.type}
                                </Text>
                            </View>
                        </View>
                        <View 
                            style={{
                            borderBottomColor: '#dddddd',
                            borderBottomWidth: 1,
                            width:'90%',
                            alignSelf:'center',
                            }}
                            >
                         </View>
                        <View style={{}}>
                        <View style={{flexDirection:'row'}}>
                            <View style={{flexDirection:'row',alignItems:'center',padding:10,marginTop:10}}>
                                <Text style={{color:'#a6a6a6'}}>Mobile Number : </Text>
                                <Text style={{fontWeight:'bold'}}> 
                                    {item.phoneNumber}
                                </Text>
                            </View>
                        </View>
                        <View style={{flexDirection:'row'}}>
                            <View style={{flexDirection:'row',alignItems:'center',padding:10}}>
                                <Text style={{color:'#a6a6a6'}}>Requirements :</Text>
                                <Text style={{}}> 
                                    {item.requirements}
                                </Text>
                            </View>
                        </View>
                        <View style={{flexDirection:'row'}}>
                            <View style={{flexDirection:'row',alignItems:'center',padding:10}}>
                                <Text style={{color:'#a6a6a6'}}>Timing : </Text>
                                <Text style={{}}> 
                                    {item.timing}
                                </Text>
                            </View>
                        </View>
                        <View style={{flexDirection:'row'}}>
                            <View style={{flexDirection:'row',alignItems:'center',padding:10}}>
                                <Text style={{color:'#a6a6a6'}}>Vacancy : </Text>
                                <Text style={{}}> 
                                    {item.vacancy}
                                </Text>
                            </View>
                        </View>
                        <View style={{flexDirection:'row'}}>
                            <View style={{flexDirection:'row',alignItems:'center',padding:10}}>
                                <Text style={{color:'#a6a6a6'}}>Email : </Text>
                                <Text style={{}}> 
                                    {item.email}
                                </Text>
                            </View>
                        </View>
                        <View style={{flexDirection:'row'}}>
                            <View style={{flexDirection:'row',alignItems:'center',padding:10}}>
                                <Text style={{color:'#a6a6a6'}}>Location : </Text>
                                <Text style={{}}> 
                                    {item.location}
                                </Text>
                            </View>
                        </View>
                        </View>
                    </View>
              }
                keyExtractor={item=>item.id}
                showsVerticalScrollIndicator={false}
            />
        </Container>
    )
}
