import { Link, Outlet } from "react-router-dom";
import styles from './Layout.module.css'
import useAuth from "../../hook/useAuth";

function Layout() {

    const { auth, setAuth } = useAuth()

    return (
        <main className={styles.container}>

            {/* --- navbar --- */}
            <nav>
                <Link to={'/'}>Home</Link>
                <Link to={'/about'}>About</Link>
                <Link to={'/adminestor'}>Adminestor</Link>
                <Link to={'/chat'}>Chat</Link>
                {auth.username ?
                    <>
                        <button onClick={() => setAuth({})}>Logout</button>
                        <p style={{ color: "green" }}>Hi {auth.username}</p>
                    </>
                    : <Link to={'/login'}>Login</Link>
                }

            </nav>

            {/* --- it will be render the all routes here --- */}
            <Outlet />
        </main>
    )
}

export default Layout;