import React, { useState } from "react";
import { Redirect } from "react-router-dom";

const Login = (props) => {
  const [redirect, setredirect] = useState(false);
  const log = () => {
    auth.uAuth(() => setredirect());
  };
  const { from } = props.location.state || { from: { pathname: "/" } };
  if (redirect) {
    return <Redirect to={from} />;
  }
  return (
    <div>
      <p>You must log in to view the page {from.pathname}</p>
      <button onClick={log}>Log in</button>
    </div>
  );
};

export default Login;
export const auth = {
  userAuth: false,
  uAuth(cb) {
    this.userAuth = true;
    setTimeout(cb, 100);
  },
};
