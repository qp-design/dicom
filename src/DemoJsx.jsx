
import React from "react";
class DemoJsx extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      num: 1
    }
  }

  componentWillUnmount() {
    console.log('componentWillUnmount');
  }

  componentDidUpdate() {
    console.log('componentDidUpdate');
  }

  render() {
    return (
      <div onClick={() => this.setState(prev => ++prev.num)}>{this.state.num}</div>
    )
  }
}

export default DemoJsx;
