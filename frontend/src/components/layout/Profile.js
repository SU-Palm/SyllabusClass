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
        render(){
            return (
              <div class="center">
                  <br/>
                <h2> User Profile </h2>
                <br/>
                <h3> name goes here </h3>
                <h3> email goes here </h3>
                <br/>
                <h4> possibly add list of syllabuses user uploaded</h4>
              </div>
            );
          }
}

export default Profile;