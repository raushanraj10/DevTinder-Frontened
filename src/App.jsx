import { BrowserRouter, Routes,Route } from "react-router-dom"
import Body from "./Body"

function App() {
  return (
    <BrowserRouter basename="/">
      <Routes>
        <Route path="/" element={<Body/>}>
          <Route path="/login" element={<h1>login</h1>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
