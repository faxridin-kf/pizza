import React from 'react';
import { PizzaBlock, Category, SortPopup } from '../conmonents';
import PropTypes from 'prop-types';
export default function Home({ items }) {
  console.log(items, 'hello');
  return (
    <div className="container">
      <div className="content__top">
        <Category
          onClickItem={(nam) => console.log(nam)}
          items={['Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые']}
        />
        <SortPopup
          items={[
            { name: 'популярности', type: 'popular' },
            { name: 'цене', type: 'price' },
            { name: 'алфавиту', type: 'alphabet' },
          ]}
        />
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
  imageUrl:
    'https://dodopizza.azureedge.net/static/Img/Products/Pizza/ru-RU/6652fec1-04df-49d8-8744-232f1032c44b.jpg',
  types: [],
};
