import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Section, Profile, Separator, Post } from '../components';
import { fetchUserData, convertDate, fetchUserPosts } from '../helpers/utils';
import { FirebaseContext } from '../context/firebase';
import { likeHandler } from '../helpers/handlers';

export default function User({ authUser }) {
  const { firebase, Firebase } = useContext(FirebaseContext);
  const { uid } = useParams();
  const [user, setUser] = useState();
  const [posts, setPosts] = useState();

  useEffect(() => {
    fetchUserData({ firebase, uid }).then((data) => setUser(data));
    const unsubscribe = fetchUserPosts({ firebase, setPosts, uid });
    return () => unsubscribe();
  }, []);

  return (
    <Separator reverse>
      <Section gridArea="aside">
        <Profile>
          <Profile.Picture src="https://www.pcfix.lt/wp-content/uploads/2019/10/default-user-image.png" />
          <Profile.Name>{user?.firstName || <br />}</Profile.Name>
          <Profile.Status>{user?.status}</Profile.Status>
          <Profile.Location>{user?.location}</Profile.Location>
          <Profile.Link href={user?.website} target="_blank">
            Website
          </Profile.Link>
          <Profile.Date>
            Joined&nbsp;
            {user && convertDate(user.created)}
          </Profile.Date>
        </Profile>
      </Section>

      <Section gridArea="content">
        {posts &&
          Object.values(posts)
            .sort(
              (a, b) =>
                +new Date(b.created * 1000) - +new Date(a.created * 1000)
            )
            .map((post) => (
              <Post key={post.id}>
                <Post.Picture src="https://www.pcfix.lt/wp-content/uploads/2019/10/default-user-image.png" />
                <Post.Content noName>
                  <Post.Date>{convertDate(post.created)}</Post.Date>
                  {post.text.split('\n').map((p) => (
                    <Post.Text noName key={p}>
                      {p}
                    </Post.Text>
                  ))}
                  <Post.Likes
                    like={() =>
                      likeHandler({ firebase, Firebase, user: authUser, post })
                    }
                    liked={post.likes.includes(authUser?.uid)}
                  >
                    {post.likes.length ? post.likes.length : null}
                  </Post.Likes>
                  <Post.Expand />
                </Post.Content>
              </Post>
            ))}
      </Section>
    </Separator>
  );
}
