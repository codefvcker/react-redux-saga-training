import {
  CREATE_POST,
  FETCH_POST,
  SHOW_LOADER,
  HIDE_LOADER,
  SHOW_ALERT,
  HIDE_ALERT,
  REQUEST_POSTS
} from "./constants";

export const createPost = post => ({
  type: CREATE_POST,
  payload: post
});

export const showLoader = () => ({
  type: SHOW_LOADER
});

export const hideLoader = () => ({
  type: HIDE_LOADER
});

export const hideAlert = () => ({
  type: HIDE_ALERT
});

export const showAlert = text => {
  return dispatch => {
    dispatch({
      type: SHOW_ALERT,
      payload: text
    });

    setTimeout(() => {
      dispatch(hideAlert());
    }, 3000);
  };
};

export const fetchPost = () => {
  return {
    type: REQUEST_POSTS
  };
  // return async dispatch => {
  //   try {
  //     dispatch(showLoader());
  //     const response = await fetch(
  //       "https://jsonplaceholder.typicode.com/posts?_limit=5"
  //     );
  //     const json = await response.json();
  //     dispatch({ type: FETCH_POST, payload: json });
  //     dispatch(hideLoader());
  //   } catch (e) {
  //     dispatch(showAlert("Something went wrong"));
  //     dispatch(hideLoader());
  //   }
  // };
};
