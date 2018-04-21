import React from "react";
import { View, Button, Text } from "react-native";
import { StackNavigator, addNavigationHelpers } from 'react-navigation'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { ButtonGroup } from 'react-native-elements'

import {
  ORDER_BY_LATEST,
  ORDER_BY_POPULAR,
  ORDER_BY_OLDEST
} from "../utils/constants";

import PhotoList from '../containers/photoList'
import HeaderProfileButton from '../containers/headerProfileButton'

export default class Home extends React.Component {
     constructor(props) {
      super(props);
      this.state = {
        selectedIndex: 1
      }
      this.loadingPhotos = this.loadingPhotos.bind(this)
    }


  static navigationOptions = ({ navigation }) => {
    return { 
      title: 'Home',
      headerRight: (
          <HeaderProfileButton/>
        ),
    }
  }

  componentDidMount() {
    this.props.fetchListPhotos(ORDER_BY_LATEST);
  }
  loadingPhotos = (selectedIndex) => {
    this.setState({selectedIndex})
    let Choice = ORDER_BY_LATEST
    if(selectedIndex == 2) 
      Choice = ORDER_BY_OLDEST
    else if(selectedIndex == 1)
      Choice = ORDER_BY_LATEST
    else 
      Choice = ORDER_BY_POPULAR
    return this.props.fetchListPhotos(Choice)
  }

  render() {
    const items = this.props.photos
    const { selectedIndex } = this.state
    console.log('Navigation HOME: ', this.props.navigation)
    return (
      <View style={{ flex: 1, flexDirection:'column', padding:0 }}>
        <ButtonGroup
          containerViewStyle={{width: '100%', margin: 0, padding:0}}
          onPress={ this.loadingPhotos }
          selectedIndex={ selectedIndex }
          buttons={['Trending','New','Old']}
          containerStyle={{height: 50}}
        />
        { 
          items
          &&
          <PhotoList
            items={this.props.photos}
            dimension={this.props.dimension}
            navigation={this.props.navigation}
          />
        }
      </View>
    );
  }
}
