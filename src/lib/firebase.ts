import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyBNAwbPNggZUF2ZAaOj9yzLeqqQSnxgdtw',
  authDomain: 'zin-apex-home-page.firebaseapp.com',
  projectId: 'zin-apex-home-page',
  storageBucket: 'zin-apex-home-page.firebasestorage.app',
  messagingSenderId: '617007705986',
  appId: '1:617007705986:web:b5330947bf69d4cac6e99b',
  measurementId: 'G-PQ7CNCJH0Q',
}

const app = initializeApp(firebaseConfig)

export const db = getFirestore(app)

export default app
