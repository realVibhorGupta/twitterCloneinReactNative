import React from 'react';
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
    Separator,


} from 'native-base'
import {
    Platform,
    ScrollView,
    StyleSheet,
    Text,
    IonIcons,
    Image,
    ImageBackground,
    CircularAvatar,
    TouchableOpacity,
    View,
} from 'react-native';
import {
    Divider,
} from 'react-native-elements'
export default class SearchTopCard extends React.Component {
    render() {

        return (
            <View>
                <Card>
                    <CardItem>
                        <View style={{
                            flex: 1,
                            alignItems: 'stretch',
                            justifyContent: 'center',
                        }}>
                            <ImageBackground source =  { require('../assets/images/girls1.jpg')}
                                style={{
                                    height: 300,
                                    width: null,
                                    flex: 1,
                                  

                                }}>
                                 <View   style = {{   position: 'absolute',marginLeft : 10 , marginBottom : 5 ,
                                    bottom: 0 }}>
                                        <Text style = {{ textAlign : 'left' ,color : 'white' }}>India news .7m</Text>
                                        <Text style = {{ fontWeight : 'bold' , fontSize : 23  , textAlign : 'left',color : 'white'}}>Top Tweets to start your day</Text>
                                        <Text style = {{ textAlign : 'left' ,color : 'white'}}>321 Likes</Text>
                                </View>  
                            </ImageBackground>

                        </View>
                    </CardItem>


                </Card>

                <Card>
                    {<CardItem bordered >

                        <Text style={{
                            fontWeight: 'bold',
                            fontSize: 25,
                            marginLeft: 10
                        }}>Trends for you</Text>

                    </CardItem>}
                    {
                        <CardItem cardBody style={{ flexDirection: 'column' }}>
                            <CardItem style={styles.topHeading}>
                                {<Text style={styles.middleTextHeading}>1</Text>}
                                <Text style={styles.middleTextHeading}>#ModiInChina</Text>
                            </CardItem>

                            <CardItem bordered style={styles.Detail}>
                                <Text style={styles.middleTextDetail}>4363</Text>
                                <Text style={styles.middleTextDetail}>Tweets</Text>
                            </CardItem>
                            <Divider style={{ backgroundColor: 'blue' }} />
                            <CardItem style={styles.topHeading}>
                                {<Text style={styles.middleTextHeading}>2</Text>}
                                <Text style={styles.middleTextHeading}>#ModiInChina</Text>
                            </CardItem>

                            <CardItem bordered style={styles.Detail}>
                                <Text style={styles.middleTextDetail}>4363</Text>
                                <Text style={styles.middleTextDetail}>Tweets</Text>
                            </CardItem>
                            <Divider style={{ backgroundColor: 'blue' }} />

                            <CardItem style={styles.topHeading}>
                                {<Text style={styles.middleTextHeading}>3</Text>}
                                <Text style={styles.middleTextHeading}>#ModiInChina</Text>
                            </CardItem>

                            <CardItem bordered style={styles.Detail}>
                                <Text style={styles.middleTextDetail}>4363</Text>
                                <Text style={styles.middleTextDetail}>Tweets</Text>
                            </CardItem>
                            <Divider style={{ backgroundColor: 'blue' }} />

                            <CardItem style={styles.topHeading}>
                                {<Text style={styles.middleTextHeading}>4</Text>}
                                <Text style={styles.middleTextHeading}>#ModiInChina</Text>
                            </CardItem>

                            <CardItem bordered style={styles.Detail}>
                                <Text style={styles.middleTextDetail}>4363</Text>
                                <Text style={styles.middleTextDetail}>Tweets</Text>
                            </CardItem>
                            <Divider style={{ backgroundColor: 'blue' }} />

                            <CardItem style={styles.topHeading}>
                                {<Text style={styles.middleTextHeading}>5</Text>}
                                <Text style={styles.middleTextHeading}>#ModiInChina</Text>
                            </CardItem>

                            <CardItem bordered style={styles.Detail}>
                                <Text style={styles.middleTextDetail}>4363</Text>
                                <Text style={styles.middleTextDetail}>Tweets</Text>
                            </CardItem>
                            <Divider style={{ backgroundColor: 'blue' }} />

                            <CardItem style={styles.topHeading}>
                                {<Text style={styles.middleTextHeading}>6</Text>}
                                <Text style={styles.middleTextHeading}>#ModiInChina</Text>
                            </CardItem>

                            <CardItem bordered style={styles.Detail}>
                                <Text style={styles.middleTextDetail}>4363</Text>
                                <Text style={styles.middleTextDetail}>Tweets</Text>
                            </CardItem>
                            <Divider style={{ backgroundColor: 'blue' }} />

                            <Text style={{ color: 'rgb(104,179,255)', textAlign: 'left' }}> Show more</Text>
                        </CardItem>

                    }


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

    Detail: {
        flex: 1,
        flexDirection: 'row',
    },
    topHeading: {

        flexDirection: 'row'
    },
    middleTextHeading: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'black',
        flexDirection: 'row',
        flex: 2,
        marginLeft: 10,

    },
    middleTextDetail: {
        marginLeft: 20,
        fontSize: 15,
        color: 'grey',
        flexDirection: 'row',
        flex: 2,
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
