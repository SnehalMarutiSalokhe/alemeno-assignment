

import { doc, updateDoc,collection,getDocs } from 'firebase/firestore';
import { db } from '../firebase';

export const FETCH_ENROLLED_COURSES_SUCCESS = 'FETCH_ENROLLED_COURSES_SUCCESS';
export const MARK_COURSE_COMPLETED_SUCCESS = 'MARK_COURSE_COMPLETED_SUCCESS';

export const fetchEnrolledCourses = () => async (dispatch) => {
  try {
    const enrollmentsSnapshot = await getDocs(collection(db, 'enrollments'));
    const coursesSnapshot = await getDocs(collection(db, 'courses'));

    const enrollments = enrollmentsSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    const courses = coursesSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));

    const coursesMap = courses.reduce((acc, course) => {
      acc[course.id] = course;
      return acc;
    }, {});

    const enrichedEnrollments = enrollments.map(enrollment => ({
      ...enrollment,
      course: coursesMap[enrollment.courseId]
    }));

    dispatch({ type: FETCH_ENROLLED_COURSES_SUCCESS, payload: enrichedEnrollments });
  } catch (error) {
    console.error('Error fetching enrolled courses:', error);
  }
};

export const markCourseCompleted = (enrollmentId) => async (dispatch) => {
  try {
    const enrollmentRef = doc(db, 'enrollments', enrollmentId);
    await updateDoc(enrollmentRef, { progress: 100 });

    dispatch({ type: MARK_COURSE_COMPLETED_SUCCESS, payload: enrollmentId });
  } catch (error) {
    console.error('Error marking course as completed:', error);
  }
};
