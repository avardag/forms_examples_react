import React, { useState } from "react";
import { login } from "../../utils";

export default function FormUseStates() {
  const [loading, setLoading] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [loggedIn, setLoggedIn] = useState(false);

  async function onSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      await login({ username, password });
      setLoggedIn(true);
      setUsername("");
      setPassword("");
    } catch (error) {
      setError(error);
    }

    setLoading(false);
  }

  return (
    <div className="login-container">
      {loggedIn ? (
        <>
          <h1>Welcome {username}</h1>
          <button onClick={() => setLoggedIn(false)}>Log out</button>
        </>
      ) : (
        <form onSubmit={onSubmit}>
          <p>Please login!</p>
          {error && <p className="error">{error}</p>}
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
