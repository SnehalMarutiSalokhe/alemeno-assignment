import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase.js';

export const FETCH_STUDENTS = 'FETCH_STUDENTS';

export const fetchStudents = () => async (dispatch) => {
  try {
    const studentsCollection = collection(db, 'students');
    const snapshot = await getDocs(studentsCollection);
    const students = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    
    dispatch({ type: FETCH_STUDENTS, payload: students });
  } catch (error) {
    console.error('Error fetching students: ', error);
  }
};
