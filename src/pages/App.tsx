import React from 'react';
import './App.css';
import AppRouter from '../routers/AppRouter';

const App: React.FC = () => {
  return (
    <div className="App">
      <AppRouter></AppRouter>
    </div>
  );
};

export default App;
