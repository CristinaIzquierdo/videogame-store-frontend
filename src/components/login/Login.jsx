import { useState } from 'react';

//services
import { login } from '../../services/users.service';

import './login.css';

export default function Login(){

    const [user, setUser] = useState({
        email: '',
        password: ''
    })

    const handleChange = (event)=>{
        setUser((prevProps)=>({
            ...prevProps,
            [event.target.name] : event.target.value,
        }))
    }

    const handleSubmit = async (e) => {
        try{
            const response = await login(user);
            console.log(response);
        }  catch(err){
            console.log(err.message);
        }
    };

    return(
       <section>
            <h1 >Login</h1>  
            <input placeholder='Email' name='email' value={user.email} onChange={handleChange} /> Enter your email
            <input placeholder='Password' name='password' value={user.password} onChange={handleChange}/> Enter your password
            <button onClick={handleSubmit}> Iniciar sesión </button>
        </section>
    )
}