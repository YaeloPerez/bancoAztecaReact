import React, { useState } from 'react';

const fakeAPI = (userId) => {
  const users = {
    1: { nombre: 'Yael Alsandy', apellidoPaterno: 'Pérez', apellidoMaterno: 'Hernández' },
    2: { nombre: 'Mai', apellidoPaterno: 'Sakurajima', apellidoMaterno: '' },
    3: { nombre: 'Julio Cesar', apellidoPaterno: 'Banda', apellidoMaterno: 'Siles' },
    4: { nombre: 'Miku', apellidoPaterno: 'Nakano', apellidoMaterno: '' },
    5: { nombre: 'Kevin Rodrigo', apellidoPaterno: 'Pérez', apellidoMaterno: 'Rocha' },
  };
  return users[userId] || null;
};

export const Dashboard = () => {
  const [userId, setUserId] = useState('');
  const [userInfo, setUserInfo] = useState(null);
  const [visible, setVisible] = useState(false)

  const handleFetchUser = () => {
    const user = fakeAPI(userId);
    setUserInfo(user);

    if (!userInfo){
      setVisible(true)
    }
  };

  return (
    <div>
      <h1>Búsqueda de usuarios registrados</h1>
      <div className="card d-flex justify-content-center align-items-center">
        <div className="card-body">

          <div className="input-group mb-3">
            <input type="text" className="form-control" placeholder="ID usuario" aria-label="ID usuario" aria-describedby="button-addon2" value={userId} onChange={(e) => setUserId(e.target.value)}/>
            <button className="btn btn-outline-secondary" type="button" id="button-addon2" onClick={handleFetchUser}>Buscar</button>
          </div>

          <div className="input-group mb-3">
            {userInfo && (
            <div>
              <h1 className="display-6">Información del usuario</h1>
              <div>
                <label>Nombre: </label>
                <input type="text" className="form-control" value={userInfo.nombre} disabled />
              </div>
              <div>
                <label>Apellido Paterno: </label>
                <input type="text" className="form-control" value={userInfo.apellidoPaterno} disabled />
              </div>
              <div>
                <label>Apellido Materno: </label>
                <input type="text" className="form-control" value={userInfo.apellidoMaterno} disabled />
              </div>
            </div>
          )}
          {(!userInfo && visible) && (
            <div>
              <h1 className="display-6">Usuario no existe</h1>
            </div>
          )}
          </div>
        </div>
      </div>
    </div>
  );
};
