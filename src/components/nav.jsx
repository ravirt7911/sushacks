import { Link, BrowserRouter as Router } from 'react-router-dom';

function Navbar() {
    

    return (
        <nav >
            <div className='navbar-container'>
                <Router>
                    <Link className='nav_link' to="/home">HOME</Link>
                    <Link className='nav_link' to="/about">ABOUT</Link>
                    <Link className='nav_link' to="/tracks">TRACKS</Link>
                    <Link className='nav_link' to="/timeline">TIMELINE</Link>
                    <Link className='nav_link' to="/prizes">PRIZES</Link>
                    <Link className='nav_link' to="/sponsors">SPONSORS</Link>
                    <Link className='nav_link' to="/faq">FAQ</Link>
                </Router>
            </div>
        </nav>
    );
}

export default Navbar;
