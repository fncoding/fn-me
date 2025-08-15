export default function NavBar() {
    return (
        <div className="navbar bg-transparent absolute top-0 left-0 w-full z-30">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        <li><a>Homepage</a></li>
                        <li><a>Leistungen</a></li>
                        <li><a>About Me</a></li>
                        <li><a>Portfolio</a></li>
                        <li><a>Contact</a></li>
                        <li><a>Impressum</a></li>
                    </ul>
                </div>
            </div>
            <div className="navbar-center">
                <a href="/" className="text-xl font-semibold hover:scale-105 transition-transform cursor-pointer" aria-label="Home">felixneumann</a>
            </div>
            <div className="navbar-end">
                <a href="/" aria-label="Home">
                    <img src="/cat.svg" alt="Cat" className="h-8 w-8 hover:scale-110 transition-transform cursor-pointer" />
                </a>
            </div>
        </div>
    )
}