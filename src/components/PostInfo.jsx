import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getPost } from '../redux/actions/getPost';

import { AddCommentToPost } from '../components';
import Loader from './Loader';

const PostInfo = (props) => {
  const post = useSelector(({ getPost }) => getPost.post);
  const isLoaded = useSelector(({ getPost }) => getPost.isLoaded);

  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(getPost(props.match.params.id));
  }, [dispatch, props.match.params.id]);

  return (
    <>
      {isLoaded ? (
        <div className='test'>
          <div className='header__posts_content'>
            <h5 className='header__posts_title'>{post.title}</h5>
            <hr className="hr" />
            <p className='header__posts_body'>{post.body}</p>
            <div className='header__posts_btns'>
            </div>
            <hr className="hr" />
            <AddCommentToPost id={post.id} />
            <ol className='header__posts_comments'>
              {post.comments.map((item) => (
                <li key={item.id} className='header__posts_comment_item'>
                  {item.body}
                </li>
              ))}
            </ol>
          </div>
        </div>
      ) : <Loader />}
    </>
    
  );
};

export default PostInfo;
