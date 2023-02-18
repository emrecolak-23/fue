function SurveyList({ surveys }) {
  const renderedSurveys = surveys.map((survey) => {
    return (
      <div className="card darken-1" key={survey._id}>
        <div className="card-content">
          <span className="card-title">{survey.title}</span>
          <p>{survey.body}</p>
          <p className="right">
            Sent On: {new Date(survey.dateSent).toLocaleDateString()}
          </p>
        </div>
        <div className="card-action">
          <a> Yes: {survey.yes}</a>
          <a> No: {survey.no}</a>
        </div>
      </div>
    );
  });

  return <div>{renderedSurveys}</div>;
}

export default SurveyList;
