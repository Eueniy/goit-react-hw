import React from 'react';
import PropTypes from 'prop-types';

function Product({ name, price, link, quantity }) {
  return (
    <div>
      <img src={link} alt={name} width="400" />
      <h2>{name}</h2>
      <p>Price: {price}$</p>
      {/* с помощью тернарного оператора можем задать условия вывода информации */}
      <p>{quantity < 30 ? 'Заканчивается' : 'Есть в наличии'}</p>
      <button type="button">Add to cart</button>
    </div>
  );
}

Product.defaultProps = {
  // указываем свойства, которые будут присвоены по умолчанию
  link: 'https://aps-polymer.com/wp-content/uploads/2019/09/placeholder.png',
};

Product.propTypes = {
  // работает как на основные пропы так и дефолтные
  //описание объектов, isRequired - означает что параметр обязателен
  // при передаче пропов все типы кроме string оборачиваются в { ... }
  link: PropTypes.string,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};

export default Product;
