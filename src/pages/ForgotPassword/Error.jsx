import React from 'react'
import logo from '../../assets/logo.png'


import './styles.css'

const Error = () => {

    return (
        <>
            <div className="elelment">
                <div className="element-main">
                    <img className="logo" src={logo} alt="BeeHealthy logo" />

                    <h1>Ocorreu um erro!</h1>
                    <p>Tente novamente mais tarde</p>
                </div>
            </div>
        </>
    )
}

export default Error