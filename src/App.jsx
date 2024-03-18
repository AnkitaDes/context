import UserContextProvider from "./context/UserContext Provider";
import Login from "./components/Login";
import Profile from "./components/Profile";
import "./App.css";

function App() {
  return (
    <UserContextProvider>
      <Login />
      <Profile />
    </UserContextProvider>
  );
}

export default App;
