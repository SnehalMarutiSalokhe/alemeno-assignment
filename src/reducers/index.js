import { combineReducers } from 'redux';
import { courseReducer } from './courseReducer.js';
import studentReducer from './studentReducer.js';
import enrollmentReducer from './enrollmentReducer.js';

const rootReducer = combineReducers({
  courses: courseReducer,
  students: studentReducer,
  enrollments: enrollmentReducer,
});

export default rootReducer;
