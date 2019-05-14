import * as React from "react";
import { Component } from "react";

export interface HelloOutputProps {
  name: string;
}

class HelloOutput extends React.Component<HelloOutputProps> {
  render() {
    return (
      <div>
        <h1>Hello {this.props.name.toUpperCase()}</h1>
      </div>
    );
  }
}

export default HelloOutput;
