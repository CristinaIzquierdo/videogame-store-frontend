import { useState } from "react"

import {register} from '../../services/users.service';

export default function Register({updateUser}) {

const [user, setUser] = useState({});

const createUser = async (e) => {
    e.preventDefault();
    try {
        const response = await register({user});
        updateUser(user);
        console.table('response', response);
        setUser({});
    } catch (error) {
        console.table(error.message);
    }
}

    return(
        <section>
            <form onSubmit={createUser}>
                <h1>Register</h1>  
                <input placeholder='Email' type="text"  value={user.email}/> Register your email
                <input placeholder='Name' value={user.name} type="text"/> Register your name
                <input placeholder='Password' value={user.password} type="password"/> Register your password
                <button > Register</button>
        </form>
    </section>
    )
}