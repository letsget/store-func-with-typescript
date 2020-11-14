import React from 'react';
import ShopItemFunc from '../components/ShopItemFunc';
import '../css/main.css';

export interface ShopItem {
  brand: string;
  title: string;
  description: string;
  descriptionFull: string;
  price: number;
  currency: string;
}

const item: ShopItem = {
  brand: 'Tiger of Sweden',
  title: 'Leonard coat',
  description: 'Minimalistic coat in cotton-blend',
  descriptionFull:
    "Men's minimalistic overcoat in cotton-blend. Features a stand-up collar, concealed front closure and single back vent. Slim fit with clean, straight shape. Above-knee length.",
  price: 399,
  currency: '£',
};

const App = () => (
  <div className="container">
    <div className="background-element" />
    <div className="highlight-window">
      <div className="highlight-overlay" />
    </div>
    <div className="window">
      <ShopItemFunc item={item} />
    </div>
  </div>
);

export default App;
