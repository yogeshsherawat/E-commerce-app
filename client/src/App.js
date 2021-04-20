
import './App.css';
import List from './components/Listing';
import { Provider } from 'react-redux';
import store from './store';
import Item from './components/Item';
import CartComponent from './components/CartComponent';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
function App() {
  return (
    <Router>
      <Provider store={store}>
        
        <Route exact path="/" component={ List}/>

        <Switch>
          
          <Route exact path="/l" component={Item}/>
          <Route exact path="/items/:id" component={Item} />
          <Route exact path="/cart" component={CartComponent}/>
        </Switch>
      
      </Provider>
    </Router>
    
  );
}

export default App;
