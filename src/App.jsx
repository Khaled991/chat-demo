import React, { lazy, Suspense } from 'react';
import './App.scss';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const HomePage = lazy(() => import('./pages/HomePage/HomePage'));

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Suspense fallback={<div>loading...</div>}>
            <Route exact path="/" component={HomePage} />
          </Suspense>
        </Switch>
      </BrowserRouter>
      <ToastContainer />
    </div>
  );
};

export default App;
