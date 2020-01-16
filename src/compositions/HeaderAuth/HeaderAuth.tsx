import React from 'react';
import { Title, Logo } from '../../components'

interface  HeaderAuthProps {
  text: string;
}

function HeaderAuth(props: HeaderAuthProps) {
  return (
    <div>
      <Title sizeElement="h1" text={props.text} />
      <Logo  />
    </div>
  );
}

export default HeaderAuth;
