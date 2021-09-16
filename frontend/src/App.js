import Search from "./components/Search";
import ItemDetail from "./components/ItemDetail";
import {BrowserRouter, Route, Switch} from "react-router-dom";

function App() {
  return (
    <div className="App">
     <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Search} />
        <Route path="/items/:id" component={ItemDetail} />
      </Switch>
     </BrowserRouter>
    </div>
  );
}

export default App;
