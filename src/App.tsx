import { RoutesComponents } from "./routes/Routes";
import { useSelector } from "react-redux";
import { RootState } from "../src/store/store";
import { Login } from "./pages/Auth/Login";

function App() {
  const isAuthenticated = useSelector(
    (state: RootState) => state.auth.isAuthenticated
  );
  return (
    <>
      {isAuthenticated ? (
        <>
        
        <RoutesComponents />
        </>
      ) : (
        <Login />
      )}
    </>
  );
}

export default App;
