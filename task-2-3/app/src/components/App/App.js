import React from 'react';
import Navbar from '../Navbar/Navbar.js'
import Success from '../Success/Success.js'
import Newsletter from '../Newsletter/Newsletter.js'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="App">
            <div className="right-column">
              <Switch>
                <Route exact path="/">
                  <Navbar />
                  <Newsletter />
                </Route>
                <Route path="/subscribed">
                  <Navbar/>
                  <Success/>
                </Route>
              </Switch>
            </div>
          <div className="left-column">
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
