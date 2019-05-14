import * as React from "react";
import { Component } from "react";
import InputText from "./components/InputText";
import HelloOutput from "./components/HelloOutput";

class App extends React.Component {
  state = { name: "NoName" };
  render() {
    let outputMarkup = null;
    if (this.state.name != "NoName") {
      outputMarkup = <HelloOutput name={this.state.name} />;
    }

    return (
      <div>
        <h2>Type Your Name Here!</h2>
        <InputText
          name={this.state.name}
          handleClick={(input: string) => {
            console.log(input);
            this.setState({ name: input });
            console.log(this.state);
          }}
        />
        {outputMarkup}
      </div>
    );
  }
}

export default App;
