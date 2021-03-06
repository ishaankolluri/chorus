// Action Types

export const LOAD_DATA_FAILURE = "counter/LOAD_DATA_FAILURE";
export const LOAD_DATA_SUCCESS = "counter/LOAD_DATA_SUCCESS";
export const DATA_IN_PROGRESS = "counter/DATA_IN_PROGRESS";

// Initial Known Redux State
const initialState = {
  isLoading: false,
  loadFailed: false,
  inProgress: false
};

// Reducer handler
export default (state = initialState, action) => {
  switch (action.type) {
    case DATA_IN_PROGRESS:
      return {
        ...state,
        inProgress: true
      };

    case LOAD_DATA_SUCCESS:
      const newState = {
        ...state,
        inProgess: false
      };
      newState[action.payType] = action.data;
      return newState;

    case LOAD_DATA_FAILURE:
      return {
        ...state,
        loadFailed: true,
        inProgress: false
      };

    default:
      return state;
  }
};

function requestData() {
  return {
    type: DATA_IN_PROGRESS
  };
}

const composeRequest = table => {
  const request = new Request(
    `https://api.airtable.com/v0/${process.env.REACT_APP_BASE}/${table}`,
    {
      method: "get",
      headers: new Headers({
        Authorization: `Bearer ${process.env.REACT_APP_KEY}`
      })
    }
  );
  return request;
};

// Group API Call
export const fetchAllData = tableList => {
  return dispatch => {
    dispatch(requestData);
    const promises = [];
    for (let index = 0; index < tableList.length; index++) {
      const request = composeRequest(tableList[index]);
      const promise = fetch(request)
        .then(function(res) {
          res = res.json();
          return res;
        })
        .then(
          data => {
            dispatch({
              type: "counter/LOAD_DATA_SUCCESS",
              data,
              payType: tableList[index]
            });
          },
          err => dispatch({ type: "counter/LOAD_DATA_FAILURE", err })
        );
      promises.push(promise);
    }
    return Promise.all(promises);
  };
};

// Actions
export const fetchData = table => {
  const request = composeRequest(table);
  return dispatch => {
    dispatch(requestData());

    return fetch(request)
      .then(function(res) {
        res = res.json();
        return res;
      })
      .then(
        data =>
          dispatch({ type: "counter/LOAD_DATA_SUCCESS", data, payType: table }),
        err => dispatch({ type: "counter/LOAD_DATA_FAILURE", err })
      );
  };
};
