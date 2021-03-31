import axios from 'axios';
import React from 'react';
import { Link } from 'react-router-dom';
import './AddCommentToPost.scss';

const AddCommentToPost = ({ id }) => {
  const [body, setBody] = React.useState('');

  const postComment = async (comment) => {
    return await axios
      .post(`https://bloggy-api.herokuapp.com/comments/`, { ...comment })
      .then((response) => {
        window.location.reload();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const addComment = async () => {
    let comment = {
      postId: id,
      body: body,
    };
    await postComment(comment);
  };

  return (
    <form className='form'>
      <div className='form_content'>
        <label htmlFor='fromComment' className='form_label'>
          Comment:
        </label>
        <input type='text' className='form_input' id='fromComment' value={body} onChange={(e) => setBody(e.target.value)} />
      </div>
      <div className='form_btn'>
        <button type='button' onClick={() => addComment()} className='form_add'>
          Push comment
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

export default AddCommentToPost;
