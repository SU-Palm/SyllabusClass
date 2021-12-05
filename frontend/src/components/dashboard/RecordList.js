import React, { Component } from "react";
// This will require to npm install axios
import axios from 'axios';
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import PropTypes from "prop-types";
import SearchBar from "../layout/SearchBar";

const Record = (props) => (
  <tr>
    <td>{props.record.person_name}</td>
    <td>{props.record.class_name}</td>
    <td>{props.record.class_number}</td>
    <td>{props.record.date_created}</td>
    <td>{props.record.class_pdf}</td>

    <td>
      <Link to={"/edit/" + props.record._id}>Edit</Link> |
      <a
        href="/dashboard"
        onClick={() => {
          props.deleteRecord(props.record._id);
        }}
      >
        Delete
      </a>
    </td>
    <td>
      <Link to={"/view/" + props.record._id}>View</Link> 
    </td>
  </tr>
);

class RecordList extends Component {
  // This is the constructor that shall store our data retrieved from the database
  constructor(props) {
    super(props);
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
    return (
      <div>
        <SearchBar />
        <div style={{paddingBottom: 15}}></div>
        <h3 id="syllabusText">Syllabi Uploaded</h3>
        <table className="table table-striped" style={{ marginTop: 20}}>
          <thead>
            <tr>
              <th>Name</th>
              <th>Class Name</th>
              <th>Class Number</th>
              <th>Date</th>
              <th></th>
              <th>Edit/Delete</th>
              <th>View</th> 
            </tr>
          </thead>
          <tbody>{this.recordList()}</tbody>
        </table>
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