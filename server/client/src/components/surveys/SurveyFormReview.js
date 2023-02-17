// SurveyFormReview show users form inputs for review
// import { useSelector } from 'react-redux';
import { connect } from 'react-redux';
import formFields from './formFields';

import { useThunk } from '../../hooks/use-thunk';
import { sendSurvey } from '../../store';

import { withRouter } from 'react-router-dom';

const SurveyFormReview = ({ onCancel, formValues, history }) => {
  //** Get surveyFrom values with useSelector **/
  // const formValues = useSelector((state) => {
  //   return state.form.surveyForm.values;
  // });

  const [postSurvey, isLoading] = useThunk(sendSurvey);

  const reviewFields = formFields.map(({ name, label }) => {
    return (
      <div key={name}>
        <label>{label}</label>
        <div>{formValues[name]}</div>
      </div>
    );
  });

  const handleSubmitSurvey = async () => {
    await postSurvey(formValues);
    if (!isLoading) {
      history.push('/surveys');
    }
  };

  return (
    <div>
      <h5>Please confirm your entries</h5>
      <div>{reviewFields}</div>
      <button
        className="yellow white-text btn-flat darken-3"
        onClick={onCancel}
      >
        Back
      </button>
      <button
        onClick={() => handleSubmitSurvey()}
        className="green btn-flat right white-text"
      >
        {isLoading ? 'Loading...' : 'Send'}
        <i className="material-icons right">email</i>
      </button>
    </div>
  );
};

function mapState(state) {
  return { formValues: state.form.surveyForm.values };
}

export default connect(mapState)(withRouter(SurveyFormReview));
