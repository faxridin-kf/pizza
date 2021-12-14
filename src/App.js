import React from 'react'
import axios from 'axios'
import { useSelector, useDispatch } from 'react-redux'
import { Header } from './conmonents'
import { Home, Card } from './pages'
import { setPizzas } from './redux/actions/pizzas'
// style
import './assets/app.scss'
function App() {
  const dispatch = useDispatch();
  const { items } = useSelector(({ pizzas, fillters }) => {
    return {
      items: pizzas.items,
      sortBy: fillters.sortBy
    };
  });

  React.useEffect(() => {
    axios.get('http://localhost:3000/db.json').then(({ data }) => {
      dispatch(setPizzas(data.pizzas));
    });
  }, []);

  return (
    <div>
      <div className="wrapper">
        <Header />
        <div className="content">
          <Home items={items} />
          <Card />
        </div>
      </div>
    </div>
  );
};
export default App;

