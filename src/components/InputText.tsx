import * as React from "react";
import { Component } from "react";

export interface InputTextProps {
  name: string;
  handleClick: any;
}

class InputText extends React.Component<InputTextProps> {
  nameRef: React.RefObject<HTMLInputElement>;

  constructor(props: InputTextProps) {
    super(props);
    this.nameRef = React.createRef();
  }

  render() {
    return (
      <div>
        <input type="text" ref={this.nameRef} />
        <br />
        <button
          onClick={() => this.props.handleClick(this.nameRef.current.value)}
        >
          Get Hello Message
        </button>
      </div>
    );
  }
}

export default InputText;
