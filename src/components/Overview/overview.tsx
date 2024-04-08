import React from 'react';
import './Overview.css';

const categories = [
  { name: 'Componentes', count: 10 },
  { name: 'Computador', count: 15 },
  { name: 'Notebook', count: 8 },
  { name: 'Materiais', count: 7 },
  { name: 'Cabos', count: 9 },
];

interface Images {
  [index: number]: string;
}

const images: Images = {
  0: '../../src/assets/estoque.png',
  1: '../../src/assets/computador_icon.png',
  2: '../../src/assets/notebook_icon.png',
  3: '../../src/assets/materiais_icon.png',
  4: '../../src/assets/cabos_icon.png',
};

const Overview: React.FC = () => {
  return (
    <div className="overview">
      <h2>Bem-Vindo, Julião Balde</h2>
      <p className="overview-p">Overview</p>
      <div className="overview-buttons">
  {categories.slice(0, 5).map((category, index) => (
    <div key={index} className="overview-button">
      <div className="image-name">
        <img src={images[index]} alt="" className="image-component" />
        <div>
          <span style={{ color: '#3BA936', fontWeight: 'normal', fontSize: '16px' }}>{category.name}</span>
          <br />
          <span style={{ color: 'black', fontWeight: 'bold', fontSize: '20px' }}>{category.count}</span>
        </div>
      </div>
    </div>
  ))}
</div>


    </div>
  );
};

export default Overview;
