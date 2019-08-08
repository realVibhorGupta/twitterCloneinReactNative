import React from 'react';

import { Ionicons, EvilIcons } from '@expo/vector-icons';

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
export default class NotificationComponent extends React.Component {

    render() {
        const images = {
            "1": require('../assets/images/girls1.jpg'),
            "2": require('../assets/images/girl2.jpg'),
            "3": require('../assets/images/android.jpg'),
            "4": require('../assets/images/iphone1.jpg')
        }
        return (
            <View style={{ flexDirection: 'row' }}>
                <Card style={{ height: 90, padding: 50 }} >
                    <CardItem >


                        <Left>
                            <Thumbnail small source={require('../assets/images/IMG_DEV.jpg')} style={{ marginTop: -45, marginLeft: -55 }} />

                        </Left>
                        <Body>
                            <View style={styles.upperContent}>
                             
                                 <Thumbnail source={require('../assets/images/IMG_DEV.jpg')}  style={{ marginTop: -55, marginLeft: -115 }}/>

                               
                                <Text style={{ fontWeight: 'bold', color: 'black', fontSize: 15, marginTop: 0 ,marginLeft : -45}}>Nikhil Liked your Tweet</Text>
                                {/* <Text style={{ fontWeight: 'normal', color: 'grey', marginTop: 8, marginLeft: -100 }}>@imvibhorg  .  23s</Text> */}


                            </View>

                        </Body>



                    </CardItem>


                    {<CardItem cardBody>
                        <Image source={images[this.props.imageSource]} style={{
                            height: 200,
                            width: null,
                            flex: 1
                        }}
                        />
                    </CardItem>}



                </Card>


            </View>
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
    bottomIcons: {
        height: 50,
        flexDirection: 'row',
        flex: 2,
        marginLeft: 25,


    },
    navBar: {
        backgroundColor: 'white',
        elevation: 3,
    },
    upperContent: {
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
