import { HashRouter as Router, Route, Switch } from "react-router-dom";
import PreView from "./pages/preview";
const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/preview" component={PreView} />
      </Switch>
    </Router>
  );
};

export default App;
