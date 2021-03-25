import React, { useReducer } from "react";
import { login } from "../../utils";
import loginReducer from "./reducer";

const initialState = {
  username: "",
  password: "",
  loading: false,
  loggedIn: false,
  formError: null,
};

export default function FormUseStates() {
  const [state, dispatch] = useReducer(loginReducer, initialState);
  const { username, password, loading, formError, loggedIn } = state;

  async function onSubmit(e) {
    e.preventDefault();
    dispatch({ type: "login" });
    try {
      await login({ username, password });
      dispatch({ type: "success", value: initialState });
    } catch (error) {
      dispatch({ type: "error", value: error });
    }
  }

  return (
    <div className="login-container">
      {loggedIn ? (
        <>
          <h1>Welcome {username}</h1>
          <button onClick={() => dispatch({ type: "logout" })}>Log out</button>
        </>
      ) : (
        <form onSubmit={onSubmit}>
          <p className="description">Form with useReducer hook</p>
          <p>Please login!</p>
          {formError && <p className="error">{formError}</p>}
          <input
            type="text"
            placeholder="username"
            value={username}
            onChange={(e) =>
              dispatch({
                type: "field",
                field: "username",
                value: e.target.value,
              })
            }
          />
          <input
            type="password"
            placeholder="password"
            value={password}
            onChange={(e) =>
              dispatch({
                type: "field",
                field: "password",
                value: e.target.value,
              })
            }
          />
          <button type="submit" disabled={loading}>
            Log in
          </button>
        </form>
      )}
    </div>
  );
}
