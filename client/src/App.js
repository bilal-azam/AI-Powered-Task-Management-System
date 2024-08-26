import UserProfilePage from './pages/UserProfilePage';

const App = () => {
    return (
        <Router>
            <Switch>
                <Route path="/user-profile" component={UserProfilePage} />
                <Route path="/analytics" component={AnalyticsPage} />
                <Route path="/feedback" component={FeedbackPage} />
                <Route path="/" component={HomePage} />
            </Switch>
        </Router>
    );
};

export default App;