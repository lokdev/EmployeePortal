import React from "react";
class Experience extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "0" };

    this.handleChange = this.handleChange.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }
  // handleSubmit() {
  //   alert(this.state.value);
  // }

  render() {
    return (
      <form>
        <label>Experience:</label>
        <select value={this.state.value} onChange={this.handleChange}>
          <option value="0">0</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
        {/* <input type="submit" value="Submit" /> */}
      </form>
    );
  }
}
export default Experience;
