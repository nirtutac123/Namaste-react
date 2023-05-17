import { Outlet } from "react-router-dom";
import Profile from "./Profile";
import ProfileFunctionalComponent from "./Profile";
import { Component } from "react";

class About extends Component {
  constructor(props);
  super(props);
}
// componentDidMount() {
//   //Best place to give API
//   console.log("Parent - componentDidMount");
// }
// render() {
//   console.log("Parent - render")
  return (
    <div>
      <h1>About Us</h1>
      <p>This is the Namaste React Live Cource Chapter 07- Finding the path</p>
      {/* <ProfileFunctionalComponent name={"Niruta"} /> */}
      <Profile name={"FirstClass"} xyz="abc"/>
      <Profile name={"SecondClass"} xyz="abc"/>
    </div>
  );

export default About;
//import Logo from "../assets/foodvillaa.png";
