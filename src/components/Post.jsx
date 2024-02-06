import React from 'react';
import {Link} from 'react-router-dom';

import classes from './Post.module.css';

const Post = ({author, body, id}) => {
  return (
    <Link to={id}>
      <div className={classes.post}>
        <p className={classes.author}>{author}</p>
        <p className={classes.text}>{body}</p>
      </div>
    </Link>
  );
};

export default Post;
