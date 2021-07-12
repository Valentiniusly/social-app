import React from 'react';
import CloseBtn from '../close/index';
import {
  Container,
  Base,
  Title,
  Input,
  Label,
  InputInner,
  Textarea,
  TextareaInner,
  Error,
} from './styles/form';

export default function Form({ children, ...restProps }) {
  return (
    <Container>
      <Base {...restProps}>{children}</Base>
    </Container>
  );
}

Form.Title = function FormTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};

Form.Input = function FormInput({ value, label, children, ...restProps }) {
  return (
    <Input>
      <InputInner {...restProps} value={value} />
      <Label value={value}>{label}</Label>
    </Input>
  );
};

Form.Textarea = function FormTextarea({
  value,
  label,
  children,
  ...restProps
}) {
  return (
    <Textarea>
      <TextareaInner {...restProps} value={value} />
      <Label value={value}>{label}</Label>
    </Textarea>
  );
};

Form.Error = function FormError({ close, children, ...restProps }) {
  return (
    <Error {...restProps}>
      <CloseBtn onClick={close} />
      {children}
    </Error>
  );
};
