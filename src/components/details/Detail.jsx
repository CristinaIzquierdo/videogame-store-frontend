import { useParams } from "react-router-dom"

export default function Detail(){

    const params = useParams() //req.params

    return <h1>{params.game}</h1>
}