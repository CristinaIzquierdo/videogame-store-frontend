import Button from '../small-components/button/Button'
import Title from '../small-components/title/Title'

const title = 'Register'

export default function Register(){
    return(
        <section>
        <Title title={title}></Title>  
        <input placeholder='Username' /> Register your username
        <input placeholder='Password' /> Register your password
        <Button />

    </section>
    )
}