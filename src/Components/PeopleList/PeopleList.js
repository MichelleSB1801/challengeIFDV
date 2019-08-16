import React, { Component } from 'react';
import Person from '../Person/Person';


import './PeopleList.css';

class PeopleList extends Component {
  render() {    
    return (
      <div className="peopleContainer">
        {this.props.data
          ? this.props.data.map((m,i) =><Person data={m} key={i} />)
          : ""
        }
      </div>
    );
  }
}
export default PeopleList;
