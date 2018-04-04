import React from "react"
import { View, Button, TouchableHighlight } from "react-native"
import { Avatar, Text, Icon } from "react-native-elements"

import Loader from './loader'


export default class Profile extends React.Component {

  static navigationOptions = ({ navigation }) => {
    return { 
      title: 'Profile',
    }
  }

  handleLogout = () => {
    this.props.logout()
    this.props.navigation.popToTop()
  }


	render() {
    const { user } = this.props
    	return (      		
        <View>
          { user ?
            (<View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginTop: 20}}>
              <Avatar
                large
                rounded
                source={{uri: user.profile_image.large}}
                onPress={() => console.log("click profile photo!")}
              />
              <View style={{ flexDirection: 'column', alignItems: 'center', justifyContent: 'center', marginTop: 20}}>
                <Text h3 style={{ marginLeft: 10 }}>
                  { user.name }
                </Text>
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start' }}>
                  { user.location && 
                    <TouchableHighlight>
                      <View>
                        <Icon name="location-on"/>
                        <Text>{ user.location }</Text>
                      </View>
                    </TouchableHighlight>
                  }
                  { user.portfolio_url && 
                    <TouchableHighlight>
                      <View>
                        <Icon name="web" type="MaterialCommunityIcons"/>
                        <Text>{ user.portfolio_url }</Text>
                      </View>
                    </TouchableHighlight>
                  }
                </View>
              </View> 
              <Button onPress={ this.handleLogout } title="Logout" color="red"/>
            </View>) :
            (<Loader/>)
          }
        </View>
    	)
  	}

}
