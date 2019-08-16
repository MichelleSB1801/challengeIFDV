import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from './Components/Home/Home';

import './routes.css';

class Routes extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: {},
      render: false
    }
  }

  componentDidMount() {
    fetch("https://randomuser.me/api/?results=50")
      .then(res => res.json())
      .then(data => {        
        this.setState({
          data: data.results,
          render: true
        })
      })
  }
  
  render() {
    return (
      <Router>
        <div>
          {this.state.render
            ? <Route exact path="/" render={() => <Home data={this.state.data} />} />
            :""
          }
          {/* {this.state.render
            ? <Route path="/userdescrip" render={() => <UserDescrip data={this.state.data} />} />
            :""
          } */}
        </div>
      </Router>
    );
  }
}

export default Routes;
