import { Routes, Route } from "react-router-dom"
import App from './App'
import Recipe from "./components/Recipe"

const Router = () => {
  return (
      <Routes>
          <Route path='/' element={<App />} />
          <Route path='/recipe/:id' element={<Recipe />} />
      </Routes>
  )
}

export default Router
