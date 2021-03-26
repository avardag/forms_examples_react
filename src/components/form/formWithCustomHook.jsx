import React from "react";

import useLogin from "./useLogin";

export default function FormWithCustomHook() {
  const {
    values: { username, password, formError, loading, loggedIn },
    setPassword,
    setUsername,
    login,
    logout,
  } = useLogin();

  async function onSubmit(e) {
    e.preventDefault();
    login();
  }

  return (
    <div className="login-container">
      {loggedIn ? (
        <>
          <h1>Welcome {username}</h1>
          <button onClick={() => logout()}>Log out</button>
        </>
      ) : (
        <form onSubmit={onSubmit}>
          <p className="description">Form with custom hook</p>
          <p>Please login!</p>
          {formError && <p className="error">{formError}</p>}
          <input
            type="text"
            placeholder="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit" disabled={loading}>
            Log in
          </button>
        </form>
      )}
    </div>
  );
}
