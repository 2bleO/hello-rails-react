const GET_MESSAGE = 'GET_MESSAGE';

export const getGreeting = () => async(dispatch) => {
  const response = await fetch('http://localhost:3000/api/v1/greetings');
  const text = await response.json();

  dispatch({
    type: GET_MESSAGE,
    payload: text
  })
}

const initialState = {
  message: null,
};

const greetingReducer = (state = initialState, action ) => {
  switch (action.type){
    case 'GET_MESSAGE':
      return action.payload;
    default:
      return state;
  }
};

export default greetingReducer;