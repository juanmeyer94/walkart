
import {
  GET_ALL_POSTS,

} from "./action-types";

const initialState = {

  allPosts: [],

}

const reducer = (state = initialState, action) => {

  switch (action.type) {

    case GET_ALL_POSTS:
      return {
        ...state,
        allPosts: action.payload,
        originalPosts: action.payload // Actualizar el estado original de los posts
      };


    default:
      return { ...state };
  }
}

export default reducer;