import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'
import { getAnalytics, isSupported } from 'firebase/analytics'

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

export const auth = getAuth(app)
export const db = getFirestore(app)
export const storage = getStorage(app)

isSupported().then((supported) => {
  if (supported) getAnalytics(app)
})

export default app
