export const SET_LOADED = 'SET_LOADED';
export const SET_LIST_POSTS = 'SET_LIST_POSTS';

const initialState = {
  posts: [],
  isLoaded: false,
};

const getListPosts = (state = initialState, action) => {
  switch (action.type) {
    case SET_LIST_POSTS:
      return {
        ...state,
        posts: action.payload,
        isLoaded: true,
      };
    case SET_LOADED:
      return {
        ...state,
        isLoaded: action.payload,
      };
    default:
      return state;
  }
};

export default getListPosts;
