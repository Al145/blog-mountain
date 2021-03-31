import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import PostContent from './PostContent';
import { getListPosts } from '../redux/actions/getListPosts';
import Loader from './Loader';
import Empty from './Empty';

const Posts = () => {
  const dispatch = useDispatch();

  const listPosts = useSelector(({ getListPosts }) => getListPosts.posts);
  const isLoaded = useSelector(({ getListPosts }) => getListPosts.isLoaded);


  React.useEffect(() => {
    dispatch(getListPosts());
  }, [dispatch]); 
  
  return (
    <div className="header__posts">
      {listPosts.length <= 0 
      ? <Empty /> 
      : isLoaded 
      ? listPosts.map((post) => <PostContent key={post.id} id={post.id} title={post.title} body={post.body}/>) 
      : <Loader />
    }
    </div>
  )
}

export default Posts;
