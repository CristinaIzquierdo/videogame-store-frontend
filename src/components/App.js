import './App.css';
import NavBar from './navbar/Navbar';
import Login from './login/Login';
import Register from './register/Register';
import Button from './small-components/button/Button';

function App() {
  return (
    <>
      <NavBar />
      <Login />
      <Register />
      <Button></Button>
    </>
  );
}

export default App;
