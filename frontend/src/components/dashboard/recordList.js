import React, { Component } from "react";
// This will require to npm install axios
import axios from 'axios';
import { Link } from "react-router-dom";
import {BsFillArrowRightCircleFill} from 'react-icons/bs';
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import PropTypes from "prop-types";

const Record = (props) => (
  <tr>
    <td>{props.record.person_name}</td>
    <td>{props.record.class_name}</td>
    <td>{props.record.class_number}</td>
    <td>{props.record.date_created}</td>
    <td>
      <Link to={"/edit/" + props.record._id}>Edit</Link> |
      <a
        href="/"
        onClick={() => {
          props.deleteRecord(props.record._id);
        }}
      >
        Delete
      </a>
    </td>
  </tr>
);

class RecordList extends Component {
  // This is the constructor that shall store our data retrieved from the database
  constructor(props) {
    super(props);
    this.deleteRecord = this.deleteRecord.bind(this);
    this.state = { records: [] };
  }

  // This method will get the data from the database.
  componentDidMount() {
    axios
      .get("/record/")
      .then((response) => {
        this.setState({ records: response.data });
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  // This method will delete a record based on the method
  deleteRecord(id) {
    axios.delete("/" + id).then((response) => {
      console.log(response.data);
    });

    this.setState({
      record: this.state.records.filter((el) => el._id !== id),
    });
    this.props.history.push("/dashboard");
  }

  // This method will map out the users on the table
  recordList() {
    return this.state.records.map((currentrecord) => {
      return (
        <Record
          record={currentrecord}
          deleteRecord={this.deleteRecord}
          key={currentrecord._id}
        />
      );
    });
  }

  // This following section will display the table with the records of individuals.
  render() {
    const { user } = this.props.auth;
    return (
      <div>
        <h3 style={{paddingLeft: 5}}id="syllabusText">Syllabi Uploaded</h3>
        
        <table className="table table-striped" style={{ marginTop: 20 }}>
          <thead>
            <tr>
              <th>Name</th>
              <th>Class Name</th>
              <th>Class Number</th>
              <th>Date</th>
              <th>Edit/Delete</th>

            </tr>
          </thead>
          <tbody>{this.recordList()}</tbody>
        </table>
        <button 
          type="button"
              style={{
                width: "150px",
                borderRadius: "3px",
                letterSpacing: "1.5px",
                marginTop: "1rem"
              }}
              onClick={this.onLogoutClick}
              className="btn"
          >
              Logout
        </button>
      </div>
    );
  }
}

RecordList.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logoutUser }
)(RecordList);