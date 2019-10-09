import React from 'react';
import './App.css';
import SimpleMenu from '../components/Menu';
import AppRouter from '../routers/AppRouter';

const App: React.FC = () => {
  return (
    <div className="App">
      <SimpleMenu></SimpleMenu>
      <AppRouter></AppRouter>
    </div>
  );
};

export default App;
