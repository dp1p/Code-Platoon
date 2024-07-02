import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar/MyNavbar"

export default function App() {
  return <>
  <Navbar/>
  <Outlet />
  </>
}
