import logo from "./logo.svg";
import "./App.css";
import { useAuth0 } from "@auth0/auth0-react";
import axios from "axios";

const API_URL = "http://localhost:4000";

const App = () => {
  const {
    loginWithPopup,
    loginWithRedirect,
    logout,
    user,
    isAuthenticated,
    getAccessTokenSilently,
  } = useAuth0();

  const callUnprotectedRoute = () => {
    axios
      .get(API_URL + "/unprotected")
      .then((res) => console.log(res))
      .catch((err) => console.error(err));
  };

  const callProtectedRoute = async () => {
    const token = await getAccessTokenSilently();
    try {
      const response = await axios.get(API_URL + "/protected", {
        headers: {
          authorization: `Bearer ${token}`,
        },
      });
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="App">
      <h1>Auth0 Authentication</h1>

      <section>
        <div>
          <button onClick={loginWithPopup}>Login with popup</button>
          <button onClick={loginWithRedirect}>Login with redirect</button>
          <button onClick={() => logout()}>Logout</button>
        </div>

        <div>
          <button onClick={callUnprotectedRoute}>Call Unprotected Route</button>
          <button onClick={callProtectedRoute}>Call Protected Route</button>
        </div>
      </section>
      <section>
        <h3>User is {isAuthenticated ? "Logged in" : "Not Logged in"}</h3>

        {isAuthenticated && (
          <pre style={{ textAlign: "left" }}>
            {JSON.stringify(user, null, 2)}
          </pre>
        )}
      </section>
    </div>
  );
};

export default App;
