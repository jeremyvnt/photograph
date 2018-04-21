import React from "react";
import { View, Button, TextInput, Platform } from "react-native";
import { SearchBar, Text, ButtonGroup } from 'react-native-elements'
import PhotoList from '../containers/photoList'
import HeaderProfileButton from '../containers/headerProfileButton'
import Loader from './loader'

export default class Search extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        selectedIndex: 0
      }
    }

  static navigationOptions = ({ navigation }) => {
    return { 
      title: 'Search',
      headerRight: (
          <HeaderProfileButton/>
        ),
    }
  }

  componentDidMount() {

  }

  fetchMethods = text => {
      this.props.fetchListPhotos(text, 1)
      this.props.fetchListUsers(text, 1)
      this.props.fetchListCollections(text, 1)
  }

  onSelectedItem() {

  }

  fetchList = () => {

      let length = 0
      let page = 1
      switch (this.state.selectedIndex) {
        case 0:
            length = this.props.photos.length
            page = Math.floor(length / 30) + 1
            this.props.fetchListPhotos(this.props.text, page)
        case 1:
            length = this.props.collections.length  
            page = Math.floor(length / 30) + 1
            this.props.fetchListUsers(this.props.text, page)
        case 2:
            length = this.props.users.length
            page = Math.floor(length / 30) + 1
            this.props.fetchListCollections(this.props.text, page)
      }

  }

  render() {
    const { isLoading, text, photos, collections, users, dimension, totalPhotos, totalCollections, totalUsers } = this.props
    const { selectedIndex } = this.state
    return (
    
    <View style={{ flex: 1, flexDirection:'column', padding:0 }}>
        <View>
            <SearchBar
                ref={(search) => { this.search = search}}
                platform= { Platform.OS }
                cancelButtonTitle="Cancel"
                onEndEditing={  (text) => this.fetchMethods(text.nativeEvent.text) }
                placeholder='Search photos'
            />
        </View>
        {/*<View style={{ flexDirection: 'row', flex: 3, alignItems: 'center', justifyContent: 'center', marginTop: 2, marginBottom: 2}}>
            <Text h5>{ photos.length } Photos</Text>
            <Text h5>{ collections.length } Collections</Text>
            <Text h5>{ users.length } Users</Text>
        </View>*/}
        {
            text !== '' && (collections.length !== 0 || photos.length !== 0 || users.length !== 0) ?
        (<View>
            <ButtonGroup
            containerViewStyle={{width: '100%', margin: 0, padding:0}}
            onPress={ () => { 
                this.state.selectedIndex !== 0 && this.loadingPhotos();
            }}
            selectedIndex={ selectedIndex }
            buttons={[ totalPhotos +' Photos', totalCollections + ' Collections', totalUsers + ' Users']}
            containerStyle={{height: 50}}
            />
           <PhotoList
                ref={(photoList) => { this.photoList = photoList}}
                items={photos} dimension={ this.props.dimension }
                onEndReached={ this.fetchList }/> 
        </View>)
        :
        (
            <View style={{ flex: 1, flexDirection:'row', alignItems: 'center', justifyContent: 'center', marginTop: 120}}>
                { text !== '' && isLoading && (<Loader/>)}
                { text !== '' && (collections.length == 0 && photos.length == 0 && users.length == 0) && !isLoading && <Text> No results </Text>}
            </View>
        )
        }
     </View>
    );
  }
}
