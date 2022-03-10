import { useState } from 'react';

//services
import { login } from '../../services/users.service';
//components

import './login.css';

export default function Login(){

    const [user, setUser] = useState({
        email: '',
        password: ''
    })

    const loadUser = async (e) => {
      e.preventDefault();
        try{
            const response = await login(user);
            setUser(response);
        }  catch(err){
           console.table(err)
        }
    };

    return(
       <section>
            <h1 >Login</h1>  
            <input placeholder='Email' name={user.email}/> Enter your email
            <input placeholder='Password' name={user.password}/> Enter your password
            <button onClick={loadUser}> Iniciar sesión </button>
        </section>
    )
}