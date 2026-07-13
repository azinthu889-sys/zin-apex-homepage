import { lazy, Suspense } from 'react'
import { Routes, Route } from 'react-router'
import Layout from './components/Layout'
import Home from './pages/Home'

const About = lazy(() => import('./pages/About'))
const Courses = lazy(() => import('./pages/Courses'))
const StudyInJapan = lazy(() => import('./pages/StudyInJapan'))
const Faq = lazy(() => import('./pages/Faq'))
const Contact = lazy(() => import('./pages/Contact'))

function PageFallback() {
  return <div className="min-h-[60vh]" aria-busy="true" />
}

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route
          path="about"
          element={
            <Suspense fallback={<PageFallback />}>
              <About />
            </Suspense>
          }
        />
        <Route
          path="courses"
          element={
            <Suspense fallback={<PageFallback />}>
              <Courses />
            </Suspense>
          }
        />
        <Route
          path="study-in-japan"
          element={
            <Suspense fallback={<PageFallback />}>
              <StudyInJapan />
            </Suspense>
          }
        />
        <Route
          path="faq"
          element={
            <Suspense fallback={<PageFallback />}>
              <Faq />
            </Suspense>
          }
        />
        <Route
          path="contact"
          element={
            <Suspense fallback={<PageFallback />}>
              <Contact />
            </Suspense>
          }
        />
        <Route path="*" element={<Home />} />
      </Route>
    </Routes>
  )
}
