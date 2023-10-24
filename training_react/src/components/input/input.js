import * as moment from "moment/moment";
import React, { Component } from "react";
import { httpClient } from "../../utils/HttpClient";

class Input extends Component {
  constructor(props) {
    super(props);
    this.state = {
      emp_id: "",
      first_name: "",
      last_name: "",
      email: "",
      phone: "",
      hire_date: moment().add(0, "days").format("YYYY-MM-DD"),
      job_id: "",
      salary: "",
      manager_id: "",
      dept_id: "",
    };
  }

  click_button = async () => {
    console.log(this.state);
    let command = await httpClient.post("emp/new_emp", this.state);
    console.log(command);

    if (command.data.api_result == "OK") {
      alert("Complete");
    } else {
      alert("Fail!");
    }
  };

  input_Keypress = (event) => {
    if (event.key === "Enter") {
      alert(this.state.emp_id);
    }
  };

  render() {
    return (
      
      <div className="content-wrappe">
        
        <h1 style={{ textAlign: "center" }}> Input EMP</h1>
        
        <div
          className="row"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
          }}
        >
          <div className="card card-info" style={{ width: "50%" }}>
            <div className="card-header">
              <h3 className="card-title">Input Form</h3>
            </div>

            <div className="card-body">
              <center><img id="target" src="/dist/img/avatar5.png" /> </center> 
              <br/>
              <div className="form-group row">
                <label className="col-sm-2 ">EMP ID</label>
                <div className="col-sm-10">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter Employee ID"
                    value={this.state.emp_id}
                    onChange={(e) => {
                      this.setState({ emp_id: e.target.value });
                    }}
                    onKeyPress={this.input_Keypress}
                  />
                </div>
              </div>

              <div className="form-group row">
                <label className="col-sm-2 ">Firstname</label>
                <div className="col-sm-10">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter Firstname"
                    value={this.state.first_name}
                    onChange={(e) => {
                      this.setState({ first_name: e.target.value });
                    }}
                  />
                </div>
              </div>

              <div className="form-group row">
                <label className="col-sm-2 ">Lastname</label>
                <div className="col-sm-10">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter Lastname"
                    value={this.state.last_name}
                    onChange={(e) => {
                      this.setState({ last_name: e.target.value });
                    }}
                  />
                </div>
              </div>

              <div className="form-group row">
                <label className="col-sm-2 ">Email</label>
                <div className="col-sm-10">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter Email"
                    value={this.state.email}
                    onChange={(e) => {
                      this.setState({ email: e.target.value });
                    }}
                  />
                </div>
              </div>

              <div className="form-group row">
                <label className="col-sm-2 ">Phone</label>
                <div className="col-sm-10">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter Phone Number"
                    value={this.state.phone}
                    onChange={(e) => {
                      this.setState({ phone: e.target.value });
                    }}
                  />
                </div>
              </div>

              <div className="form-group row">
                <label className="col-sm-2 ">Hire Date</label>
                <div className="col-sm-10">
                  <input
                    type="date"
                    className="form-control"
                    value={this.state.hire_date}
                    onChange={(e) => {
                      this.setState({
                        hire_date: moment(e.target.value).format("YYYY-MM-DD"),
                      });
                    }}
                  />
                </div>
              </div>

              <div className="form-group row">
                <label className="col-sm-2 ">Job ID</label>
                <div className="col-sm-10">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter Job ID"
                    value={this.state.job_id}
                    onChange={(e) => {
                      this.setState({ job_id: e.target.value });
                    }}
                  />
                </div>
              </div>

              <div className="form-group row">
                <label className="col-sm-2 ">Salary</label>
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
                <label className="col-sm-2 ">Manager ID</label>
                <div className="col-sm-10">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter Manager ID"
                    value={this.state.manager_id}
                    onChange={(e) => {
                      this.setState({ manager_id: e.target.value });
                    }}
                  />
                </div>
              </div>

              <div className="form-group row">
                <label className="col-sm-2 ">Dept ID</label>
                <div className="col-sm-10">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter Dept ID"
                    value={this.state.dept_id}
                    onChange={(e) => {
                      this.setState({ dept_id: e.target.value });
                    }}
                  />
                </div>
              </div>
              <br />
              <div className="form-group row">
                <button
                  type="submit"
                  className="btn btn-info"
                  onClick={(e) => {
                    e.preventDefault();
                    this.click_button();
                  }}
                >
                  Sing in
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Input;
