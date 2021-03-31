import axios from 'axios';
import React from 'react';

import { Redirect } from 'react-router';
import { Link } from 'react-router-dom';

const CreateNewPost = () => {
  const [title, setTitle] = React.useState('');
  const [body, setBody] = React.useState('');
  const [redirect, setRedirect] = React.useState(false);

  const postPost = async (post) => {
    return await axios
      .post(`https://bloggy-api.herokuapp.com/posts/`, { ...post})
      .then((response) => {
        setRedirect(true);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const addPost = async () => {
    let post = {
      title: title,
      body: body,
    };
    await postPost(post);
  };

  if (redirect) {
    return <Redirect to='/' />;
  }

  return (
    <form className='form'>
      <div className='form_content'>
        <label htmlFor='newPostTitle' className='form_label'>
          Title
        </label>
        <input type='text' className='form_input' id='newPostTitle' value={title} onChange={(e) => setTitle(e.target.value)} />
      </div>
      <div className='form_content'>
        <label htmlFor='newPostBody' className='form_label'>
          Body
        </label>
        <textarea
          className='form_input'
          id='newPostBody'
          rows='3'
          cols='50'
          value={body}
          onChange={(e) => setBody(e.target.value)}></textarea>
      </div>
    <div className="form_btn">
      <button type='button' onClick={() => addPost()} className='form_add'>
        Add New Post
      </button>
        <Link className='form_back_a' to='/'>
      <button type='button' className='form_back'>
          Back
      </button>
              </Link>
    </div>
    </form>
  );
};

export default CreateNewPost;
