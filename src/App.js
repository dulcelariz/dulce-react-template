import React from 'react';
import './App.css';
import { Title, Input, Link, Logo } from './components';
import { LoginForm } from './compositions'

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <Title sizeElement="h1" text="This is a Title." />
          <Input placeholderText="This is an Input." />
          <Link text="This is a link."/>
          <Logo />
          <LoginForm />
      </header>
    </div>
  );
}

export default App;
