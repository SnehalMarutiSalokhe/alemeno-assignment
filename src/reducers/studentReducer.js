import { FETCH_STUDENTS } from '../actions/studentActions.js';

const initialState = {
  students: [],
};

const studentReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_STUDENTS:
      return { ...state, students: action.payload };
    default:
      return state;
  }
};

export default studentReducer;
