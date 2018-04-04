import React from "react"
import Ionicons from 'react-native-vector-icons/Ionicons'
import { withNavigation } from 'react-navigation'


class HeaderProfileButton extends React.Component {

  handleOnPress = () => {
    if (this.props.loggedIn)
      this.props.navigation.navigate('Profile')
    else
      this.props.navigation.navigate('AuthModal')
  }


	render() {
    	return (
      		<Ionicons
            name="ios-contact"
            size={ 30 }
            onPress={ this.handleOnPress }
          />
    	)
  	}
}

export default withNavigation(HeaderProfileButton)