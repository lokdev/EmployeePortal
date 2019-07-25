import React from "react";
class Skills extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "select" };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  render() {
    return (
      <form>
        <label>Skills:</label>
        <select value={this.state.value} onChange={this.handleChange}>
          <option value="java">java</option>
          <option value="python">python</option>
          <option value="React">React</option>
          <option value="angular">Angular</option>
        </select>
      </form>
    );
  }
}
export default Skills;
