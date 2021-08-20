import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Form, Button } from '../components';
import { FirebaseContext } from '../context/firebase';

export default function Signin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const { firebase } = useContext(FirebaseContext);
  const history = useHistory();

  const isInvalid = email === '' || password === '';

  const handleSubmit = (event) => {
    event.preventDefault();

    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => history.push('/'))
      .catch((err) => {
        setError(err.message);
      });
  };
  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Form.Title>Signin</Form.Title>
        {error && <Form.Error close={() => setError('')}>{error}</Form.Error>}

        <Form.Input
          type="email"
          label="Email"
          value={email}
          onChange={({ target }) => setEmail(target.value)}
          required
        />
        <Form.Input
          type="password"
          label="Password"
          value={password}
          onChange={({ target }) => setPassword(target.value)}
          required
        />

        <Button disabled={isInvalid} type="submit">
          Login
        </Button>
      </Form>
    </>
  );
}
