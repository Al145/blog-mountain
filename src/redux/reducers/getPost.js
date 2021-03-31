export const SET_POST = 'SET_POST';
export const SET_LOADED = 'SET_LOADED';

const initialState = {
  post: {},
  isLoaded: false,
};

const getPost = (state = initialState, action) => {
  switch (action.type) {
    case SET_POST:
      return {
        ...state,
        post: action.payload,
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

export default getPost;
