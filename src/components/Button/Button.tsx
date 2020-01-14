import React from 'react';

interface ButtonProps {
  textDefault: string;
}

export default class Button extends React.Component<ButtonProps> {

  render() {
    return (
      <button>{this.props.textDefault}</button>
    );
  }
}
