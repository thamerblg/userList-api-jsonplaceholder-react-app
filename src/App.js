import { Switch, BrowserRouter, Route } from "react-router-dom";
import "./App.css";
import User from "./components/User";
import UserList from "./components/UserList";

function App() {
  return (
    <BrowserRouter>
      <div className="">
        <Switch>
          <Route path="/" exact>
            <UserList />
          </Route>
          <Route path="/user/:id">
            <User />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
