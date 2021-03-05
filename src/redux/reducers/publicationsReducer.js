import * as constants from '../constants';

export default function publicationsReducer(state = [], action) {
  switch (action.type) {
    case constants.SET_ALL_PUBLICATIONS:
      return action.payload;
    case constants.ADD_PUBLICATION:
      return state.concat(action.payload);
    case constants.REMOVE_PUBLICATION:
      return state.filter((item) => item._id !== action.payload);
    case constants.UPDATE_PUBLICATION:
      return state.map((item) => {
        if (item._id === action.payload.publicationId) {
          return { ...item, ...action.payload.data };
        } else {
          return item;
        }
      });
    case constants.RESET_USER_INFO:
      return [];
    default:
      return state;
  }
}
