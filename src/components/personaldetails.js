import React from "react";

class PersonalDetails extends React.Component {
  render() {
    return (
      <form>
        <label>
          Name:
          <input type="text" name="FirstName" />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default PersonalDetails;
