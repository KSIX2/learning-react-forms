import "./App.css";

function App() {
  return (
    <main className="form-wrapper">
      <form className="register-form">
        <section className="form-header">Sign up</section>
        <section className="form-field">
          <input
            type="text"
            name="username"
            id="username"
            placeholder=""
            autoComplete="off"
          />
          <label for="username">Username</label>
        </section>
        <section className="form-field">
          <input
            type="password"
            name="password"
            id="password"
            placeholder=""
            autoComplete="off"
          />
          <label for="password">Password</label>
        </section>
        <section className="form-field">
          <input
            type="password"
            name="confirm-password"
            id="confirm-password"
            placeholder=""
            autoComplete="off"
          />
          <label for="confirm-password">Confirm Password</label>
        </section>
        <button>Register</button>
      </form>
    </main>
  );
}

export default App;
