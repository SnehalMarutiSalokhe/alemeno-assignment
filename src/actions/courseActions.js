
import { collection, getDocs, doc, getDoc } from 'firebase/firestore';
import { db } from '../firebase.js';

export const FETCH_COURSES = 'FETCH_COURSES';
export const FETCH_COURSE_DETAILS = 'FETCH_COURSE_DETAILS';

export const fetchCourses = () => async (dispatch) => {
  const coursesCollection = collection(db, 'courses');
  const snapshot = await getDocs(coursesCollection);
  const courses = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  
  dispatch({ type: FETCH_COURSES, payload: courses });
};

export const fetchCourseDetails = (courseId) => async (dispatch) => {
  const courseDoc = doc(db, 'courses', courseId);
  const course = await getDoc(courseDoc);
  
  dispatch({ type: FETCH_COURSE_DETAILS, payload: { id: course.id, ...course.data() } });
};
