import axios from 'axios';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router';
import { Link } from 'react-router-dom';
import { getPost } from '../redux/actions/getPost';
import Loader from './Loader';



const EditPost = (props) => {
  const dispatch = useDispatch();
  const [redirect, setRedirect] = React.useState(false);

  const post = useSelector(({ getPost }) => getPost.post);
  const isLoaded = useSelector(({ getPost }) => getPost.isLoaded);

  const titleRef = React.useRef(null);
  const bodyRef = React.useRef(null);


  React.useEffect(() => {
    dispatch(getPost(props.match.params.id));
  }, [dispatch, props.match.params.id]); 

  const upPost = async (newPost) => {
    return await axios
      .put(`https://bloggy-api.herokuapp.com/posts/${post.id}`, { ...newPost })
      .then((response) => {
        setRedirect(true);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const editPost = async () => {
    let newPost = {
      title: titleRef.current.value,
      body: bodyRef.current.value,
    };
    await upPost(newPost);
  };

  if (redirect) {
    return <Redirect to='/' />;
  }

  return (
    <>
      {isLoaded ? (
        <form className='form'>
          <div className='form_content'>
            <label htmlFor='formEdit' className='form_label'>
              Title
            </label>
            <input type='text' className='form_input' id='formEdit' ref={titleRef} defaultValue={post.title} />
          </div>
          <div className='form_content'>
            <label htmlFor='editArea' className='form_label'>
              Body
            </label>
            <textarea className='form_input' id='editArea' rows='4' cols='50' ref={bodyRef} defaultValue={post.body}></textarea>
          </div>
          <div className='form_btn'>
          <button type='button' onClick={() => editPost()} className='form_add'>
            Edit
          </button>
        <Link className='form_back_a' to='/'>
          <button type='button' className='form_back'>
          Back
      </button>
              </Link>
          </div>
        </form>
      ) : <Loader />}
    </>
  );
};

export default EditPost;
