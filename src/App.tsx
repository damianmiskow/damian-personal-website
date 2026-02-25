import './App.css'
import { Routes, Route } from 'react-router'
import { HomePage } from './pages/HomePage'
import { ContactPage } from './pages/ContactPage'
import { AboutPage } from './pages/AboutPage'
import { ProjectsPage } from './pages/Projects'


function App() {

  return (
    <Routes>
      <Route path = "/" element={<HomePage />}></Route>
      <Route path = "/about" element={<AboutPage />}></Route>
      <Route path = "/contact" element={<ContactPage />}></Route>
      <Route path = "/projects" element={<ProjectsPage />}></Route>
    </Routes>
  )
}

export default App
