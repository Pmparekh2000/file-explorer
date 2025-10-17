import logo from './logo.svg';
import './App.css';
import FileFolderExplorer from './components/FileFolderExplorer';
import { DUMMY_FILE_FOLDER_DATA } from './utils/constants';
import FileFolderExplorerContextWrapper from './context/FileFolderExplorerContext';

function App() {
  return (
    <div className="App">
      <FileFolderExplorerContextWrapper>
        <FileFolderExplorer />
      </FileFolderExplorerContextWrapper>
    </div>
  );
}

export default App;
