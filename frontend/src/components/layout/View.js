import React, { Component } from "react";
// This will require to npm install axios
import axios from 'axios';
import { withRouter } from "react-router";
 
class View extends Component {
    componentDidMount() {
        axios
          .get("/record/" + this.props.match.params.id)
          .then((response) => {
            this.setState({
              person_name: response.data.person_name,
              class_name: response.data.class_name,
              class_number: response.data.class_number,
              class_pdf: response.data.class_pdf,
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
      </div>
    );
  }
}
 

export default withRouter(View);