import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AnalyticsPage from './pages/AnalyticsPage';
import FeedbackPage from './pages/FeedbackPage';

const App = () => {
    return (
        <Router>
            <Switch>
                <Route path="/analytics" component={AnalyticsPage} />
                <Route path="/feedback" component={FeedbackPage} />
                <Route path="/" component={HomePage} />
            </Switch>
        </Router>
    );
};

export default App;