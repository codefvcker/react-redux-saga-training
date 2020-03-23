import { CREATE_POST } from "./constants";
import { showAlert } from "./actionsCreator";

const forbiddenWords = ["fuck", "bitch", "spam"];

export const forbiddenWordsMiddleware = ({ dispatch }) => {
  return function(next) {
    return function(action) {
      if (action.type === CREATE_POST) {
        const found = forbiddenWords.filter(word =>
          action.payload.title.includes(word)
        );
        if (found.length) {
          return dispatch(showAlert("U used bad words!"));
        }
      }
      return next(action);
    };
  };
};
