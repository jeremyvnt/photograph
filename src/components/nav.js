import React from "react"
import { StackNavigator, TabNavigator, TabBarBottom, addNavigationHelpers } from 'react-navigation'
import { createReduxBoundAddListener } from 'react-navigation-redux-helpers'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { TouchableHighlight, Text } from "react-native"

import Home from '../containers/home'
import Search from '../containers/search'
import Profile from '../containers/profile'
import Collections from '../containers/collections'

import AuthModal from '../containers/authModal'

const MyTabNavigator = TabNavigator(
	{
	  	Home: { screen: Home },
	  	Search: { screen: Search },
	  	Collections: { screen: Collections },
	},
	{
	    navigationOptions: ({ navigation }) => ({
	      	tabBarIcon: ({ focused, tintColor }) => {
	        	const { routeName } = navigation.state
		        let iconName
		        if (routeName === 'Home') {
		          	iconName = `ios-home${focused ? '' : '-outline'}`
		        } else if (routeName === 'Collections') {
		          	iconName = `ios-options${focused ? '' : '-outline'}`
		        } else if (routeName === 'Search'){
					iconName = `ios-search`
				}

		        // You can return any component that you like here! We usually use an
		        // icon component from react-native-vector-icons
		        return <Ionicons name={ iconName } size={ 25 } color={ tintColor } />
	      	},
	    }),
	    tabBarOptions: {
		      activeTintColor: 'tomato',
		      inactiveTintColor: 'gray',
		      style:{

		      }
	    },
	    tabBarComponent: TabBarBottom,
	    tabBarPosition: 'bottom',
	    animationEnabled: true,
	    swipeEnabled: true,
	}
)

const MainNavigator = StackNavigator(
	{
		Tab: {
			screen: MyTabNavigator,
		},
		Profile: {
		    screen: Profile
		}
	},
	{
	    initialRouteName: 'Tab',
	    navigationOptions: {
		    headerStyle: {
		        backgroundColor: '#fff',
		    },
		    headerTintColor: '#000',
		    headerTitleStyle: {
		        fontWeight: 'bold',
		    },
	    },
	},
)


export const AppNavigator = StackNavigator(
	{
	    Main: {
	      	screen: MainNavigator,
	    },
	    AuthModal: {
	      	screen: AuthModal,
	    },
	},
	{
	    mode: 'modal',
	    headerMode: 'none',
	}
)


const addListener = createReduxBoundAddListener("root");

export default class Nav extends React.Component {

	render() {
    	return (
      		<AppNavigator 
	      		navigation={addNavigationHelpers({
			        dispatch: this.props.dispatch,
			        state: this.props.nav,
			        addListener,
	      		})}
      		/>
    	)
  	}

}
