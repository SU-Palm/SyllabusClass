import React, { Component } from "react";
// This will require to npm install axios
import axios from 'axios';

 
export default class Create extends Component {
  // This is the constructor that stores the data.
  constructor(props) {
    super(props);
 
    this.onChangePersonName = this.onChangePersonName.bind(this);
    this.onChangeClassName = this.onChangeClassName.bind(this);
    this.onChangeDate= this.onChangeDate.bind(this);
    this.onChangeClassNumber = this.onChangeClassNumber.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
 
    this.state = {
      person_name: "",
      class_name: "",
      date_created: "",
      class_number: "",
      class_pdf: "",
    };
  }
 
  // These methods will update the state properties.
  onChangePersonName(e) {
    this.setState({
      person_name: e.target.value,
    });
  }
 
  onChangeClassName(e) {
    this.setState({
      class_name: e.target.value,
    });
  }

  onChangeDate(e) {
    this.setState({
      date_created: e.target.value,
    });
  }
 
  onChangeClassNumber(e) {
    this.setState({
      class_number: e.target.value,
    });
  }

  onChangeClassPdf(e) {
    this.setState({
      class_pdf: e.target.file,
    });
  }
// This function will handle the submission.
  onSubmit(e) {
    e.preventDefault();
 
    // When post request is sent to the create url, axios will add a new record(newperson) to the database.
    const newperson = {
      person_name: this.state.person_name,
      class_name: this.state.class_name,
      date_created: this.state.date_created,
      class_number: this.state.class_number,
      class_pdf: this.state.class_pdf,
    };
 
    axios
      .post("/record/add", newperson)
      .then((res) => console.log(res.data));
 
    // We will empty the state after posting the data to the database
    this.setState({
      person_name: "",
      class_name: "",
      date_created: "",
      class_number: "",
      class_pdf: "",
    });
  }
 
  // This following section will display the form that takes the input from the user.
  render() {
    return (
      <div style={{ marginTop: 20 }}>
        <h3>Upload Syllabus</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label style={{paddingLeft: 5, fontSize: 15}}>Name</label>
            <input
              type="text"
              className="form-control"
              value={this.state.person_name}
              onChange={this.onChangePersonName}
            />
          </div>
          <div className="form-group">
            <label style={{paddingLeft: 5, fontSize: 15}}>Class Name</label>
            <input
              type="text"
              className="form-control"
              value={this.state.class_name}
              onChange={this.onChangeClassName}
            />
          </div>
          <div className="form-group">
            <label style={{paddingLeft: 5, fontSize: 15}}>Class Number</label>
            <input
              type="text"
              className="form-control"
              value={this.state.person_position}
              onChange={this.onChangeClassNumber}
            />
          </div>
          <div className="form-group">
            <label style={{paddingLeft: 5, fontSize: 15}}>Date Created</label>
            <input
              type="text"
              className="form-control"
              value={this.state.date_created}
              onChange={this.onChangeDate}
            />
          </div>
          
          <div className="form-group">
            <label style={{paddingLeft: 5, fontSize: 15}}>File Upload</label>
            <input
              type="file"
              className="form-control"
              value={this.state.class_pdf}
              onChange={this.onChangeClassPdf}
            />
          </div>

          <div className="form-group">
            <input
              type="submit"
              value="Submit"
              className="btn btn-primary"
            />
          </div>
        </form>
      </div>
    );
  }
}