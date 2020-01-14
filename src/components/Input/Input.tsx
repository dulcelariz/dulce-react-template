import React from 'react';

interface InputProps {
  placeholderText: string;
}

export default class Input extends React.Component<InputProps> {
  
  render() {
    return (
      <input placeholder={this.props.placeholderText}/>
    );
  }
}
