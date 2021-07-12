import React, { useState } from 'react';
import { useLocation, Route } from 'react-router-dom';
import { Signin, Signup, Home, User } from './pages';
import { Header } from './components';
import { IsUserLogged, ProtectedRoute } from './helpers/routes';
import { useAuthListener } from './hooks';

function App() {
  const location = useLocation();
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem('authUser'))
  );
  useAuthListener({ setUser });

  return (
    <>
      <Header>
        {!user && (
          <Header.Link
            to="/signin"
            active={location.pathname === '/signin' ? 'true' : 'false'}
          >
            Signin
          </Header.Link>
        )}

        {user ? (
          <Header.Link
            to="/"
            active={location.pathname === '/' ? 'true' : 'false'}
          >
            <i className="fas fa-home" />
          </Header.Link>
        ) : null}

        {!user && (
          <Header.Link
            to="/signup"
            active={location.pathname === '/signup' ? 'true' : 'false'}
          >
            Signup
          </Header.Link>
        )}
      </Header>

      <IsUserLogged user={user} loggedInPath="/" path="/signin" exact>
        <Signin />
      </IsUserLogged>

      <IsUserLogged user={user} loggedInPath="/" path="/signup" exact>
        <Signup />
      </IsUserLogged>

      <ProtectedRoute user={user} path="/" exact>
        <Home user={user} setUser={setUser} />
      </ProtectedRoute>

      <Route path="/user/:uid">
        <User authUser={user} />
      </Route>
    </>
  );
}

export default App;
