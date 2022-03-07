import './login.css';
import Button from '../small-components/button/Button'
import Title from '../small-components/title/Title'

const title = 'Login'

export default function Login(){
    return(
        <section>
            <Title title={title}></Title>  
            <input placeholder='Username' /> Enter your username
            <input placeholder='Password' /> Enter your password
            <Button />

        </section>
    )
}