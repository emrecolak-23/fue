import { useState } from 'react';
import { useSelector } from 'react-redux';

import { fetchUser } from './store';
import { BrowserRouter, Route } from 'react-router-dom';
import { useThunk } from './hooks/use-thunk';

import Header from './components/Header';
import Landing from './components/Landing';

function Dashboard() {
  return <h2>Dashboard</h2>;
}

function SurveyNew() {
  return <h2>Survey New</h2>;
}

function App() {
  const [doFetchUser, isLoadingUser, loadingUserError] = useThunk(fetchUser);

  const { data } = useSelector((state) => {
    return state.auth;
  });

  useState(() => {
    doFetchUser();
  }, [doFetchUser]);

  return (
    <div className="container">
      <BrowserRouter>
        <div>
          <Header auth={data} />
          <Route exact path="/" component={Landing} />
          <Route exact path="/surveys" component={Dashboard} />
          <Route path="/surveys/new" component={SurveyNew} />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
