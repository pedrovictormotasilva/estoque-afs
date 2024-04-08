import React from 'react';
import Header from '../../components/Header/header';
import Overview from '../../components/Overview/overview';
import Sidebar from '../../components/Sidebar/sidebar';
import './dashboard.css';

const Dashboard: React.FC = () => {
  return (
    <div className="app">
      <div className="sidebar-container">
        <div className="sidebar">
          <Sidebar />
        </div>
        <div className="header">
          <Header />
        </div>
      </div>
      <div className="content">
        <Overview />
      </div>
    </div>
  );
};

export default Dashboard;
