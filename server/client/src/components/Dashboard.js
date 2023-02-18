import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { useThunk } from '../hooks/use-thunk';
import { fetchSurveys } from '../store';

import SurveyList from './surveys/SurveyList';
import Preloader from './Preloader';

function Dashboard() {
  const surveys = useSelector((state) => {
    return state.survey.data;
  });

  const [doFetchSurveys, isLoading] = useThunk(fetchSurveys);

  useState(() => {
    doFetchSurveys();
  }, [doFetchSurveys]);

  let content;

  if (isLoading) {
    content = <Preloader />;
  } else {
    content = <SurveyList surveys={surveys} />;
  }

  return (
    <div>
      {content}
      <div className="fixed-action-btn">
        <Link to="/surveys/new" className="btn-floating btn-large red">
          <i className="material-icons">add</i>
        </Link>
      </div>
    </div>
  );
}

export default Dashboard;
