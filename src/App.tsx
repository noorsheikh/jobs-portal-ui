import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';

import Home from './containers/Home';
import JobPoster from './containers/JobPoster';
import NavigationBar from './components/NavigationBar';
import Search from './containers/Search';
import JobDetails from './containers/JobDetails';
import SignIn from './containers/SignIn';

class App extends React.Component<{}, {}> {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <NavigationBar />
          <Route path="/" exact component={Home} />
          <Route path="/jobs-posters" render={() => <JobPoster />} />
          <Route path="/sign-in" render={() => <SignIn />} />
          <Route path="/jobs" exact component={Search} />
          <Route path="/jobs/:id" exact component={JobDetails} />
        </Router>
      </Provider>
    )
  }
}

export default App;
