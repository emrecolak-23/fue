import { useState } from 'react';
import { useSelector } from 'react-redux';

import { fetchUser } from './store';
import { BrowserRouter, Route } from 'react-router-dom';
import { useThunk } from './hooks/use-thunk';

import Header from './components/Header';
import Landing from './components/Landing';
import Dashboard from './components/Dashboard';
import SurveyNew from './components/surveys/SurveyNew';

function App() {
  const [doFetchUser, isLoadingUser, loadingUserError] = useThunk(fetchUser);

  const { data } = useSelector((state) => {
    return state.auth;
  });

  console.log(isLoadingUser);
  console.log(loadingUserError);

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
