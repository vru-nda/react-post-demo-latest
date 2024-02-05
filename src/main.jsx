import React from 'react';
import ReactDOM from 'react-dom/client';
import {RouterProvider, createBrowserRouter} from 'react-router-dom';

import NewPost from './routes/NewPost';
import RootLayout from './routes/RootLayout';

import Posts, {loader as postsLoader} from './routes/Posts';
import {action as newPostAction} from './routes/NewPost';

import './index.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        path: '/',
        loader: postsLoader,
        element: <Posts />,
        children: [
          {path: '/create-post', element: <NewPost />, action: newPostAction},
        ],
      },
    ],
  },  
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
