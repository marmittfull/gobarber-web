import React from 'react';
import Route from './Route';

import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import Dashboard from '../pages/Dashboard';

const Routes: React.FC = () => (
  <>
    <Route path="/" exact component={SignIn} />
    <Route path="/signup" exact component={SignUp} />
    <Route path="/dashboard" exact component={Dashboard} isPrivate />
  </>
);
export default Routes;
