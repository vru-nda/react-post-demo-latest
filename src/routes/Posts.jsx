import {Outlet} from 'react-router-dom';
import PostList from '../components/PostsList';

const Posts = () => {
  return (
    <main>
      <Outlet />
      <PostList />
    </main>
  );
};

export default Posts;

export const loader = async () => {
  const res = await fetch('http://localhost:8080/posts');
  const data = await res.json();

  if (!res.ok) {
    return {error: res.statusText, posts: []};
  } else {
    return {error: undefined, posts: data.posts};
  }
};
