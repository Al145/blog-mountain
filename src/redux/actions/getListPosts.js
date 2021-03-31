import axios from 'axios';
import { SET_LOADED, SET_LIST_POSTS } from '../reducers/getListPosts';

export const setLoaded = (payload) => ({
  type: SET_LOADED,
  payload,
});

export const getListPosts = () => async (dispatch) => {
  dispatch({
    type: SET_LOADED,
    payload: false,
  });

  await axios.get(`https://bloggy-api.herokuapp.com/posts`).then(({ data }) => {
    dispatch(setListPosts(data));
  });
};

export const setListPosts = (posts) => ({
  type: SET_LIST_POSTS,
  payload: posts,
});
