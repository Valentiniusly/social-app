import { useEffect, useContext } from 'react';
import { FirebaseContext } from '../context/firebase';

export default function useAuthListener({ setUser }) {
  const { firebase } = useContext(FirebaseContext);

  useEffect(() => {
    const listener = firebase.auth().onAuthStateChanged((authUser) => {
      if (authUser) {
        firebase
          .firestore()
          .collection('users')
          .doc(authUser.uid)
          .get()
          .then((doc) => {
            setUser(doc.data());
            localStorage.setItem('authUser', JSON.stringify(doc.data()));
          });
      } else {
        localStorage.removeItem('authUser');
        setUser(null);
      }
    });

    return () => listener();
  }, []);
}
