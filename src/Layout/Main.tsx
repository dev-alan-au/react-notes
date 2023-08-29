import { Link, Outlet } from "react-router-dom"

export default function MainLayout() {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand">React Stuff</Link>
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="/use-effect" className="nav-link">useEffect</Link>
            </li>
            <li className="nav-item">
              <Link to="/use-ref" className="nav-link">useRef</Link>
            </li>
            <li className="nav-item">
              <Link to="/use-state" className="nav-link">useState</Link>
            </li>
          </ul>
        </div>
      </nav>
      <main>
        <div className="container-fluid">
          <Outlet />
        </div>
      </main>
    </>
  )
}