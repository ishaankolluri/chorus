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

// Initial Known Redux State
const initialState = {
  isLoading: false,
  loadFailed: false
};

// Reducer handler
export default (state = initialState, action) => {
  switch (action.type) {
    case LOAD_DATA_SUCCESS:
      return {
        ...state,
        data: action.data
      };
    // TODO: I don't see data as a value in props when I call fetchData.

    case LOAD_DATA_FAILURE:
      return {
        ...state,
        loadFailed: true
      };

    default:
      return state;
  }
};

// Actions
// should i be sending LOAD_DATA_IN_PROGRESS and then sending a timeout function for data fetching?
export const fetchData = () => {
  console.log("Attempting to fetch data");
  return dispatch => {
    return fetch(request)
      .then(function(res) {
        res = res.json();
        console.log(res);
      })
      .then(
        data => dispatch({ type: "LOAD_DATA_SUCCESS" }, data),
        err => dispatch({ type: "LOAD_DATA_FAILURE" }, err)
      );
  };
};
