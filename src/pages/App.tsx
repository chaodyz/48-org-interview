import React from 'react';
import './App.css';
import SimpleMenu from '../components/Menu';
import Welcome from '../components/Welcome';
import InputQuestionPage from "./Input-question.page";

const App: React.FC = () => {
  return (
    <div className="App">
      <SimpleMenu></SimpleMenu>
      <header className="App-header">
        <Welcome name="Diz" />
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        {/*<ManagementPortal></ManagementPortal>
        <LetterAvatars></LetterAvatars>*/}
        <InputQuestionPage></InputQuestionPage>
      </header>
    </div>

  );
}

export default App;
