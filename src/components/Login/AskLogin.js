import React from 'react'
import { Button } from '../buttons'
import style from './login.module.css'
import { Link } from 'react-router-dom'

function AskLogin() {
    return (
        <>
            <div className={`container`}>
                <div className={`row justify-content-center ${style.customRow}`}>
                    <div className={`col-12 ${style.customCol}`}>
                        <Button title={"Internal Login"} isClickable={false}>
                            <Link to="/ClientLogin">Client Login</Link>
                        </Button>
                        <Button title={"External Login"} isClickable={false}>
                            <Link to="/ClientLogin">Client Login</Link>
                        </Button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AskLogin
