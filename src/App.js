import React from 'react';
import './App.css';
import { Button, Title, Input, Link, Logo } from './components';

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <Button textDefault="This is a Button." />
          <Title sizeElement="h1" text="This is a Title." />
          <Input placeholderText="This is an Input." />
          <Link text="This is a link."/>
          <Logo />
      </header>
    </div>
  );
}

export default App;
