import React from 'react';

interface TitleProps {
  sizeElement: string;
  text: string;
}

export default class Title extends React.Component<TitleProps> {
  
  render() {
    switch(this.props.sizeElement) {
      case 'h1':
        return <h1>{this.props.text}</h1>
      default:
        return <h1> Title: Default title </h1>
    }
  }
}
