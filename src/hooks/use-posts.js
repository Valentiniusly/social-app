export default function usePosts({ allPosts, setPosts }) {
  const unsubscribe = allPosts.onSnapshot((userPosts) => {
    userPosts.docChanges().forEach((change) => {
      if (change.type === 'removed') {
        setPosts((prevState) => {
          const newState = { ...prevState };
          delete newState[change.doc.id];
          return newState;
        });
      }
      if (change.type === 'modified') {
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
}
