import React from 'react';
import './App.css';
import SimpleMenu from '../components/Menu';
import Welcome from '../examples/Welcome';
import InputQuestionPage from './Input-question.page';
import ManagementPortal from './management-portal.page';

const App: React.FC = () => {
  return (
    <div className="App">
      <SimpleMenu></SimpleMenu>
      <header className="App-header">
        <Welcome name="Diz" />
        <InputQuestionPage></InputQuestionPage>
        <ManagementPortal></ManagementPortal>
      </header>
    </div>

  );
}

export default App;
