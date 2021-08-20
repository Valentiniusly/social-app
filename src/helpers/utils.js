import { firebase } from '../lib/firabase.prod';

export function convertDate(time) {
  const date = new Date(time?.seconds * 1000);
  return date.toLocaleDateString('default', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  });
}

export async function fetchUserData({ uid }) {
  const data = await firebase
    .firestore()
    .collection('users')
    .doc(uid)
    .get()
    .then((doc) => doc.data());
  return data;
}

export function fetchAllPosts() {
  return firebase.firestore().collection('posts').orderBy('created', 'desc');
}

export function fetchUserPosts({ uid }) {
  return firebase.firestore().collection('posts').where('uid', '==', uid);
}

export function getAllAvatarUrls({ setUrls }) {
  const unsub = firebase
    .firestore()
    .collection('users')
    .onSnapshot((users) =>
      users.forEach((item) => {
        setUrls((prevState) => {
          const newState = { ...prevState };
          newState[item.data().uid] = item.data().avatar;
          return newState;
        });
      })
    );

  return () => unsub();
}
