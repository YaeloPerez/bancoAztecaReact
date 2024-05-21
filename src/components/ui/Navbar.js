import React, { useContext } from 'react';
import { AuthContext } from '../auth/context/AuthContext';
import { types } from '../auth/types/types';


export const Navbar = () => {
    const { user: { name }, dispatch } = useContext(AuthContext);

    const handleLogout = () => {

        dispatch({
            type: types.logout
        });
    }

    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">

            <img className='ms-5' src="./resources/aztecalogo.png" alt="baz-icon" style={{ height: '2rem' }} />
            <span className="navbar-brand">
                &nbsp;Banco Azteca Captación
            </span>

            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
                <ul className="navbar-nav ml-auto">
                    <span className="nav-item nav-link text-info">
                        {name}
                    </span>

                    <button
                        className="nav-item nav-link btn"
                        onClick={handleLogout}
                    >
                        Logout
                    </button>
                </ul>
            </div>
        </nav>
    )
}