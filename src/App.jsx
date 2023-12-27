import { Route, Routes } from "react-router-dom"
import Layout from "./components/Layout/Layout"
import Login from "./pages/LoginPage/Login"
import Missing from './pages/MissingPage/Missing'
import Unauthorized from "./pages/UnauthorizedPage/Unauthorized"
import Home from "./pages/HomePage/Home"
import RequiredAuth from "./components/RequiredAuth"
import { ROLES } from "./utils/Roles"
import About from "./pages/AboutPage/About"
import Adminestor from './pages/Adminestor/Adminestor'
import Chat from './pages/ChatPage/Chat'

function App() {

  return (
    <Routes>
      <Route path="/" element={<Layout />} >

        {/* --- public routes --- */}
        <Route path="/login" element={<Login />} />
        <Route path="/unauthorized" element={<Unauthorized />} />

        {/* --- allowed routes for (Visitor) role --- */}
        <Route element={<RequiredAuth allowedRoles={[ROLES.Visitor]} />}>
          <Route path="/" element={<Home />} />
        </Route>

        {/* --- allowed routes for (Editor) role */}
        <Route element={<RequiredAuth allowedRoles={[ROLES.Editor]} />}>
          <Route path="/about" element={<About />} />
        </Route>

        {/* --- allowed routes for (Admin) role --- */}
        <Route element={<RequiredAuth allowedRoles={[ROLES.Admin]} />}>
          <Route path="/adminestor" element={<Adminestor />} />
        </Route>

        {/* --- allowed routes for (Admin and Editor) roles --- */}
        <Route element={<RequiredAuth allowedRoles={[ROLES.Admin, ROLES.Editor]} />}>
          <Route path="/chat" element={<Chat />} />
        </Route>

        {/* --- catch all routes --- */}
        <Route path="*" element={<Missing />} />

      </Route>
    </Routes>
  )
}

export default App
