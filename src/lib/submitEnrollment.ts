import { addDoc, collection, serverTimestamp } from 'firebase/firestore'
import { db } from './firebase'

// Lives in its own module so the forms can load Firebase on submit only while
// Rollup still tree-shakes Firestore down to the calls used here.
export function submitEnrollment(data: Record<string, unknown>) {
  return addDoc(collection(db, 'enrollments'), {
    ...data,
    createdAt: serverTimestamp(),
  })
}
