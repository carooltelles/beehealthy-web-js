import React from 'react'

import logo from '../../assets/logo.png'

import './styles.css'

const ForgotPassword = () => {
    return (
        <>
            <div className="elelment">
                <div className="element-main">
                    <img className="logo" src={logo} alt="BeeHealthy logo" />

                    <h1>Redefinir sua senha</h1>
                    <p>Informe e confirme sua nova senha</p>
                    <form>
                        <input
                            type="password"
                            placeholder="Digite sua nova senha"
                        />
                        <input
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