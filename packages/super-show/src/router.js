import { HashRouter as Router, Route, Switch } from "react-router-dom";
import PreView from "./pages/preview";
import View from "./pages/view";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/preview" component={PreView} />
        <Route path="/view" component={View} />
      </Switch>
    </Router>
  );
};

export default App;
