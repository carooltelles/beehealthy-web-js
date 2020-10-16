import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import logo from '../../assets/logo.png'
import axios from 'axios'
import PasswordChanged from './PasswordChanged'
import TokenExpired from './TokenExpired'
import Error from './Error'

import './styles.css'

const ForgotPassword = () => {

    const { token } = useParams()
    const [status, setStatus] = useState(null)

    const handleSubmit = async (e) =>{
        try{
            e.preventDefault()
            const confirmPassword = e.target['confirmPassword'].value
            const password = e.target['password'].value
            const response = await axios.patch('http://localhost:3001/account/forgotpassword',{password, confirmPassword}, { headers: { 
                'x-user-token':token
            }} )
            setStatus(response.status)
            console.log(response.status)
        }catch(error){
            setStatus(error.response.status)
        }
    }

    const screens = {
        200: () => <PasswordChanged/>,
        500: () => <Error/>,
        401: () => <TokenExpired/>,
    }


    if(status) return screens[status]()

    return (
        <>
            <div className="elelment">
                <div className="element-main">
                    <img className="logo" src={logo} alt="BeeHealthy logo" />

                    <h1>Redefinir sua senha</h1>
                    <p>Informe e confirme sua nova senha</p>
                    <form onSubmit={handleSubmit}>
                        <input
                        name='confirmPassword'
                            type="password"
                            placeholder="Digite sua nova senha"
                        />
                        <input
                        name='password'
                            type="password"
                            placeholder="Confirme sua nova senha"
                        />
                        <input type="submit" value="Redefinir" />
                    </form>
                </div>
            </div>
        </>
    )
}

export default ForgotPassword