import React from 'react';
import { Container } from './styles/section';

export default function Section({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}
