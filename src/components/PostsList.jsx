import React from 'react';
import { useLoaderData } from 'react-router-dom';

import Post from './Post';

import classes from './PostsList.module.css';

const PostsList = () => {
  const {error, posts} = useLoaderData();

  return (
    <>
      {posts?.length > 0 && (
        <ul className={classes.posts}>
          {posts.map((post) => (
            <Post
              key={post.id}
              author={post.author}
              body={post.body}
              id={post.id}
            />
          ))}
        </ul>
      )}

      {!error && posts?.length === 0 && (
        <div style={{textAlign: 'center', color: 'white'}}>
          <h2>There are no posts yet.</h2>
          <p>Start adding some!</p>
        </div>
      )}

      {error && (
        <div style={{textAlign: 'center', color: 'white'}}>
          <p>{error}</p>
        </div>
      )}
    </>
  );
};

export default PostsList;

// let modalContent;
// if (modalIsVisible) {
//   modalContent = (
//     <Modal onClose={setModalIsVisible}>
//       <NewPost setAuthor={setAuthor} setBody={setBody} />
//     </Modal>
//   );
// }
