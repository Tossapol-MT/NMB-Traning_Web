import React, { Component } from "react";
import { httpClient } from "../../utils/HttpClient";
import Swal from "sweetalert2";
import { redirect } from "react-router-dom";
import { render } from "@testing-library/react";

class update extends Component {
  constructor(props) {
    super(props);

    this.state = {
      emp_id: "",
      salary: "",
      list_emp: [],
    };
  }

  componentDidMount = async () => {
    let command = await httpClient.post("emp/top_100");
      // emp_id: this.state.emp_id,
      // salary: this.state.salary,
      this.setState({ list_emp: command.data.result });
    
    // console.log(command.data.result);
  };

  renderTableRow = () => {
    try {
      if (this.state.list_emp !== null) {
        return this.state.list_emp.map((item) => (
          
          <option key={item.emp_id}> {item.emp_id}</option>
        ));
      }
    } catch (error) {}
  };

  click_button = async () => {
    let send_data = await httpClient.post("emp/change_salary", {
      emp_id : this.state.emp_id,
      salary : this.state.salary,
    })

    if (send_data.data.api_result == "ok") {
      //alert("Complete");
      await Swal.fire({
        icon: "success",
        title: "Update Complete",
        showConfirmButton: false,
      });
      window.location.reload(false);
      return;
    } else {
      console.log(send_data.data);
      //alert("Fail");
      Swal.fire({
        icon: "error",
        title: "Update Fail",
        text: send_data.data.error.name,
      });
      return;
    } 
  }
  click_button_del = async () => {
     let send_data = await httpClient.post("emp/delete_data", {
      emp_id : this.state.emp_id,
    })
    if (send_data.data.api_result == "ok") {
      //alert("Complete");
      await Swal.fire({
        icon: "success",
        title: "Delete Complete",
        showConfirmButton: false,
      });
      window.location.reload(false);
      return;
    } else {
      console.log(send_data.data);
      //alert("Fail");
      Swal.fire({
        icon: "error",
        title: "Delete Fail",
        text: send_data.data.error.name,
      });
      return;
    } 
  }

  render() {
    return (
      <div className="content-wrappe">
        <div className="card card-info">
          <div className="card-header">
            <h3 className="card-title">Update</h3>
          </div>

          <div className="card-body">
            <div className="form-group row">
              <label className="col-sm-2">EMP ID</label>
              <div className="col-sm-10">
                <select
                  className="form-control"
                  value={this.state.emp_id}
                  onChange={(e) => {
                    this.setState({ emp_id: e.target.value });
                  }}
                >
                  <option> --- </option>
                  {this.renderTableRow()}
                </select>
              </div>
            </div>

            <div className="form-group row">
              <label className="col-sm-2">Salary</label>
              <div className="col-sm-10">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Salary"
                  value={this.state.salary}
                  onChange={(e) => {
                    this.setState({ salary: e.target.value });
                  }}
                />
              </div>
            </div>
            <div className="form-group row">
              <button
                type="submit"
                className="btn btn-info"
                onClick={(e) => {
                  e.preventDefault();
                  this.click_button();
                }}
              >
                Update
              </button>
            </div>
            <div className="form-group row">
              <button
                type="submit"
                className="btn btn-danger"
                onClick={(e) => {
                  e.preventDefault();
                  this.click_button_del();
                }}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default update;
