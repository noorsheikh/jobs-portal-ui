import React from 'react';
import {
  Container,
  Row,
  Col
} from 'react-bootstrap';
import axios from 'axios';

import NavigationBar from './components/NavigationBar';
import SearchArea from './components/SearchArea';
import JobItem from './components/JobItem';
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
      <div className="App">
        <Container>
          <NavigationBar />
        </Container>
          <SearchArea />
        <Container>
          <Row className="justify-content-md-center">
            <Col lg={10}>
              {jobs && jobs.map(job => {
                return <JobItem {...job} key={job.id} />
              })}
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}

export default App;
