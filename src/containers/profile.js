import { connect } from "react-redux";
import Profile from "../components/profile";

import { logout } from '../actions/auth'

const mapStateToProps = state => ({
  user: state.auth.user,
})

export default connect(mapStateToProps, {
	logout
})(Profile);
