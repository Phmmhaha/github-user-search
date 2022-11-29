import React from 'react';
import { Dashboard, Login, PrivateRoute, AuthWrapper, Error } from './pages';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <AuthWrapper>
      <Router>
        <Switch>
          <PrivateRoute path='/' exact={true} >
            <Dashboard />
          </PrivateRoute>
          <Route path='/login'>
            <Login />
          </Route>
          {/* path='*' matches all pages except above router page */}
          <Route path='*'> 
            <Error />
          </Route>
        </Switch>
      </Router>
    </AuthWrapper>
    
  );
}
export default App;
