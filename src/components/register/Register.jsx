import { useState } from "react"

import {register} from '../../services/users.service';

export default function Register() {

    const [user, setUser] = useState({
        email: '',
        name: '',
        password: ''
    })

    const handleChange = (event) => {
        setUser((prevProps) => ({
            ...prevProps,
            [event.target.name]: event.target.value,
        }))
    }

    const handleSubmit = async (e) => {
        try{
            const response = await register(user);
            console.log(response);
        }catch(err){
            console.log(err.message);
        }
    };

    return(
        <section>
                <h1>Register</h1>  
                <input placeholder='Email' type="text"  value={user.email} onChange={handleChange} name='email'/> Register your email
                <input placeholder='Name' value={user.name} type="text" onChange={handleChange} name='name'/> Register your name
                <input placeholder='Password' value={user.password} type="password" onChange={handleChange} name='password'/> Register your password
                <button onClick={handleSubmit}> Register</button>
        </section>  
    )
}