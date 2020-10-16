import React from 'react'
import logo from '../../assets/logo.png'


import './styles.css'

const Error = () => {

    return (
        <>
            <div className="elelment">
                <div className="element-main">
                    <img className="logo" src={logo} alt="BeeHealthy logo" />

                    <h1>Link expirado!</h1>
                    <p>Solicite a mudança de senha novamente</p>
                </div>
            </div>
        </>
    )
}

export default Error