import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Redirect,
Navigate,
} from "react-router-dom";

import INPUT from "./components/input/input"
import REPORT from "./components/report/report"
import HEADER from "./components/header/header"
import UPDATE from "./components/update/update"

export default class App extends Component {
  render() {
    return (
      <Router>
      <div>
        <HEADER/>
        <Routes>
          <Route path='/input' element={<INPUT/>}/>
          <Route path='/report' element={<REPORT/>}/>
          <Route path='/header' element={<HEADER/>}/>
          <Route path='/update' element={<UPDATE/>}/>

          <Route path="/" element={<Navigate replace to = "/input"/>} />
          <Route path="*" element={<Navigate replace to = "/input"/>} />
        </Routes>
      </div>
      </Router>
    );
  }
}
