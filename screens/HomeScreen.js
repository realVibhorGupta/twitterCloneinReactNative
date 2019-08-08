import React from 'react';
import { Ionicons ,EvilIcons  ,MaterialIcons} from '@expo/vector-icons';
import CardComponent from './CardComponent'

import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  FlatList,
  View,
  IonIcons,
} from 'react-native';
import VideoItems from './VideoItems'
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
import { WebBrowser } from 'expo';
import { MonoText } from '../components/StyledText';
export default class HomeScreen extends React.Component {
  static navigationOptions = {

    headerLeft: <Thumbnail small source={require('../assets/images/IMG_DEV.jpg')} style={{ marginLeft: 20 }} />,
    title: 'Home',
    headerRight: 
    <Button  style = {{ backgroundColor : '#F8F8F8',marginBottom : 10 }}>
      <MaterialIcons name='add' size={30} style={{ color: 'rgb(104,179,255)', marginRight: 10 }} />
    </Button>
  };

  render() {
    return (



      <Container style={styles.container}>
        <Content>
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
    backgroundColor: '#fff',
    elevation: 3,
  },

  contentContainer: {
    paddingTop: 30,
  },
  topContainer: {

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
        backgroundColor: '#ffffff',
      },
    }),
    alignItems: 'center',
    backgroundColor: '#ffffff',
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
  listItemContainer: {
    flex: 1,
    borderBottomWidth: 0
  },
  seperator: {
    height: 1,
    width: "86%",
    backgroundColor: "#CED0CE",
    marginLeft: "12%"
  },
  avatar: {
    width: 50,
    height: 50
  },
  title: {
    marginLeft: 5,
    fontSize: 16,
    fontWeight: "600",
    color: "black"
  },
  subtitle: {
    marginLeft: 5,
    fontSize: 14,
    fontWeight: "normal"
  },
  subtitleContainer: {
    marginTop: 0
  },
});
