import { uuid } from "../utils";
import {
  GET_POSTS_START,
  GET_POSTS_FAILURE,
  GET_POSTS_SUCCESS,
  ADD_POST_FAILURE,
  ADD_POST_SUCCESS,
  ADD_POST_START,
  HIDE_POST_MODAL,
  SHOW_POST_MODAL,
  GET_PROFILE_START,
  GET_PROFILE_SUCCESS,
  GET_PROFILE_FAILURE,
  POST_CHANGE_SEARCH,
  COUNT_POST_START,
  COUNT_POST_SUCCESS,
  COUNT_POST_FAILURE,
} from "./../actions/types";

const initialState = {
  posts: [], // visible data
  _allPosts: [], // all data
  todoModalVisible: false,
  loading: false,
  search: "",
  profileData: {},
  postCount: [],
};

const updateWithVisible = (state) => {
  const searchString = state.search.toLowerCase();
  const filteredPosts = state._allPosts.filter((post) => {
    return post.title.toLowerCase().includes(searchString);
  });

  return { ...state, posts: filteredPosts };
};

export default function (state = initialState, action) {
  switch (action.type) {
    case HIDE_POST_MODAL:
      return { ...state, todoModalVisible: false };
    case SHOW_POST_MODAL:
      return { ...state, todoModalVisible: true };
    case ADD_POST_START:
      return { ...state, loading: true };
    case ADD_POST_SUCCESS:
    case ADD_POST_FAILURE:
      return { ...state, loading: false };
    case GET_POSTS_START:
      return { ...state, loading: true, _allPosts: [], posts: [] };
    case GET_POSTS_SUCCESS:
      return updateWithVisible({
        ...state,
        loading: true,
        _allPosts: action.payload,
        posts: action.payload,
      });
    case GET_POSTS_FAILURE:
      return { ...state, loading: false, _allPosts: [], posts: [] };
    case GET_PROFILE_START:
      return { ...state, loading: true, profileData: {} };
    case GET_PROFILE_SUCCESS:
      return { ...state, loading: true, profileData: action.payload };
    case GET_PROFILE_FAILURE:
      return { ...state, loading: false, profileData: {} };
    case POST_CHANGE_SEARCH:
      return updateWithVisible({ ...state, search: action.payload });
    case COUNT_POST_START:
      return { ...state, loading: true };
    case COUNT_POST_SUCCESS:
      return { ...state, loading: true, postCount: action.payload };

    case COUNT_POST_FAILURE:
      return { ...state, loading: false, postCount: [] };

    default:
      return { ...initialState };
  }
}
