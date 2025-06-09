import { BrowserRouter, Routes,Route } from "react-router-dom"
import Body from "./Body"
import Login from "./Login"
import { Provider } from "react-redux"
import appStore from "./utils/appStore"
import Feed from "./Feed"
import Profile from "./Profile"
import Request from "./Request"
import Connections from "./Connectons"

function App() {
  return (
    <Provider store={appStore}>
    <BrowserRouter basename="/">
      <Routes>
        <Route path="/" element={<Body/>}>
          <Route path="/" element={<Feed/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/profile" element={<Profile/>}/>
          {/* <Route path="/logout" element={<Logout/>}/> */}
          <Route path="/friends" element={<Connections/>}/>
          <Route path="/request" element={<Request/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
    </Provider>
  )
}

export default App
