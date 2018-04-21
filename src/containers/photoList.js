import { connect } from "react-redux";
import PhotoList from "../components/photo-list";
import { likePhoto, unlikePhoto, downloadPhoto, getPhotoDetail, hideModal } from "../actions/photoAction";

const mapStateToProps = state => {
	return {
		//List avec photo update with like
	}
}

export default connect(mapStateToProps, {
	likePhoto: id => likePhoto(id),
	unlikePhoto: id => unlikePhoto(id),
	getPhotoDetail: id => getPhotoDetail(id),
	downloadPhoto: photo => downloadPhoto(photo),
	hideModal
})(PhotoList);
