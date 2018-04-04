import React from "react"
 import { View, Text } from "react-native"


export default class Collections extends React.Component {

	static navigationOptions = {
	    title: 'Collections',
	  };

	render() {
    	return (
      		<View style={{ flex:1 }}>
      			<Text>Collection tab</Text>
      		</View>
    	)
  	}

}
