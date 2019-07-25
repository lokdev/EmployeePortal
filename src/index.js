import React from "react";
import ReactDOM from "react-dom";
import PersonalDetails from "./components/personaldetails";
import LastName from "./components/lastname";
import DateOfBirth from "./components/dateofbirth";
import Experience from "./components/experience";
import Skills from "./components/skills";
import Submit from "./components/submit";
import "./styles.css";

function App() {
  return (
    <div className="App">
      <PersonalDetails />
      <LastName />

      <DateOfBirth />
      <Experience />
      <Skills />
      <Submit />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
