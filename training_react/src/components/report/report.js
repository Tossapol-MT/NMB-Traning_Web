import React, { Component } from "react";
import { httpClient } from "../../utils/HttpClient";
import Chart from "react-apexcharts";
import ReactApexChart from "react-apexcharts";

class Report extends Component {
  constructor(props) {
    super(props);

    this.state = {
      table_emp: [],
      series: [],
      options: {},
    };
  }

  componentDidMount = async () => {
    let command = await httpClient.post("emp/top_100");
    let salary_group = await httpClient.post("emp/salary_group");
    console.log(salary_group.data.result);
    this.setState({
      table_emp: command.data.result,

      series: [
        {
          name: "persons",
          data: [
            salary_group.data.result[0].qty,
            salary_group.data.result[1].qty,
            salary_group.data.result[2].qty,
            salary_group.data.result[3].qty,
            salary_group.data.result[4].qty,
          ],
        },
      ],
      options: {
        chart: {
          height: 350,
          type: "bar",
        },
        dataLabels: {
          enabled: true,
          formatter: function (val) {
            return val;
          },
        },

        xaxis: {
          categories: [ 
          salary_group.data.result[0].salary_range,
          salary_group.data.result[1].salary_range,
          salary_group.data.result[2].salary_range,
          salary_group.data.result[3].salary_range,
          salary_group.data.result[4].salary_range,
          ],
        },
        title: {
          align: "center",
          text: "Monthly Inflation in Argentina, 2002",
        },
      },
    });
  };

  renderTableRow = () => {
    try {
      if (this.state.table_emp !== null) {
        return this.state.table_emp.map((item) => (
          <tr>
            <td key={item.emp_id}> {item.emp_id} </td>
            <td key={item.first_name}> {item.first_name} </td>
            <td key={item.phone}> {item.phone} </td>
            <td key={item.salary}> {item.salary} </td>
          </tr>
        ));
      }
    } catch (error) {}
  };

  render() {
    return (
      <div className="content-wrappe">
        <div>
          <div className="card card-primary">
            <div className="card-header">
              <h3 className="card-title">Data</h3>
            </div>
            <div className="card-body">
              <table className="table table-head-fixed table-hover text-nowrap">
                <thead>
                  <tr>
                    <td>ID</td>
                    <td>Name</td>
                    <td>Phone</td>
                    <td>salary</td>
                  </tr>
                </thead>

                <tbody>{this.renderTableRow()}</tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="card card-primary">
          <div className="card-header">
            <h3 className="card-title">Chart</h3>
          </div>
          <div className="card-body">
            <div className="chart">
              <div id="chart">
                <ReactApexChart
                  options={this.state.options}
                  series={this.state.series}
                  type="bar"
                  height={350}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Report;
