
import { FETCH_ENROLLED_COURSES_SUCCESS, MARK_COURSE_COMPLETED_SUCCESS } from '../actions/enrollmentActions';

const initialState = {
  enrolledCourses: [],
};

const enrollmentReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ENROLLED_COURSES_SUCCESS:
      return {
        ...state,
        enrolledCourses: action.payload,
      };
    case MARK_COURSE_COMPLETED_SUCCESS:
      return {
        ...state,
        enrolledCourses: state.enrolledCourses.map(enrollment =>
          enrollment.id === action.payload
            ? { ...enrollment, progress: 100 }
            : enrollment
        ),
      };
    default:
      return state;
  }
};

export default enrollmentReducer;
