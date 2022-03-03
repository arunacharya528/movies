import { BrowserRouter, Route, Switch } from 'react-router-dom';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import './app.scss';
import Nav from './components/Nav/nav';
import { Home } from './content/Home/Home';

function App() {
  return (
    <BrowserRouter>
      <div className="">
        <Nav></Nav>
        <Switch>
          <Route path="/" exact component={Home} />
          {/* <Route path="/movie/:id" component={() => <Detail />} /> */}

        </Switch>
      </div>

    </BrowserRouter>


  );
}

export default App;
