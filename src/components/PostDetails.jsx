import {useLoaderData, Link} from 'react-router-dom';

import Modal from '../components/Modal';
import classes from './PostDetails.module.css';

const PostDetails = () => {
  const {error, post} = useLoaderData();

  if (error) {
    return (
      <div style={{textAlign: 'center', color: 'white'}}>
        <p>{error}</p>
      </div>
    );
  }

  if (!post) {
    return (
      <Modal>
        <main className={classes.details}>
          <h1>Could not find post</h1>
          <p>Unfortunately, the requested post could not be found.</p>
          <p>
            <Link to='..' className={classes.btn}>
              Okay
            </Link>
          </p>
        </main>
      </Modal>
    );
  }

  return (
    <Modal>
      <main className={classes.details}>
        <p className={classes.author}>{post.author}</p>
        <p className={classes.text}>{post.body}</p>
      </main>
    </Modal>
  );
};

export default PostDetails;

export const loader = async ({params}) => {
  const res = await fetch(`http://localhost:8080/posts/${params.id}`);
  const data = await res.json();

  if (!res.ok) {
    return {error: res.statusText, post: []};
  } else {
    return {error: undefined, post: data.post};
  }
};
