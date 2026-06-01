import { Routes, Route } from 'react-router-dom'

import HomeSelect from './pages/HomeSelect'
import ArabicHome from './pages/ArabicHome'
import IslamicHome from './pages/IslamicHome'
import CareerHome from './pages/CareerHome'

import BlogPostPage from './pages/BlogPostPage'

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomeSelect />} />
      <Route path="/arabic" element={<ArabicHome />} />
      <Route path="/islamic" element={<IslamicHome />} />
      <Route path="/career" element={<CareerHome />} />
      <Route path="/arabic/post/:id" element={<BlogPostPage />} />
      <Route path="/islamic/post/:id" element={<BlogPostPage />} />
      <Route path="/career/post/:id" element={<BlogPostPage />} />
      
    </Routes>
  )
}

export default App