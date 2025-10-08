import { Link } from "react-router";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import React, { useRef, useState } from "react";
import ErrorAlert from "../../components/ErrorAlert";
import useAuthContext from "../../hooks/useAuthContext";

const Login = () => {
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const [error, setError] = useState<String | null>(null);
  const { login, loading } = useAuthContext();

  const handleLoginSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!emailRef.current || !passwordRef.current)
      throw new Error("Email & Password Ref not mounted");
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    await login({ email, password });
  };

  return (
    <div className="pt-10 pb-10">
      <div className="w-[30%] p-2 m-auto border-1 rounded-md grid items-center">
        <h1 className="text-large m-auto font-medium mt-2">
          Login to your account
        </h1>
        <div className="w-[70%] m-auto mt-10">
          <ErrorAlert error={error} onClose={() => setError(null)} />
          <form onSubmit={handleLoginSubmit}>
            <div className="form-field">
              <TextField
                type="email"
                id="email"
                label="Email"
                variant="outlined"
                className="w-[100%]"
                inputRef={emailRef}
              />
            </div>
            <div className="form-field">
              <TextField
                id="password"
                label="Password"
                variant="outlined"
                className="w-[100%]"
                inputRef={passwordRef}
                type="password"
              />
            </div>
            <Link to="/">Forgot Password?</Link>
            <div className="form-field">
              <Button
                variant="contained"
                color="success"
                className="w-[100%]"
                type="submit"
                disabled={loading}
              >
                Login
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
