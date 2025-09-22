import { NavLink } from 'react-router';

export default function Header() {
    return(
        <header className='header'>
            <nav>  
                <NavLink to='/' className='navElement'>
                    /
                </NavLink>
                <NavLink to='/signup' className='navElement'>
                    Sign Up
                </NavLink>
            </nav>
        </header>
    );
}