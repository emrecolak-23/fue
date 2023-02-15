// SurveyForm shows a form for a user to add input
import { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { Link } from 'react-router-dom';

import SurveyField from './SurveyField';
import validateEmail from '../../utils/validateEmail';

const FIELDS = [
  {
    label: 'Survey Title',
    name: 'title',
  },
  {
    label: 'Subject Line',
    name: 'subject',
  },
  {
    label: 'Email Body',
    name: 'body',
  },
  {
    label: 'Recipients',
    name: 'emails',
  },
];

class SurveyForm extends Component {
  renderFields() {
    const renderedFields = FIELDS.map(({ label, name }, index) => {
      return (
        <Field
          key={index}
          label={label}
          type="text"
          name={name}
          component={SurveyField}
        />
      );
    });

    return renderedFields;
  }

  render() {
    return (
      <div>
        <form
          onSubmit={this.props.handleSubmit((values) => console.log(values))}
        >
          {this.renderFields()}
          <Link to="/surveys" className="red btn-flat left white-text">
            Cancel
          </Link>
          <button type="submit" className="teal btn-flat right white-text">
            Next
            <i className="material-icons right">done</i>
          </button>
        </form>
      </div>
    );
  }
}

function validate(values) {
  const error = {};

  error.emails = validateEmail(values.emails || '');

  FIELDS.forEach(({ name, label }) => {
    if (!values[name]) {
      error[name] = `You must provide a ${label}`;
    }
  });

  return error;
}

export default reduxForm({
  validate,
  form: 'surveyForm',
})(SurveyForm);
