import { useState } from "react";
import { login as doLogin } from "../../utils";

const initialState = {
  username: "",
  password: "",
  formError: null,
  loading: false,
};
export default function useLogin() {
  const [values, setValues] = useState(initialState);

  async function login() {
    try {
      setLoading();
      await doLogin(values);
      loginSuccess();
    } catch {
      loginFailed();
    }
  }

  function loginSuccess() {
    setValues({
      ...initialState,
      loggedIn: true,
      loading: false,
    });
  }

  function loginFailed() {
    setValues((prev) => ({
      ...prev,
      loggedIn: false,
      loading: false,
      formError: "Invalid username or password",
    }));
  }

  function setLoading() {
    setValues((prev) => ({ ...prev, loading: true }));
  }

  function logout() {
    setValues(initialState);
  }
  function setUsername(value) {
    setValues((prevState) => ({
      ...prevState,
      username: value,
    }));
  }
  function setPassword(value) {
    setValues((prevState) => ({
      ...prevState,
      password: value,
    }));
  }
  return { values, setUsername, setPassword, login, logout };
}
