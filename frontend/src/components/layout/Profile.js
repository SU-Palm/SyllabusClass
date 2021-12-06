import React, { Component } from "react";
// This will require to npm install axios
import axios from 'axios';
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import PropTypes from "prop-types";
import SearchBar from "../layout/SearchBar";

/* const User = (props) => (
    <tr>
      <td>{props.users.name}</td>
      <td>{props.users.email}</td>
    </tr>
  ); */



class Profile extends Component {
  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
  };
        render(){
          const { user } = this.props.auth;
            return (
              <div>
                  <br/>
                <h2> User Profile </h2>
                <br/>
                <h3 style={{paddingLeft: 20}}> {user.name} </h3>
                <h3> {user.email} </h3>
                <h3> {user.date} </h3>
                <br/>
                <h4> [add list of syllabuses user uploaded?]</h4>
              </div>




            );
          }
}

Profile.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect (
  mapStateToProps,
  { logoutUser }
)(Profile);