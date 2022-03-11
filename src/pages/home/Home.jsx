import Navbar from '../../core/navbar/Navbar';
import Login from '../../components/login/Login';
import Register from '../../components/register/Register';

export default function Home() {
  return (
    <>
      <Navbar />
      <Login />
      <Register />
    </>
  );
}
