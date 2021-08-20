import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Form, Button } from '../components';
import { FirebaseContext } from '../context/firebase';

export default function Signup() {
  const [firstName, setFirstName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const history = useHistory();
  const { Firebase, firebase } = useContext(FirebaseContext);

  const isInvalid = firstName === '' || email === '' || password === '';

  const handleSubmit = (event) => {
    event.preventDefault();

    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((result) =>
        firebase.firestore().collection('users').doc(result.user.uid).set({
          firstName,
          email,
          created: Firebase.firestore.FieldValue.serverTimestamp(),
          status: 'Simple dimple or Pop-it, that is the question',
          location: 'Red square',
          website: 'https://www.instagram.com/valentiniusly',
          uid: result.user.uid,
        })
      )
      .then(() => {
        history.push('/');
      })
      .catch((err) => {
        setError(err.message);
      });
  };

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Form.Title onClick={() => setError('')}>Create new account</Form.Title>

        {error && <Form.Error close={() => setError(null)}>{error}</Form.Error>}

        <Form.Input
          label="First Name"
          value={firstName}
          onChange={({ target }) => setFirstName(target.value)}
          required
        />
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
          Register
        </Button>
      </Form>
    </>
  );
}
