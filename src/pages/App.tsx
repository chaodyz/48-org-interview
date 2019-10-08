import React from 'react';
import './App.css';
import ManagementPortal from './management';
import SimpleMenu from '../components/Menu';
import Welcome from '../components/Welcome';
import LetterAvatars from '../components/LetterAvatar';

const App: React.FC = () => {
  return (
    <div className="App">
      <SimpleMenu></SimpleMenu>
      <header className="App-header">
        <Welcome name="Diz" />
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <ManagementPortal></ManagementPortal>
        <LetterAvatars></LetterAvatars>
      </header>
    </div>

  );
}

export default App;
