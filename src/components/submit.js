import React from "react";

class submit extends React.Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit() {
    alert("submitted successfully");
  }
  render() {
    return <input type="submit" value="Submit" onClick={this.handleSubmit} />;
  }
}

export default submit;
