import React, { useContext, useState } from 'react';
import { AuthContext } from './context/AuthContext';
import { types } from './types/types';
import "./Login.css"

export const LoginPage = () => {

  const { dispatch } = useContext(AuthContext);

  const [user, setUser] = useState('');
  const [pass, setPass] = useState('');
  const [attempts, setAttempts] = useState(0);
  const [disabled, setDisabled] = useState(false);

  const handleLogin = () => {
    if (attempts >= 2) {
      console.log("Contraseña incorrecta");
      setDisabled(true);
      return;
    }

    if (user === 'azteca' && pass === '12345') {
      dispatch({
        type: types.login,
        payload: {
          name: 'Azteca User Test'
        }
      });
    } else {
      setAttempts(attempts + 1);
    }
  };

  return (
    <div className='background'>
      <div className="d-flex justify-content-start align-items-center vh-100">
      <div style={{ marginLeft: '200px' }}>
        <div className="bg-white p-5 rounded-5 text-secondary shadow" style={{ width: '25rem' }}>
          <div className="d-flex justify-content-center">
            <img src="./resources/aztecalogo.png" alt="baz-icon" style={{ height: '6rem' }} />
          </div>
          <div className="text-center fs-5 fw-bold">Banco Azteca Captación</div>
          <div className="input-group mt-4">
            <div className="input-group-text bg-black">
              <img src="./resources/username-icon.svg" alt="username-icon" style={{ height: '1rem' }} />
            </div>
            <input className="form-control bg-light" type="text" placeholder="Username" value={user} 
            onChange={(e) => setUser(e.target.value)} disabled={disabled}
            />
          </div>
          <div className="input-group mt-1">
            <div className="input-group-text bg-black">
              <img src="./resources/password-icon.svg" alt="password-icon" style={{ height: '1rem' }} />
            </div>
            <input className="form-control bg-light" type="password" placeholder="Password" value={pass}
            onChange={(e) => setPass(e.target.value)} disabled={disabled}
            />
          </div>
          
          <button className="btn btn-dark w-100 mt-4 fw-semibold shadow-sm button1" onClick={handleLogin} disabled={disabled}>
            Login
          </button>
        </div>
        </div>
      </div>
    </div>
  );
};
