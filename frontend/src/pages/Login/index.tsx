import { Link, Navigate, useNavigate } from "react-router";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import React, { useEffect, useRef, useState } from "react";
import { login } from "../../api/auth";
import { AppError } from "../../types/errors";
import ErrorAlert from "../../components/ErrorAlert";
import useAuthContext from "../../hooks/useAuthContext";

const Login = () => {
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const [error, setError] = useState<String | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const { authState, updateUser } = useAuthContext();
  const navigate = useNavigate();

  useEffect(() => {
    if (authState.user) navigate("/");
  }, []);

  const handleLoginSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!emailRef.current || !passwordRef.current)
      throw new Error("Email & Password Ref not mounted");
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    console.log(email + " " + password);
    console.log("All cookies:", document.cookie);
    try {
      setIsLoading(true);
      setError(null);
      const response = await login({ email, password });
      console.log(response);
      updateUser(response.user);
    } catch (e) {
      if (e instanceof AppError) {
        console.log(e.details);
        setError(e.message);
      } else if (e instanceof Error) {
        setError(e.message);
      } else {
        setError("An unexpected error occurred");
      }
    } finally {
      setIsLoading(false);
    }
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
                disabled={isLoading}
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
