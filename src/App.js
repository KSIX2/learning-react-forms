import { useRef, useEffect, useState } from "react";
import "./App.css";

const USERNAME_REGEX = /^[a-zA-Z][a-zA-Z0-9_@#]{3,24}$/;
const PASSWORD_REGEX = /^[a-zA-Z0-9_@#]{7,24}$/;

function App() {
  const [username, setUsername] = useState("");
  const [isUsernameErrShown, setUsernameErrShown] = useState(false);

  const [password, setPassword] = useState("");
  const [isPasswordErrShown, setPasswordErrShown] = useState(false);

  const [confirmPwd, setConfirmPwd] = useState("");
  const [isConfirmPwdErrShown, setConfirmPwdErrShown] = useState(false);

  const usernameRef = useRef();

  useEffect(() => {
    usernameRef.current.focus();
  }, []);

  function handleUsernameChange(e) {
    const newUsername = e.target.value;
    setUsername(newUsername);

    const result = USERNAME_REGEX.test(newUsername);
    setUsernameErrShown(!result);
  }

  function handlePasswordChange(e) {
    const newPassword = e.target.value;
    setPassword(newPassword);

    const result = PASSWORD_REGEX.test(newPassword);
    setPasswordErrShown(!result);

    // it is possible that user changes password
    // after entering something in confirm password
    const match = newPassword === confirmPwd;
    setConfirmPwdErrShown(!match);
  }

  function handleConfirmPwdChange(e) {
    const confirmedPassword = e.target.value;
    setConfirmPwd(confirmedPassword);

    const result = password === confirmedPassword;
    setConfirmPwdErrShown(!result);
  }

  return (
    <main className="form-wrapper">
      <form className="register-form" >
        <section className="form-header">Sign up</section>
        <section className="form-field">
          <input
            type="text"
            name="username"
            id="username"
            ref={usernameRef}
            placeholder=" "
            autoComplete="off"
            required
            onChange={handleUsernameChange}
            onBlur={() => setUsernameErrShown(false)}
          />
          <label htmlFor="username">Username</label>
          {isUsernameErrShown && (
            <p>
              Must contain 4 to 24 characters. <br />
              Must start with an alphabet. <br />
              Special characters _,@,# are allowed.
            </p>
          )}
        </section>
        <section className="form-field">
          <input
            type="password"
            name="password"
            id="password"
            placeholder=" "
            autoComplete="off"
            required
            onChange={handlePasswordChange}
            onBlur={() => setPasswordErrShown(false)}
          />
          <label htmlFor="password">Password</label>
          {isPasswordErrShown && (
            <p>
              Must contain 8 to 24 characters. <br />
              One uppercase, one lowercase and one special character must be
              present. <br />
              Special characters _,@,# are allowed.
            </p>
          )}
        </section>
        <section className="form-field">
          <input
            type="password"
            name="confirm-password"
            id="confirm-password"
            placeholder=" "
            autoComplete="off"
            required
            onChange={handleConfirmPwdChange}
            onBlur={() => setConfirmPwdErrShown(false)}
          />
          <label htmlFor="confirm-password">Confirm Password</label>
          {isConfirmPwdErrShown && <p>Must match your password field.</p>}
        </section>
        <button
          disabled={
            isUsernameErrShown || isPasswordErrShown || isConfirmPwdErrShown
          }
        >
          Register
        </button>
      </form>
    </main>
  );
}

export default App;
