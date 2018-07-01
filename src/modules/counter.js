// Set up API information
const env = require("../env.json");

const request = new Request(
  `https://api.airtable.com/v0/${env.AIRTABLE_BASE}/${env.AIRTABLE_VIEW}`,
  {
    method: "get",
    headers: new Headers({
      Authorization: `Bearer ${env.AIRTABLE_API_KEY}`
    })
  }
);

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
      return {
        ...state,
        data: action.data,
        inProgress: false
      };

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

// Actions
export const fetchData = () => {
  return dispatch => {
    dispatch(requestData());

    return fetch(request)
      .then(function(res) {
        res = res.json();
        console.log(res);
        return res;
        // returns a promise that eventually resolves, but doesn't seem to make it into state
      })
      .then(
        data => dispatch({ type: "LOAD_DATA_SUCCESS" }, data),
        err => dispatch({ type: "LOAD_DATA_FAILURE" }, err)
      );
  };
};
