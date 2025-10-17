import logo from './logo.svg';
import './App.css';
import FileFolderExplorer from './components/FileFolderExplorer';
import { DUMMY_FILE_FOLDER_DATA } from './utils/constants';

function App() {
  return (
    <div className="App">
      <FileFolderExplorer fileFolderData={DUMMY_FILE_FOLDER_DATA}/>
    </div>
  );
}

export default App;
