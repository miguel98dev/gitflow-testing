import { useState } from "react"

export const cambios = () => {
    console.log('hola')
}
cambios()

export const Login = () => {
    const [login, setLogin] = useState(false)
    return (
        <button onClick={setLogin()}>{login}</button>
    )
}

Login()

const hola = 'adios'

console.log(hola)