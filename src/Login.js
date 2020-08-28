import React from "react";
import "./Login.css";
import {auth,provider} from "./firebase";
import { useStateValue } from "./StateProvider";
import {actionTypes} from "./reducer";

function Login() {
    const [state,dispatch]=useStateValue();
  const signIn = () => {
    //signIn
    auth.signInWithPopup(provider)
    .then((result)=>{
        dispatch({
            type:actionTypes.SET_USER,
            user:result.user,
        });
        console.log(result.user);
    })
    .catch((error)=>alert(error.message));
  };
  return (
    <div className="login">
      <div className="login__logo">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg"
          alt=""
        />
        <img
          src="https://www.logo.wine/a/logo/Facebook/Facebook-Logo.wine.svg"
          alt=""
        />
      </div>
      <button type="submit" onClick={signIn}>
        SignIn
      </button>
    </div>
  );
}

export default Login;
