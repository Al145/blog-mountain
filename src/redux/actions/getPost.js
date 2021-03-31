import axios from 'axios';
import { SET_LOADED, SET_POST } from '../reducers/getPost';

export const getPost = (id) => async (dispatch) => {
  dispatch({
    type: SET_LOADED,
    payload: false,
  });

  await axios.get(`https://bloggy-api.herokuapp.com/posts/${id}?_embed=comments`).then(({ data }) => {
    dispatch(setPost(data));
  });
};

export const setPost = (post) => ({
  type: SET_POST,
  payload: post,
});
