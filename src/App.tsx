import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from 'react-router-dom';
import Navbar from './components/Navbar';
import AboutPage from './pages/AboutPage';
import Dashboard from './pages/Dashboard';
import HomePage from './pages/HomePage';
import NotFoundPage from './pages/NotFoundPage';
import UserPage from './pages/UserPage';
import Users from './pages/Users';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/users' element={<Users />} />
        <Route path='/redirect' element={<Navigate replace to="/users"/>} />
        <Route path='/users/:id' element={<UserPage />} />
        <Route path='/dashboard/*' element={<Dashboard />} >
          <Route path='welcome' element={<p>welcome to Dashboard!!!</p>}></Route>
        </Route>
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
    </Router>
  )
}

export default App