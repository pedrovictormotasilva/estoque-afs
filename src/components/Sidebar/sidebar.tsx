import React from 'react';
import './Sidebar.css';


const Sidebar: React.FC = () => {
  return (
    <div className="sidebar">
  <div className='afs-logo'><img src="../../src/assets/afs-logo-aside.png" alt="aside_icon1.png"/></div>
  <div className="nav-item">
    <img src="../../src/assets/aside_icon1.png" alt="aside_icon1.png"/>
    Início
  </div>
  <div className="nav-item">
    <img src="../../src/assets/aside_icon2.png" alt="aside_icon2"/>
    Estoque
  </div>
  <div className="logout-button-container">
    <img src="../../src/assets/sair_icon.png" alt="aside_icon2"/>
    <button className="logout-button">Sair</button>
  </div>
</div>

  );
};

export default Sidebar; 
