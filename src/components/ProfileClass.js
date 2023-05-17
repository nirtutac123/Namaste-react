import React from "react";
class ProfileClass extends React.Component {
  constructor(props) {
    super(props);
    //Create State
    this.state = {
      count: 0,
      count2: 0,
    };
    console.log("Child - Constructor" + this.props.name);
  }
  componentDidMount() {
    //API Calls
    console.log("componentDidMount" + this.props.name);
  }

  render() {
    const { count } = this.state;
    console.log("Child + render" + this.props.name);
    return (
      <div>
        <h1>Profile Class Component</h1>
        <h2>XYZ: {this.props.xyz} </h2>
        <h2>Name: {this.props.name} </h2>
        <h2>Count: {count}</h2>
        <button onClick={() => this.setState({ count: count + 1 })}></button>
      </div>
    );
  }
}

export default ProfileClass;
