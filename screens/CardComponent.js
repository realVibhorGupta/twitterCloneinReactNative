import React from 'react';

import { Ionicons , EvilIcons , Feather} from '@expo/vector-icons';

import {
    Container,
    Content,
    Thumbnail,
    Card,
    CardItem,
    Body,
    Button,
    Left,
    Right,
    Icon,

} from 'native-base'
import {
    Platform,
    ScrollView,
    StyleSheet,
    Text,
    IonIcons,
    Image,
    CircularAvatar,

    TouchableOpacity,
    View,
} from 'react-native';
export default class CardItems extends React.Component {
    render() {
        const images = {
            "1": require('../assets/images/girls1.jpg'),
            "2": require('../assets/images/girl2.jpg'),
            "3": require('../assets/images/android.jpg'),
            "4": require('../assets/images/iphone1.jpg')
        }
        return (
            <Card>
                <CardItem>
                    <Left>
                        <Thumbnail source={require('../assets/images/IMG_DEV.jpg')} style = {{ marginTop : -45 }} />

                        <Body>

                        <View style={styles.upperContent}>
                            <Text style = {{ fontWeight: 'bold' , color : 'black' , fontSize : 15 , marginRight : 5}}>Vibhor</Text><Text style ={{ fontWeight: 'normal' , color : 'grey', marginRight : 5}}>@imvibhorg  .  23s</Text>
                            <Right>
                            <Icon name='ios-arrow-down-outline' style={{ color: 'grey'  }} />
                            </Right>

                        </View>
                            <Text note>  Lorem Ipsum is simply dummy text of the printing and
                                 typesetting industry. Lorem Ipsum has been the industry's standard
                                 dummy text ever since the 1500s, when an unknown printer took
                         </Text>
                        </Body>

                    </Left>
                </CardItem>

                {<CardItem cardBody>
                    <Image source={images[this.props.imageSource]} style={{
                        height: 200,
                        width: null,
                        flex: 1
                    }}
                    />
                </CardItem>}

                <CardItem style={{ marginLeft : 40 }} >
                   
                        <Button transparent style={ { marginLeft : 50} }>
                            <EvilIcons name='comment' size={30} style={{ color: 'black' }} />
                        </Button>
                        <Text style={{ marginLeft : 5 }}>
                            6
                        </Text>
                        <Button transparent style={ styles.bottomIcons }>
                            <EvilIcons name='retweet' size={30} style={{ color: 'black' }} />
                        </Button>
                        <Text style={{ marginLeft : -40 }}>
                            4
                        </Text>
                        <Button transparent style={ styles.bottomIcons }>
                            <EvilIcons name='heart' size={30} style={{ color: 'black' }} />
                        </Button>

                        <Text style={{ marginLeft : -40 }}>
                        7
                        </Text>
                        <Button transparent style={ styles.bottomIcons }>
                            <Ionicons name='ios-cloud-upload-outline'  size={30} style={{ color: 'black' }} />
                        </Button>
                 

                </CardItem>
            </Card>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    tab: {

        height: 55,
        backgroundColor: 'white',
        elevation: 3,
    },
    bottomIcons : {
        height : 50 ,
        flexDirection : 'row',
        flex :2 ,
        marginLeft : 25 ,


    },
    navBar: {
        backgroundColor: 'white',
        elevation: 3,
    },
    upperContent : {
        height: 20,
        backgroundColor: 'white',
        flexDirection: 'row',
    },
    developmentModeText: {
        marginBottom: 20,
        color: 'rgba(0,0,0,0.4)',
        fontSize: 14,
        lineHeight: 19,
        textAlign: 'center',
    },
    contentContainer: {
        paddingTop: 30,
    },
    welcomeContainer: {
        alignItems: 'center',
        marginTop: 10,
        marginBottom: 20,
    },
    welcomeImage: {
        width: 100,
        height: 80,
        resizeMode: 'contain',
        marginTop: 3,
        marginLeft: -10,
    },
    getStartedContainer: {
        alignItems: 'center',
        marginHorizontal: 50,
    },
    homeScreenFilename: {
        marginVertical: 7,
    },
    codeHighlightText: {
        color: 'rgba(96,100,109, 0.8)',
    },
    codeHighlightContainer: {
        backgroundColor: 'rgba(0,0,0,0.05)',
        borderRadius: 3,
        paddingHorizontal: 4,
    },
    getStartedText: {
        fontSize: 17,
        color: 'rgba(96,100,109, 1)',
        lineHeight: 24,
        textAlign: 'center',
    },
    tabBarInfoContainer: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        ...Platform.select({
            ios: {
                shadowColor: 'black',
                shadowOffset: { height: -3 },
                shadowOpacity: 0.1,
                shadowRadius: 3,
            },
            android: {
                elevation: 20,
            },
        }),
        alignItems: 'center',
        backgroundColor: '#fbfbfb',
        paddingVertical: 20,
    },
    tabBarInfoText: {
        fontSize: 17,
        color: 'rgba(96,100,109, 1)',
        textAlign: 'center',
    },
    navigationFilename: {
        marginTop: 5,
    },
    helpContainer: {
        marginTop: 15,
        alignItems: 'center',
    },
    helpLink: {
        paddingVertical: 15,
    },
    helpLinkText: {
        fontSize: 14,
        color: '#2e78b7',
    },
});
