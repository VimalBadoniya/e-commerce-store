import React, { useRef } from "react";
import Input from "../components/Input";
import Button from "../UI/Button";
import Modal from "../UI/Modal";
import "./LoginPage.css";

const LoginPage = (props) => {
  const emailRef = useRef();
  const passwordRef = useRef();

  const userLogin = (eve) => {
    eve.preventDefault();

    const enteredEmail = emailRef.current.value;
    const enteredPassword = passwordRef.current.value;
    fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCGu5lL82_xbmR81JXIJVrWx-7RVqAxh6U",
      {
        method: "POST",
        body: JSON.stringify({
          email: enteredEmail,
          password: enteredPassword,
          returnSecureToken: true,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((response) => {
        if (response.ok) {
          const func = props.onlogin ;
          func()
        }
        return response.json();
      })
      .then((data) => {
        console.log(data);
      }).catch((error)=>{console.log(error)})
    
  };

  return (
    <React.Fragment>
      <Modal>
        <header className="header-center">
          <h1>Login</h1>
        </header>
        <form>
          <Input labelName="Email" id="email" type="email" ref={emailRef} />
          <Input
            labelName="Password"
            id="password"
            type="Password"
            ref={passwordRef}
          />
          <Button name="Login" click={userLogin} type="submit" />
        </form>
      </Modal>
    </React.Fragment>
  );
};

export default LoginPage;
