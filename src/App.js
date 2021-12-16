import React from 'react'
import axios from 'axios'
// import { useSelector, useDispatch } from 'react-redux'
import { useDispatch } from 'react-redux'
import { Header } from './conmonents'
import { Home, Card } from './pages'
import { setPizzas } from './redux/actions/pizzas'
// style
import './assets/app.scss'

function App() {
  const dispatch = useDispatch();
  React.useEffect(() => {
    axios.get('http://localhost:3001/pizzzas').then(({ data }) => {
      dispatch(setPizzas(data))
    })
  }, [])
  return (
    <div>
      <div className="wrapper">
        <Header />
        <div className="content">
          <Home />
          <Card />
        </div>
      </div>
    </div>
  )
}
export default App;
// export default function App() {
//   const dispatch = useDispatch();
//   const { items } = useSelector(({ pizzas, filters }) => {
//     return {
//       item: pizzas.items
//     }
//   })
//   React.useEffect(() => {
//     axios.get('http://localhost:3000/db.json').then(({ data }) => {
//       dispatch(setPizzas(data.pizzas))
//     })
//   }, [])
//   return (
//     <div>
//       <div className="wrapper">
//         <Header />
//         <div className="content">
//           <Home items={items} />
//           <Card />
//         </div>
//       </div>
//     </div>
//   )
// }
// class App extends React.Component {
//   componentDidMount() {
//     axios.get('http://localhost:3000/db.json').then(({ data }) => {
//       this.props.dispatch(setPizzas(data.pizzas))
//       console.log(setPizzas(data.pizzas));
//     });
//   }
//   render() {
//     return (
//       <div>
//         <div className="wrapper">
//           <Header />
//           <div className="content">
//             <Home items={this.props.items} />
//             <Card />
//           </div>
//         </div>
//       </div>
//     )
//   }
// }
// const mapStateToProps = (state) => {
//   return {
//     items: state.pizzas.items,
//     filters: state.filters,
//   }
// }
// const mapDispatchToProps = (dispatch) => {
//   return {
//     setPizzas: (items) => dispatch(setPizzas(items)),
//     dispatch
//   }
// }
// export default connect(mapStateToProps, mapDispatchToProps)(App);

// export default connect(
//   (state) => {
//     return {
//       items: state.pizzas.items,
//       filters: state.filters,
//     };
//   },
//   (dispatch) => {
//     return {
//       setPizzas: (items) => dispatch(setPizzas(items))
//     }
//   }
// )(App);

