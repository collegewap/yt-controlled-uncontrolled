import { useState } from "react";

function App() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const onInputChange = (e) => {
    const value = e.target.value;
    setEmail(value);
    if (
      !/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/i.test(
        value
      )
    ) {
      setError("Invalid Email");
    } else {
      setError("");
    }
  };
  return (
    <div className="App">
      <label htmlFor="email">Email:</label>
      <input
        type="text"
        id="email"
        name="email"
        value={email}
        onChange={onInputChange}
      />
      <p className="error">{error && error}</p>
    </div>
  );
}

export default App;
