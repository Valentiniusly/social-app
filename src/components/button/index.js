import React from 'react';
import { Container } from './styles/button';

export default function Button({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}
