import React , {useContext} from 'react'
import { View, Text } from 'react-native'
import  Ionicons from 'react-native-vector-icons/Ionicons'
import { Container , Card , UserImg ,
    UserInfo , UserInfoText , UserName , 
    PostTime , PostText , PostImg , 
    InteractionWrapper,Interaction , InteractionText,
    Divider
} 
from '../styles/FeedStyles'
import { AuthContext } from '../navigation/AuthProvider'

const PostCard = ({item}) => {
    const { user , logout } = useContext(AuthContext)
    console.log(item.name)
    return (
        <Card>
                <UserInfo>
                    <UserImg source={{uri:item.userImg}} />
                    <UserInfoText>
                        <UserName>{item.name}</UserName>
                        <PostTime>{item.type}</PostTime>
                    </UserInfoText>
                </UserInfo> 
                <PostText></PostText>
                <Divider />
                {/* <InteractionWrapper>
                    <Interaction active={item.liked}>
                        <Ionicons name={likeIcon} size={25} color={likeIconColor} />
                        <InteractionText active={item.liked}>{likeText}</InteractionText>
                    </Interaction>
                    <Interaction>
                        <Ionicons name='md-chatbubble-outline' size={25} />
                        <InteractionText>{commentText}</InteractionText>
                    </Interaction>
                    {user.uid === item.userId ?
                    <Interaction>
                        <Ionicons name='md-trash-outline' size={25} />
                    </Interaction>
                    : null
                    }
                </InteractionWrapper> */}
            </Card>
    )
}

export default PostCard;
