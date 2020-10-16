import React from 'react'
import logo from '../../assets/logo.png'
import './styles.css'

const PasswordChanged = () => {

    return (
        <>
            <div className="elelment">
                <div className="element-main">
                    <img className="logo" src={logo} alt="BeeHealthy logo" />

                    <h1>Senha alterada com sucesso!</h1>
                    <p>Entre no app Bee Healthy e realize o login com sua nova senha.</p>
                </div>
            </div>
        </>
    )
}

export default PasswordChanged