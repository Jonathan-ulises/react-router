import React from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
  Outlet
} from 'react-router-dom';

const Dashboard = () => {

  // Creamos el hook de useNavigate para redireccionar a una ruta especifica
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/');
  }

  return (
    <div>
      <h1>Dashboard</h1>
      <button onClick={handleLogout}>Logout</button>
      <br />
      <br />
      <Outlet />
    </div>
  )
}

export default Dashboard