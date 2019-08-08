import React from 'react';
import { ButtonGroup } from 'react-native-elements'; // 0.17.0
import { Constants } from 'expo';
import NotificationComponent from './NotificationComponent'
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
  Segment,
  Header,
 Button,
  Icon,
  Title
} from 'native-base';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,

  SegmentedControlIOS,
  CircularAvatar,
  TouchableOpacity,
  View,
} from 'react-native';

export default class NotificationScreen extends React.Component {

  static navigationOptions = {
    headerLeft: <Thumbnail small source={require('../assets/images/IMG_DEV.jpg')} style={{ marginLeft: 20 }} />,

    title: 'Notification',
    headerRight:  <Button  style = {{ backgroundColor : '#F8F8F8',marginBottom : 10 }}>
    <EvilIcons name='gear' size={30} style={{ color: 'rgb(104,179,255)', marginRight: 10 }} />
  </Button>
  };
  state = {
    index: 0
  }

  updateIndex = (index) => {
    this.setState({ index })
  }




  render() {
    const buttons = ['Hello', 'World', 'Buttons']
    const { selectedIndex } = this.state
    return (
      <View style={styles.container}>
       <Container>
       <Segment>
         <Button first>
           <Text style- = {{ backgroundColor :'rgb(104,179,255)' }}>    All   </Text>
         </Button>
         <Button>
           <Text>Mentions</Text>
         </Button>
       </Segment>
       <Content padder > 
         
         <Container style={styles.container}>
        <Content>
           <NotificationComponent/>
          <CardComponent imageSource="1" />
          <CardComponent imageSource="2" />
          <CardComponent imageSource="3" />
          <CardComponent imageSource="4" />
        </Content>
      </Container>
       </Content>
     </Container>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ffff',
    marginTop : -25
  },
  tab: {

    height: 55,
    backgroundColor: 'white',
    elevation: 3,
  },
  navBar: {
    backgroundColor: 'white',
    elevation: 3,
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
