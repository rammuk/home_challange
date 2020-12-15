import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Store from './Store'


const Intro = lazy(() => import('./routes/intro'));
const FormPage = lazy(() => import('./routes/formPage'));

function App() {
  return (
    <Store>
      <Router>
        <Suspense fallback={<div>Loading...</div>}>
          <Switch>
            <Route exact path="/" component={Intro} />
            <Route path="/formPage" component={FormPage} />
          </Switch>
        </Suspense>
      </Router>
    </Store>
  );
}

export default App;
