import React, { useState } from 'react';
import './Login.css';

// auth service
import { signIn, singUp } from '../../apis/auth/autenticacaoService'

// context api
import { auth, provider } from '../../firebase'
import { useStateValue } from '../../state/Provider'
import { actionTypes } from '../../state/reducer'

// images and icons
import fbLogo from '../../img/fbLogo.webp'
import fbTextLogo from '../../img/fbTextLogo.svg'
import { Button } from '@material-ui/core';

const Login = () => {
    const [state, dispatch] = useStateValue()
    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')

    const register = () => {
        singUp(login, password).then(({ data}) => {
            console.log(data)
        })
    }

    const doLogin = () => {
        // sign in
        signIn(login, password).then(({ data}) => {
            console.log(data)
        })
        auth.signInWithPopup(provider)
            .then(result => {

                dispatch({
                    type: actionTypes.SET_USER,
                    user: result.user
                });
                console.log(result);
            })
            .catch(error => alert(error.message))
    }

    return (
        <div className="login">
            <div className="loginLogo">
                <img src={fbLogo} alt="" />
                <img src={fbTextLogo} alt="facebook" />
            </div>

            <div className="container-login">
                <form>
                    <input
                        value={login}
                        onChange={e => setLogin(e.target.value)}
                        className="input-login"
                        placeholder={`Login`}
                    />
                    <input
                        value={password}
                        className="input-login"
                        onChange={e => setPassword(e.target.value)}
                        placeholder={"Password"} />
                </form>
                <Button type="submit" onClick={doLogin}>Sign In</Button>
                <Button type="submit" onClick={register}>Sign Up</Button>
            </div>
        </div>
    )
}

export default Login;
