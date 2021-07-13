export default function usePosts({ reqPosts, setPosts }) {
  const unsubscribe = reqPosts.onSnapshot((userPosts) => {
    const temp = [];
    userPosts.forEach((post) => {
      temp.push({
        ...post.data(),
        id: post.id,
      });
    });
    setPosts(temp);
  });

  return () => unsubscribe();
}
