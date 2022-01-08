// import React from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { PizzaBlock, Categories, SortPopup } from '../conmonents';
// import PizzaLoadingBlock from '../conmonents/pizzaBlock/PizzaLoadingBlock';
// import { setCategory } from '../redux/actions/fillters';
// import { fetchPizzas } from '../redux/actions/pizzas';
// import PropTypes from 'prop-types';
// const categoryNames = ['Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];
// const sortItems = [
//   { name: 'популярности', type: 'popular' },
//   { name: 'цене', type: 'price' },
//   { name: 'алфавиту', type: 'alphabet' },
// ];
// export default function Home() {
//   const dispatch = useDispatch();
//   const items = useSelector(({ pizzas }) => pizzas.items);
//   const isLoaded = useSelector(({ pizzas }) => pizzas.isLoaded);
//   const category = useSelector(({ filters }) => filters);
//   const sortBy = useSelector(({ filters }) => filters);
//   React.useEffect(() => {
//     // if(!items.length) {
//     dispatch(fetchPizzas());
//     // }
//   }, [category]);
//   // const onSelectCategory = React.useCallback((index) => {
//   //   dispatch(setCategory(index));
//   // }, []);
//   const onSelectCategory = React.useCallback((index) => {
//     dispatch(setCategory(index));
//   }, []);
//   return (
//     <div className="container">
//       <div className="content__top">
//         <Categories
//           activeCategory={category}
//           onClickCategory={onSelectCategory}
//           items={categoryNames}
//         />
//         <SortPopup activeSortType={sortBy} items={sortItems} />
//       </div>
//       <h2 className="content__title">Все пиццы</h2>
//       <div className="content__items">
//         <PizzaBlock />
//         {isLoaded
//           ? items.map((obj) => <PizzaBlock key={obj.id} isLoading={true} {...obj} />)
//           : Array(12)
//               .fill(0)
//               .map((_, index) => <PizzaLoadingBlock key={index} />)}
//       </div>
//     </div>
//   );
// }

// PizzaBlock.propTypes = {
//   name: PropTypes.string.isRequired,
//   price: PropTypes.number.isRequired,
//   imageUrl: PropTypes.string.isRequired,
//   types: PropTypes.arrayOf(PropTypes.number),
//   sizes: PropTypes.arrayOf(PropTypes.number),
// };

// PizzaBlock.defaultProps = {
//   name: 'Скоро в продаже',
//   sizes: '',
//   price: 0,
//   imageUrl:
//     'https://dodopizza.azureedge.net/static/Img/Products/Pizza/ru-RU/6652fec1-04df-49d8-8744-232f1032c44b.jpg',
//   types: [],
// };

// // npx json-server --watch public/db.json

import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Categories, SortPopup, PizzaBlock, PizzaLoadingBlock } from '../conmonents';

import { setCategory, setSortBy } from '../redux/actions/fillters';
import { fetchPizzas } from '../redux/actions/pizzas';
import { addPizzaToCart } from '../redux/actions/card';

const categoryNames = ['Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];
const sortIems = [
  { name: 'популярности', type: 'popular', order: 'desc' },
  { name: 'цене', type: 'price', order: 'desc' },
  { name: 'алфавит', type: 'name', order: 'asc' },
];

function Home() {
  const dispatch = useDispatch();
  const items = useSelector(({ pizzas }) => pizzas.items);
  const cartItems = useSelector(({ cart }) => cart.items);
  const isLoaded = useSelector(({ pizzas }) => pizzas.isLoaded);
  const { category, sortBy } = useSelector(({ filters }) => filters);

  React.useEffect(() => {
    dispatch(fetchPizzas(sortBy, category));
  }, [category, sortBy]);

  const onSelectCategory = React.useCallback((index) => {
    dispatch(setCategory(index));
  }, []);

  const onSelectSortType = React.useCallback((type) => {
    dispatch(setSortBy(type));
  }, []);

  const handleAddPizzaToCart = (obj) => {
    dispatch({
      type: 'ADD_PIZZA_CART',
      payload: obj,
    });
  };

  return (
    <div className="container">
      <div className="content__top">
        <Categories
          activeCategory={category}
          onClickCategory={onSelectCategory}
          items={categoryNames}
        />
        <SortPopup
          activeSortType={sortBy.type}
          items={sortIems}
          onClickSortType={onSelectSortType}
        />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {isLoaded
          ? items.map((obj) => (
              <PizzaBlock
                onClickAddPizza={handleAddPizzaToCart}
                key={obj.id}
                addedCount={cartItems[obj.id] && cartItems[obj.id].items.length}
                {...obj}
              />
            ))
          : Array(12)
              .fill(0)
              .map((_, index) => <PizzaLoadingBlock key={index} />)}
      </div>
    </div>
  );
}
export default Home;
