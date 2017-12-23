import fetch from 'isomorphic-fetch';
import * as types from '../types';

export function historyLocationChange(location) {
  return async (dispatch, getState) => {
    dispatch(dataLoading(true));

    // set X-Requested-With header so backend can distinguish a client side
    // data fetch from a server side one. Perhaps consider using res.format() instead
    const res = await fetch(`${location.pathname}`,
      {
        method: 'GET',
        headers: {
          'X-Requested-With': 'XMLHttpRequest'
        },
      }
    );

    if (res.ok) {
      const data = await res.json();

      // Simulate a delay in fetching data from server
      setTimeout(() => {
        dispatch(rehydrateState(data));
        dispatch(dataLoading(false));
      }, 500);

    }
  }
}

export function dataLoading(bool) {
  return {
    type: types.DATA_LOADING,
    bool,
  }
}

export function rehydrateState(data) {
  return {
    type: types.REHYDRATE_STATE,
    data,
  }
}
