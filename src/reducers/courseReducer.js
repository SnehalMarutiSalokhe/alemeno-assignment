

import { FETCH_COURSES, FETCH_COURSE_DETAILS } from '../actions/courseActions.js';

const initialState = {
  courses: [],
  courseDetails: {}
};

export const courseReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_COURSES:
      return { ...state, courses: action.payload };
    case FETCH_COURSE_DETAILS:
      return { ...state, courseDetails: action.payload };
    default:
      return state;
  }
};
