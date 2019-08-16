import React, { Component } from 'react';

import './Person.css';

class Person extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: {},
      render: false,
      show: false,
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(prevState => ({
      show: !prevState.show
    }));
  }



  render() {
    const props = this.props.data;

    function firstLetterUC(word){return word.charAt(0).toUpperCase() + word.slice(1)};
    const imageT = props.picture.thumbnail;
    const imageL = props.picture.large;
    const firstName = firstLetterUC(props.name.first);
    const lastName = firstLetterUC(props.name.last);
    const fullName = firstName + " " + lastName;
    const location = firstLetterUC(props.location.city) + ", " + props.nat;
    const userName = props.login.username;
    const email = props.email;
    const age = props.dob.age;
    return (
      <div className= 'userContainer'>
        <div className='image'>
          <img className='artImg' src={props ? imageT : ''} onClick={this.handleClick}/>
        </div>
        <div className = 'subCont'>
          <span className = 'userName'>{props ? fullName : ''}</span>
          <span className = 'userLocation'>({props ? location : ''})</span>
        </div>
        {this.state.show
        ?<div className="udLayer" onClick={this.handleClick}>
        <div className="udContainer">
          <div className="userPic">
            <img className='userImg' src={props ? imageL : ''} />
          </div>
          <div className="userInfo">
            <div className="infoRow"><span className="rowTittle"> Username:</span> <span>{props?userName:""}</span></div>
            <div className="infoRow"><span className="rowTittle">First Name:</span> <span>{props?firstName:""}</span></div>
            <div className="infoRow"><span className="rowTittle">Last Name:</span> <span>{props?lastName:""}</span></div>
            <div className="infoRow"><span className="rowTittle">Age:</span> <span>{props?age:""}</span></div>
            <div className="infoRow"><span className="rowTittle">Email:</span> <span>{props?email:""}</span></div>
            <div className="infoRow"><span className="rowTittle">Location:</span> <span>{props?location:""}</span></div>
          </div>
        </div>
      </div>
        :<div className="udLayer hide" onClick={this.handleClick}>
        <div className="udContainer">
          <div className="userPic">
            <img className='userImg' src={props ? imageL : ''} />
          </div>
          <div className="userInfo">
          <span> Username: {props?userName:""}</span>
          <span>First Name: {props?firstName:""}</span>
          <span>Last Name: {props?lastName:""}</span>
          <span>Age: {props?age:""}</span>
          <span>Email: {props?email:""}</span>
          <span>Location: {props?location:""}</span>
          </div>
        </div>
      </div>
        }
      </div>
    );
  }
}

export default Person;
