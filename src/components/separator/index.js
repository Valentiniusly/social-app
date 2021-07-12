import React from 'react';
import { Container } from './styles/separator';

export default function Separator({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}
