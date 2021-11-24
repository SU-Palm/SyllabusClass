import React, { Component } from "react";
import { Link } from "react-router-dom";

class Navbar extends Component {
  render() {
    return (
      <div className="navbar-fixed">
        <nav className="z-depth-0">
          <div className="nav-wrapper white">
            <ul>
                <li>
                    <Link
                        to="/"
                        style={{
                            fontFamily: "monospace",
                            display: "flex",
                            fontSize: "2.1rem",
                            color: "black",
                            alignItems: "center"
                        }}
                        className="black-text "
                    >
                    <span className="material-icons" style={{
                            marginRight: "12px"
                        }}>code</span>
                    <span>SYALLABI</span>
                    </Link>
                </li>
                <li>
                    <Link
                        to="/create"
                        style={{
                            fontFamily: "monospace",
                            fontSize: "15"
                        }}
                        className="btn btn-large btn-flat waves-effect white black-text"
                    >
                    Upload Syllabus 
                    </Link>
                </li>
            </ul>
          </div>

        </nav>
      </div>
    );
  }
}

export default Navbar;