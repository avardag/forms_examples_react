export async function login({ username, password }) {
  await new Promise((resolve, reject) =>
    setTimeout(() => {
      if (username === "Alex" && password === "password123") resolve();
      else reject("Your usename or password is incorrect");
    }, 1000)
  );
}
