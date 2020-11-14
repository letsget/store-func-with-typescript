import React, { FC } from 'react';
import { ShopItem } from '../app/App';

interface Props {
  item: ShopItem;
}

const ShopItemFunc: FC<Props> = ({
  item: { brand, title, description, descriptionFull, price, currency },
}) => (
  <div className="main-content">
    <h2>{brand}</h2>
    <h1>{title}</h1>
    <h3>{description}</h3>
    <div className="description">{descriptionFull}</div>
    <div className="highlight-window mobile">
      <div className="highlight-overlay" />
    </div>
    <div className="divider" />
    <div className="purchase-info">
      <div className="price">
        {currency}
        {price.toFixed(2)}
      </div>
      <button type="button">Добавить в корзину</button>
    </div>
  </div>
);

export default ShopItemFunc;
