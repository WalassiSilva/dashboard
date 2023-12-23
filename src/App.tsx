import { Route, Routes, BrowserRouter as Router, } from "react-router-dom"
import { Layout } from "./components/shared/Layout"
import { Dashboard } from "./components/Dashboard"
import { Products } from "./components/Products"

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />} >
            <Route index element={<Dashboard />} />
            <Route path="products" element={<Products />} />
          </Route>

          <Route path="login" element={<div className="p-4 bg-blue-200">Login page</div>} />
          
        </Routes>
      </Router>
    </>
  )
}

export default App
