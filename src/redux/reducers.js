// actions
const FETCH_ROCKETS = 'FETCH_ROCKETS';
const CREATE_RESERVE = 'CREATE_RESERVE';
const FETCH_MISSIONS = 'FEATCH_MISSIONS';
const CREATE_JOIN = 'CREATE_JOIN';

// constant apiUrl
const baseUrl = 'https://api.spacexdata.com/v3/rockets';
const missionUrl = 'https://api.spacexdata.com/v3/missions';

// intial state
const initialState = {
  rockets: [],
  missions: [],
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

export const getMissions = (payload) => ({
  type: FETCH_MISSIONS,
  payload,
});

export const createJoin = (payload) => ({
  type: CREATE_JOIN,
  payload,
});

// Action creator that return a function

export const getRocketFromApi = () => async (dispatch) => {
  const request = await fetch(baseUrl);
  const response = await request.json();
  dispatch(getRockets(response));
};

export const getMissionFromApi = () => async (dispatch) => {
  const request = await fetch(missionUrl);
  const response = await request.json();
  dispatch(getMissions(response));
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
    case FETCH_MISSIONS:
      return { ...state, missions: action.payload };
    case CREATE_JOIN: {
      const changeJoin = state.missions.map((el) => {
        if (el.mission_id === action.payload.mission_id) {
          return { ...el, join: action.payload.join };
        }
        return el;
      });
      return { ...state, missions: changeJoin };
    }
    default:
      return state;
  }
};

export default reducer;
