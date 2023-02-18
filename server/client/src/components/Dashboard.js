import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { useThunk } from '../hooks/use-thunk';
import { fetchSurveys } from '../store';

import SurveyList from './surveys/SurveyList';

function Dashboard() {
  const surveys = useSelector((state) => {
    return state.survey.data;
  });

  const [doFetchSurveys, ,] = useThunk(fetchSurveys);

  useState(() => {
    doFetchSurveys();
  }, [doFetchSurveys]);

  return (
    <div>
      <SurveyList surveys={surveys} />
      <div className="fixed-action-btn">
        <Link to="/surveys/new" className="btn-floating btn-large red">
          <i className="material-icons">add</i>
        </Link>
      </div>
    </div>
  );
}

export default Dashboard;
