import React, { Component } from "react";
import PropTypes from "prop-types";
import { View, Text, ImageBackground, StyleSheet } from "react-native";
import { Button,Avatar, Icon } from 'react-native-elements'
import Modal from "react-native-modal";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  button: {
    backgroundColor: "lightblue",
    padding: 4,
    margin: 5,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4,
    borderColor: "rgba(0, 0, 0, 0.1)"
  },
  modalContent: {
  	flexDirection:'column',
    backgroundColor: "white",
    alignItems: "flex-start",
    justifyContent: "center",
    padding: 5,
    borderRadius: 4,
    borderColor: "rgba(0, 0, 0, 0.1)"
  },
  bottomModal: {
    justifyContent: "flex-end",
    margin: 0
  }
});

export default class PhotoPreview extends Component {

  	constructor(props) {
    	super(props);
    	this.state = {
      		isVisible: false
		}
  	}

	likePhoto = (id, liked_by_user) => {
	 	if(liked_by_user)
	 		this.props.unlikePhoto(id)
	 	else
	 		this.props.likePhoto(id)
 	}
 	getPhotoDetail = (id) => {
 		this.props.getPhotoDetail(id)
 		this.setState({ isVisible: true })
 	}
 	downloadPhoto = (photo) => {
 		this.props.downloadPhoto(photo)
 	}

	render() {
	 	const { user, urls, liked_by_user, id } = this.props
	 	const like = liked_by_user ? 'heart' : 'heart-o'
	 	const exif = this.props.exif ? this.props.exif : false

	 	return (
			<ImageBackground source={{
				uri:urls.regular,
				crop: {
					 width: this.props.dimension.width,
					 height: this.props.dimension.width / (this.props.width/this.props.height) }
				}}
				style={{width: this.props.dimension.width, height: this.props.dimension.width / (this.props.width/this.props.height)}}>

				{ exif != false && (
					<Modal 
						style={styles.container} 
						isVisible={this.state.isVisible} 
						onSwipe={() => this.setState({ isVisible: false })}  
						swipeDirection="left"
			          	animationIn="zoomInDown"
			          	animationOut="zoomOutUp"
			          	animationInTiming={1000}
			          	animationOutTiming={1000}
			          	backdropTransitionInTiming={1000}
			          	backdropTransitionOutTiming={1000}
	          		>
			          	<View style={styles.modalContent}>
			          		<View style={{ flexDirection:'row', justifyContent: 'space-between'}}>
						 		<Avatar
									medium
									rounded
									source={{uri: user.profile_image.medium}}
									onPress={() => console.log('ok') }
									style={{margin:4}}
								/>
				          		<View style={{ flexDirection:'column', marginLeft:5}}>
									<Text style={{fontWeight: 'bold'}}> {user.name} </Text>
					          		<View style={{ flexDirection:'row' }}>
										<Text style={{fontWeight: 'bold'}}>Location : </Text>
										<Text>{user.location}</Text>
									</View>
					          		<View style={{ flexDirection:'row', justifyContent:'flex-start' }}>
					           			<Text style={{fontWeight: 'bold'}}>Collections : </Text><Text>{user.total_collections}</Text>
					           			<Text style={{fontWeight: 'bold'}}>Photos : </Text><Text>{user.total_photos}</Text>
					           			<Text style={{fontWeight: 'bold'}}>Likes : </Text><Text>{user.total_likes}</Text>
									</View>
				          		</View>
							</View>
			          		<View style={{ flexDirection:'row' }}>
		           				<Text style={{fontWeight: 'bold'}}>Biographie : </Text>
	           					<Text>{user.bio}</Text>
			          		</View>
			          		<View style={{ flexDirection:'row' }}>
				          		<View style={{ flexDirection:'column' }}>
					           		<Text style={{fontWeight: 'bold'}}>Camera Model : </Text>
				           			<Text style={{fontWeight: 'bold'}}>Focal length : </Text>
					           		<Text style={{fontWeight: 'bold'}}>Aperture : </Text>
				           			<Text style={{fontWeight: 'bold'}}>ISO : </Text>
				          		</View>
				          		<View style={{ flexDirection:'column' }}>
					           		<Text>{exif.model}</Text>
				           			<Text>{exif.focal_length}</Text>
					           		<Text>{exif.aperture}</Text>
				           			<Text>{exif.iso}</Text>
				          		</View>
			          		</View>
			          	</View>
			        </Modal>
			    )}

				<View style={{ flex: 1, flexDirection: 'column', padding:4 }}>
				 	<View style={{ flex: 1, flexDirection:'row'}}>
						<Button
							onPress={ () => this.getPhotoDetail(id) }
							style={{ right:20 }}
							transparent
							icon={{
				  				name:'info-circle',
								color:'white',
								size:20, 
								type: 'font-awesome'
							}}
						/>
						<Button
							onPress={ () => this.likePhoto(id, liked_by_user) }
							style={{ right:-200}}
							transparent
							icon={{
				  				name: like,
								color:'white',
								size:20, 
								type: 'font-awesome'
							}}
						/>
						<Button
							style={{ right:-150}}
							transparent
							icon={{
				  				name:'plus',
								color:'white',
								size:20, 
								type: 'font-awesome'
							}}
						/>
				 	</View>
				 	<View style={{ flex: 1, flexDirection:'row',alignItems: 'flex-end', justifyContent: 'space-between' }}>
					 	<View style={{ flexDirection:'row', alignItems: 'center',justifyContent: 'center'}}>
					 		<Avatar
								small
								rounded
								source={{uri: user.profile_image.small}}
								onPress={() => this.getPhotoDetail(id) }
							/>
							<Text style={{ color:'white',backgroundColor:'rgba(52, 52, 52, 0.7)' }}> {user.name} </Text>
						</View>
						<Button
							style={{right:-25}}
							onPress={ () => this.downloadPhoto(this.props) }
							transparent
							icon={{
				  				name:'download',
								color:'white',
								size:20, 
								type: 'font-awesome'
							}}
						/>
					</View>
				</View>
			</ImageBackground>
		);
	}
}