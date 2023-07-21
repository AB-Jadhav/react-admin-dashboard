import React from "react";
import "./newUser.css";

export default function NewUser() {
  return (
    <div className="newUser">
      <h1 className="newUserTitle">New User</h1>
      <form className="newUserForm">
        <div className="newUserItem">
          <label>UserName</label>
          <input type="text" placeholder="John"></input>
        </div>
        <div className="newUserItem">
          <label>FullName</label>
          <input type="text" placeholder="John Wick"></input>
        </div>
        <div className="newUserItem">
          <label>Email</label>
          <input type="email" placeholder="John@gmail.com"></input>
        </div>
        <div className="newUserItem">
          <label>Password</label>
          <input type="password" placeholder="password"></input>
        </div>
        <div className="newUserItem">
          <label>Phone</label>
          <input type="text" placeholder="+91 911 943 4469"></input>
        </div>
        <div className="newUserItem">
          <label>Address</label>
          <input type="text" placeholder="New York | USA"></input>
        </div>
        <div className="newUserItem">
          <label>Gender</label>
          <div className="newUserGender">
            <input
              type="radio"
              placeholder="gender"
              id="male"
              value="male"
            ></input>
            <label For="male">Male</label>
            <input
              type="radio"
              placeholder="gender"
              id="female"
              value="female"
            ></input>
            <label For="female">Female</label>
            <input
              type="radio"
              placeholder="gender"
              id="other"
              value="other"
            ></input>
            <label For="other">Other</label>
          </div>
        </div>
        <div className="newUserItem">
          <label>Active</label>
          <select className="newUserSelect" name="active" id="active">
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>
        <button className="newUserButton">Create</button>
      </form>
    </div>
  );
}
