import * as types from '../actions/types';

export function pageData(state = "", action) {
  switch (action.type) {
    default:
      return state;
  }
}

export function dataLoading(state = false, action) {
  switch (action.type) {
    case types.DATA_LOADING:
      if (action.bool) {
        return true;
      }

      return false;
    default:
      return state;
  }
}
