import { Route, BrowserRouter as Router, Routes, Navigate } from "react-router-dom";
import "./app"
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Watch from "./pages/watch/Watch";

const App = () => {
  const user = true;

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={ user ? <Home /> : <Navigate replace to={'/register'} /> }
        />
        <Route
          path="/login"
          element={ <Login /> }
          element={ !user ? <Login /> : <Navigate replace to={'/'} /> }
        />
        <Route
          path="/register"
          element={ !user ? <Register /> : <Navigate replace to={'/'} /> }
        />
        { user && (
          <>
            <Route
              path="/series"
              element={ user ? <Home type="series" /> : <Navigate replace to={'/register'} />}
            />
            <Route
              path="/movies"
              element={ user ? <Home type="movies" /> : <Navigate replace to={'/register'} /> }
            />
            <Route
              path="/watch"
              element={ <Watch /> }
            />
          </>
        )}
      </Routes>
    </Router>
  );
};

export default App;