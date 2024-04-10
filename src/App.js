import LoginContainer from './components/login-container/Login-container';
import Login from './components/login/Login';
import Menu from './components/menu/Menu';
import Register from './components/register/Register';
import './style.css';

function App() {
  return (
    <div className="App">
      <Menu />
      <LoginContainer />
    </div>
  );
}

export default App;
