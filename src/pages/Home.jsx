import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { PizzaBlock, Category, SortPopup } from '../conmonents';
import { setCategory } from '../redux/actions/fillters';
import PropTypes from 'prop-types';
const categoryName = ['Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];
const sortItems = [
  { name: 'популярности', type: 'popular' },
  { name: 'цене', type: 'price' },
  { name: 'алфавиту', type: 'alphabet' },
];
export default function Home() {
  const dispatch = useDispatch();
  const items = useSelector(({ pizzas }) => pizzas.items);
  const onSelectCategory = React.useCallback((index) => {
    dispatch(setCategory(index));
  }, []);
  return (
    <div className="container">
      <div className="content__top">
        <Category onClickItem={onSelectCategory} items={categoryName} />
        <SortPopup items={sortItems} />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        <PizzaBlock />
        {items &&
          items.map((obj) => (
            <PizzaBlock
              key={obj.id}
              // addedCount={cartItems[obj.id] && cartItems[obj.id].items.length}
              {...obj}
            />
          ))}
      </div>
    </div>
  );
}

PizzaBlock.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  imageUrl: PropTypes.string.isRequired,
  types: PropTypes.arrayOf(PropTypes.number),
  sizes: PropTypes.arrayOf(PropTypes.number),
};

PizzaBlock.defaultProps = {
  name: 'Скоро в продаже',
  sizes: '',
  price: 0,
  imageUrl:
    'https://dodopizza.azureedge.net/static/Img/Products/Pizza/ru-RU/6652fec1-04df-49d8-8744-232f1032c44b.jpg',
  types: [],
};


// npx json-server --watch public/db.json