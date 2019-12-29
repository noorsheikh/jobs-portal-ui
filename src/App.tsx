import React from 'react';
import { Container } from 'react-bootstrap';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';

import Home from './containers/Home';
import JobPoster from './containers/JobPoster';
import JobSeeker from './containers/JobSeeker';
import NavigationBar from './components/NavigationBar';
import Search from './containers/Search';
import JobPost from './containers/JobPost';

class App extends React.Component<{}, {}> {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <NavigationBar />
          <Route path="/" exact component={Home} />
          <Route path="/jobs-posters" render={() => <JobPoster />} />
          <Route path="/jobs-seekers" render={() => <JobSeeker />} />
          <Route path="/search" component={Search} />
          <Route path="/jobs/:id" component={JobPost} />
        </Router>
      </Provider>
    )
  }
}

export default App;
