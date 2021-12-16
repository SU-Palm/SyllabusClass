import React, { Component } from "react";
// This will require to npm install axios
import axios from 'axios';
import { withRouter } from "react-router";
 
class ViewList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      person_name: "",
      class_name: "",
      class_number: "",
      date_created: ""
    };
  }

  componentDidMount() {
    axios
      .get("/record/" + this.props.match.params.id)
      .then((response) => {
        this.setState({
          person_name: response.data.person_name,
          class_name: response.data.class_name,
          class_number: response.data.class_number,
          date_created: response.data.date_created,
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  render() {
    return (
      <div>
        <h3 align="center">View Syllabus</h3>
        <h3>Person Name: {this.state.person_name}</h3>
        <h3>Class Name: {this.state.class_name}</h3>
        <h3>Class Number: {this.state.class_number}</h3>
        <h3>Class Date: {this.state.date_created}</h3>
        <a href="https://imgur.com/2c2Qj8t"><img src="https://i.imgur.com/2c2Qj8t.jpg" title="source: imgur.com" style={{width:"600px",height:"800px",}}/></a>  
      </div>
    );
  }
}

export default withRouter(ViewList);