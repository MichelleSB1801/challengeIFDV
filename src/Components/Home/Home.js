import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Header from "../Header/Header"
import PeopleList from "../PeopleList/PeopleList"

import './Home.css';

class Home extends Component {
  
  render() {    
    return (
      <div className = 'homeBG'>
        <Header />
        {this.props.data
          ? <PeopleList data={this.props.data} />
          : ""
        }
         
      </div>
    );
  }
}

export default Home;
