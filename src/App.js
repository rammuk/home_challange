import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const Intro = lazy(() => import('./routes/intro'));
const FormPage = lazy(() => import('./routes/formPage'));

function App() {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route exact path="/" component={Intro} />
          <Route path="/formPage" component={FormPage} />
        </Switch>
      </Suspense>
    </Router>
  );
}

export default App;
