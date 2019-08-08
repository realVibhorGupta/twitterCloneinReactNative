import React from 'react';
import { ExpoConfigView } from '@expo/samples';
import SearchTopCard from './SearchTopCard'
import CardComponent from './CardComponent'
import { Ionicons ,EvilIcons  ,MaterialIcons} from '@expo/vector-icons';

import {
  Container,
  Content,
  Thumbnail,
  Card,
  CardItem,
  Body,
  Left,
  Right,
  Icon,
  Button
} from 'native-base'
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  List,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
export default class SearchScreen extends React.Component {
  static navigationOptions = {


    headerLeft: <Thumbnail small source={require('../assets/images/IMG_DEV.jpg')} style={{ marginLeft: 20 }} />,
    title: 'Search',
    headerRight:    <Button  style = {{ backgroundColor : '#F8F8F8',marginBottom : 10 }}>
      <Ionicons name='ios-person-add-outline' size={30} style={{ color: 'rgb(104,179,255)', marginRight: 20   }} />
    </Button>



  };

  render() {
    /* Go ahead and delete ExpoConfigView and replace it with your
     * content, we just wanted to give you a quick view of your config */
    return (
      <Container style={styles.container}>
        <Content>
          <SearchTopCard />
          <CardComponent imageSource="1" />
          <CardComponent imageSource="2" />
          <CardComponent imageSource="3" />
          <CardComponent imageSource="4" />


        </Content>
      </Container>

    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  navBar: {
    backgroundColor: 'white',
    elevation: 3,

  },
  tab: {

    height: 40,
    backgroundColor: 'white',
    elevation: 5,
    flexDirection: 'row',


  },
  textButtons: {
    color: 'rgb(104,179,255)',
    fontSize: 14,
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 30,
    fontWeight: 'bold'

  },
  textButtonsOne: {
    color: 'rgba(0,0,0,0.4)',
    fontSize: 14,
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 30,
    fontWeight: 'bold'
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