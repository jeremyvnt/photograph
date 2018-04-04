import { connect } from "react-redux";

import AuthModal from "../components/auth-modal";
import { handleInputChange, handleLogin } from '../actions/auth'

const mapStateToProps = state => {
  return { authUrl } = state.auth
}

export default connect(mapStateToProps, {
  handleLogin: (e) => handleLogin(e),
})(AuthModal);
