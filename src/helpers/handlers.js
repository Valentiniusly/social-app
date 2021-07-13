import { Firebase, firebase } from '../lib/firabase.prod';

export const likeHandler = ({ user, post }) => {
  if (!post.likes.includes(user.uid)) {
    firebase
      .firestore()
      .collection('posts')
      .doc(post.id)
      .update({ likes: Firebase.firestore.FieldValue.arrayUnion(user.uid) });
  } else {
    firebase
      .firestore()
      .collection('posts')
      .doc(post.id)
      .update({ likes: Firebase.firestore.FieldValue.arrayRemove(user.uid) });
  }
};

export const removePostHandler = ({ post }) => {
  firebase.firestore().collection('posts').doc(post.id).delete();
};
