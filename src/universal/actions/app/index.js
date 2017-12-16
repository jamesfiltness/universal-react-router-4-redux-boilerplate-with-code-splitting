import fetch from 'isomorphic-fetch';
import * as types from '../types';

export function historyLocationChange(location) {
  return async (dispatch, getState) => {
    dispatch(dataLoading(true));

    // TODO: Move url to  config
    const basePath = 'http://localhost:3000';

    // set X-Requested-With header so backend can distinguish a client side
    // data fetch from a server side one. Perhaps consider using res.format() instead
    const res = await fetch(`${basePath}${location.pathname}`,
      {
        method: 'GET',
        headers: {
          'X-Requested-With': 'XMLHttpRequest'
        },
      }
    );

    if (res.ok) {
      const data = await res.json();

      dispatch(rehydrateState(data));
      dispatch(dataLoading(false));
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
