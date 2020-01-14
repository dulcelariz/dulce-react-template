import React from 'react';

interface LinkProps {
  text: string;
}

export default class Link extends React.Component<LinkProps> {
  render() {
    return (
      <a href="/">{this.props.text}</a>
    );
  }
}
