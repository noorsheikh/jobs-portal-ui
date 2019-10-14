import React from 'react';
import { Container } from 'react-bootstrap';
import axios from 'axios';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Home from './containers/Home';
import JobPoster from './containers/JobPoster';
import JobSeeker from './containers/JobSeeker';
import NavigationBar from './components/NavigationBar';
import Job from './models/Job';

interface AppState {
  jobs: Job[];
}

class App extends React.Component<{}, AppState> {
  state: AppState = {
    jobs: []
  }
  componentDidMount() {
    try {
      axios.get('http://localhost:3030/jobs')
      .then(response => {
        this.setState({jobs: response.data.jobs});
      })
    } catch(error) {
      console.log(error);
    }
  }

  render() {
    const { jobs } = this.state;
    return (
      <Router>
        <Container>
          <NavigationBar />
        </Container>
        <Route path="/" exact render={() => <Home jobs={jobs} />} />
        <Route path="/jobs-posters" render={() => <JobPoster />} />
        <Route path="/jobs-seekers" render={() => <JobSeeker />} />
      </Router>
    )
  }
}

export default App;
