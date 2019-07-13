import React from "react";
import ReactDOM from "react-dom";
import Cc from "./child";
import "./styles.css";

/*
function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <Cc test="nadeje" />
      <Cc test="douja" />
    </div>
  );
}
*/

class App extends React.Component {
  state = {
    inputName: "",
    fontsize: 15,
    users: ["fefres", "nadeje", "achref", "HAAAY"],
    filteredInput: ""
  };

  changeMe = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  click() {
    this.setState({
      users: this.state.users.concat(this.state.inputName)
    });
  }

  zoomIn = () => {
    this.setState({
      fontsize: this.state.fontsize + 1
    });
  };
  render() {
    const { users, inputName, filteredInput, fontsize } = this.state;
    return (
      <div className="App">
        <h1> {inputName} </h1>

        <input value={inputName} onChange={this.changeMe} name="inputName" />
        <input
          placeholder="filter"
          onChange={this.changeMe}
          name="filteredInput"
        />
        <button onClick={this.click.bind(this)}> Add name </button>
        <button onClick={this.zoomIn}> Zoom </button>
        <h1>Hello Nadeje</h1>
        <h2>First React Native!</h2>
        <Cc test="test1" />
        <Cc test="test2" />
        <Cc />
        {users
          .filter(elm =>
            elm.toLowerCase().includes(filteredInput.toLowerCase())
          )
          .map((user, i) => (
            <Cc test={user} test2={fontsize} x={i} />
          ))}

        <div className="xo">
          hahahahahahahah hahahahahahahahha hahahahaha hahahahahahahah
          hahahahahahahahhahahahahahahahah hahahahahahahahhahahahahahahahah
          hahahahahahahahhahahahahahahahah hahahahahahahahha hahahahahahahah
          hahahahahahahahhahahahahahahahah hahahahahahahahhahahahahahahahah
          hahahahahahahahhahahahahahahahah hahahahahahahahha hahahahahahahah
          hahahahahahahahhahahahahahahahah hahahahahahahahhahahahahahahahah
          hahahahahahahahha hahahahahahahah hahahahahahahahhahahahahahahahah
          hahahahahahahahhahahahahahahahah hahahahahahahahha
        </div>
      </div>
    );
  }
}
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
