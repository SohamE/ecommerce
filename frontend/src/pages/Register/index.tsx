import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useRef, useState } from "react";
import { signup } from "../../api/auth";
import ErrorAlert from "../../components/ErrorAlert";
import { toast } from "react-toastify";
import { AxiosError } from "axios";
import { AppError } from "../../types/errors";

const CONFIRM_PASSWORD_NOT_MATCHING = "Password is not matching";

const Register = () => {
  const emailRef = useRef<HTMLInputElement>(null);
  const nameRef = useRef<HTMLInputElement>(null);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassWord] = useState("");
  const [confirmPasswordError, setConfirmPassWordError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<String | null>(null);

  const handleLoginSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!emailRef.current || !nameRef.current)
      throw new Error("Email or Password Ref not mounted");
    const email = emailRef.current.value;
    const name = nameRef.current.value;
    console.log(email + " " + password + " " + name);
    try {
      setIsLoading(true);
      setError(null);
      await signup({ email, password, name });
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

  const handleConfirmPassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value != "" && e.target.value != password)
      setConfirmPassWordError(CONFIRM_PASSWORD_NOT_MATCHING);
    else setConfirmPassWordError("");
    setConfirmPassWord(e.target.value);
  };
  const handlePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (confirmPassword != "" && e.target.value != confirmPassword)
      setConfirmPassWordError(CONFIRM_PASSWORD_NOT_MATCHING);
    else setConfirmPassWordError("");
    setPassword(e.target.value);
  };

  return (
    <div className="pt-10 pb-10">
      <div className="w-[30%] p-2 m-auto border-1 rounded-md grid items-center">
        <h1 className="text-large m-auto font-medium mt-2">
          Register your account
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
                id="name"
                label="Name"
                variant="outlined"
                className="w-[100%]"
                inputRef={nameRef}
              />
            </div>
            <div className="form-field">
              <TextField
                type="password"
                id="password"
                label="Password"
                variant="outlined"
                className="w-[100%]"
                value={password}
                onChange={handlePassword}
              />
            </div>
            <div className="form-field">
              <TextField
                id="confirm-password"
                label="Confirm Password"
                variant="outlined"
                className="w-[100%]"
                type="password"
                value={confirmPassword}
                onChange={handleConfirmPassword}
                error={confirmPasswordError != ""}
                helperText={confirmPasswordError}
              />
            </div>
            <div className="form-field">
              <Button
                variant="contained"
                color="success"
                className="w-[100%]"
                type="submit"
                disabled={isLoading}
              >
                Register
              </Button>
            </div>
          </form>
        </div>
      </div>
      <ErrorAlert />
    </div>
  );
};

export default Register;
