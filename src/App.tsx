import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store, persistor } from './store';

import Home from './containers/Home';
import JobPoster from './containers/JobPoster';
import Search from './containers/Search';
import JobDetails from './containers/JobDetails';
import SignIn from './containers/SignIn';
import { PersistGate } from 'redux-persist/integration/react';

class App extends React.Component<{}, {}> {
  render() {
    return (
      <Provider store={store}>
        <PersistGate
          loading={null}
          persistor={persistor}
        >
          <Router>
            <Route path="/" exact component={Home} />
            <Route path="/jobs-posters" render={() => <JobPoster />} />
            <Route path="/sign-in" exact component={SignIn} />
            <Route path="/jobs" exact component={Search} />
            <Route path="/jobs/:id" exact component={JobDetails} />
          </Router>
        </PersistGate>
      </Provider>
    )
  }
}

export default App;
