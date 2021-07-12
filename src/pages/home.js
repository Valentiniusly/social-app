import React, { useContext, useEffect, useState } from 'react';
import {
  Button,
  Separator,
  Section,
  Profile,
  Post,
  Popup,
  Form,
} from '../components';
import { FirebaseContext } from '../context/firebase';
import { convertDate, fetchUserData, fetchAllPosts } from '../helpers/utils';
import { likeHandler, removePostHandler } from '../helpers/handlers';
import { usePosts } from '../hooks';

export default function Home({ user, setUser }) {
  const { Firebase, firebase } = useContext(FirebaseContext);
  const [editPopup, setEditPopup] = useState(false);
  const [postPopup, setPostPopup] = useState(false);
  const [textarea, setTextarea] = useState('');
  const [error, setError] = useState();
  const [name, setName] = useState(user?.firstName);
  const [status, setStatus] = useState(user?.status);
  const [location, setLocation] = useState(user?.location);
  const [website, setWebsite] = useState(user?.website);
  const [posts, setPosts] = useState({});

  const signOutHandler = () => {
    firebase.auth().signOut();
    setUser(null);
    localStorage.removeItem('authUser');
  };

  const editProfileHandler = (e) => {
    e.preventDefault();

    firebase
      .firestore()
      .collection('users')
      .doc(user.uid)
      .update({
        firstName: name,
        status,
        location,
        website,
      })
      .then(() => fetchUserData({ firebase, uid: user.uid }))
      .then((data) => {
        setUser(data);
        localStorage.setItem('authUser', JSON.stringify(data));
        setEditPopup(false);
      })
      .catch((err) => setError(err));
  };

  const addPostHandler = (e) => {
    e.preventDefault();

    firebase
      .firestore()
      .collection('posts')
      .doc()
      .set({
        created: Firebase.firestore.FieldValue.serverTimestamp(),
        text: textarea,
        likes: [],
        uid: user.uid,
        name: user.firstName,
      })
      .then(() => {
        setTextarea('');
        setPostPopup(false);
      })
      .catch((err) => setError(err));
  };

  useEffect(() => {
    const allPosts = fetchAllPosts();
    const unsubscribe = usePosts({ allPosts, setPosts });
    return () => unsubscribe();
  }, []);

  return (
    <>
      <Separator>
        <Section gridArea="aside">
          <Profile>
            <Profile.Picture src="https://www.pcfix.lt/wp-content/uploads/2019/10/default-user-image.png" />
            <Profile.Name>{user?.firstName || <br />}</Profile.Name>
            <Profile.Status>{user?.status || <br />}</Profile.Status>
            <Profile.Location>{user?.location || <br />}</Profile.Location>
            <Profile.Link href={user?.website} target="_blank">
              Website
            </Profile.Link>
            <Profile.Date>
              Joined&nbsp;
              {user && convertDate(user.created)}
            </Profile.Date>
            <Profile.Edit onClick={() => setEditPopup(true)} />
            <Profile.AddPost onClick={() => setPostPopup(true)} />
            <Button onClick={signOutHandler}>Signout</Button>
          </Profile>
        </Section>
        <Section gridArea="content">
          {Object.values(posts)
            .sort(
              (a, b) =>
                +new Date(a.created?.seconds * 1000) -
                +new Date(b.created?.seconds * 1000)
            )
            .reverse()
            .map((post) => (
              <Post key={post.id}>
                <Post.Picture src="https://www.pcfix.lt/wp-content/uploads/2019/10/default-user-image.png" />
                <Post.Content>
                  <Post.Name to={`/user/${post.uid}`}>
                    {post.name || <br />}
                  </Post.Name>
                  <Post.Date>
                    {(post.created && convertDate(post.created)) || <br />}
                  </Post.Date>
                  {post.text?.split('\n').map((p) => (
                    <Post.Text key={p}>{p}</Post.Text>
                  ))}
                  <Post.Likes
                    like={() => likeHandler({ user, post })}
                    liked={post.likes?.includes(user.uid)}
                  >
                    {post.likes?.length ? post.likes.length : null}
                  </Post.Likes>
                  <Post.Expand />
                  {post.uid === user.uid ? (
                    <Post.Delete remove={() => removePostHandler({ post })} />
                  ) : null}
                </Post.Content>
              </Post>
            ))}
        </Section>
      </Separator>

      {editPopup ? (
        <Popup close={() => setEditPopup(false)}>
          <Form onSubmit={editProfileHandler}>
            <Form.Title>Edit your profile</Form.Title>

            {error && (
              <Form.Error close={() => setError(null)}>{error}</Form.Error>
            )}

            <Form.Input
              label="Name"
              value={name}
              onChange={({ target }) => setName(target.value)}
            />
            <Form.Input
              label="Status"
              value={status}
              onChange={({ target }) => setStatus(target.value)}
            />
            <Form.Input
              label="Location"
              value={location}
              onChange={({ target }) => setLocation(target.value)}
            />
            <Form.Input
              label="Website"
              value={website}
              onChange={({ target }) => setWebsite(target.value)}
            />
            <Button type="submit">Save</Button>
          </Form>
        </Popup>
      ) : null}

      {postPopup ? (
        <Popup close={() => setPostPopup(false)}>
          <Form onSubmit={addPostHandler}>
            <Form.Title>New post</Form.Title>

            {error && (
              <Form.Error close={() => setError(null)}>{error}</Form.Error>
            )}

            <Form.Textarea
              label="What's new?"
              value={textarea}
              onChange={({ target }) => setTextarea(target.value)}
            />

            <Button disabled={textarea === ''}>Publish</Button>
          </Form>
        </Popup>
      ) : null}
    </>
  );
}
