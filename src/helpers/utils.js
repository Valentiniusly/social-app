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
  return firebase
    .firestore()
    .collection('users')
    .doc(uid)
    .get()
    .then((doc) => doc.data());
}

export function fetchAllPosts() {
  return firebase.firestore().collection('posts').orderBy('created', 'desc');
}

export const fetchUserPosts = ({ setPosts, uid }) => {
  const unsubscribe = firebase
    .firestore()
    .collection('posts')
    .where('uid', '==', uid)
    .onSnapshot((userPosts) => {
      userPosts.docChanges().forEach((change) => {
        if (change.type === 'removed') {
          setPosts((prevState) => {
            const newState = { ...prevState };
            delete newState[change.doc.id];
            return newState;
          });
        }
      });
      userPosts.docs.forEach((post) => {
        const data = post.data();
        setPosts((prev) => ({
          ...prev,
          [post.id]: {
            ...data,
            id: post.id,
          },
        }));
      });
    });

  return () => unsubscribe();
};
