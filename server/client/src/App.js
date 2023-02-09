import { BrowserRouter, Route } from 'react-router-dom';

import Header from './components/Header';

function Dashboard() {
  return <h2>Dashboard</h2>;
}

function SurveyNew() {
  return <h2>Survey New</h2>;
}

function Landing() {
  return <h2>Landing</h2>;
}

function App() {
  return (
    <div>
      <BrowserRouter>
        <div>
          <Header />
          <Route exact path="/" component={Landing} />
          <Route exact path="/surveys" component={Dashboard} />
          <Route path="/surveys/new" component={SurveyNew} />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
