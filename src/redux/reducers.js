// actions
const FETCH_ROCKETS = 'FETCH_ROCKETS';
const CREATE_RESERVE = 'CREATE_RESERVE';

// constant apiUrl
const baseUrl = 'https://api.spacexdata.com/v3/rockets';

// intial state
const initialState = {
  rockets: [],
};

// create action creators return object

export const getRockets = (payload) => ({
  type: FETCH_ROCKETS,
  payload,
});

export const createReserve = (payload) => ({
  type: CREATE_RESERVE,
  payload,
});

// Action creator that return a function

export const getRocketFromApi = () => async (dispatch) => {
  const request = await fetch(baseUrl);
  const response = await request.json();
  dispatch(getRockets(response));
};

// Create a reducer

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ROCKETS:
      return { ...state, rockets: action.payload };
    case CREATE_RESERVE: {
      const changeState = state.rockets.map((el) => {
        if (el.id === action.payload.id) {
          return { ...el, reserve: action.payload.reserve };
        }
        return el;
      });
      return { ...state, rockets: changeState };
    }
    default:
      return state;
  }
};

export default reducer;
