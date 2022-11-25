import './App.css';
import Drawer from './components/Drawer';
import Main from './components/Main';


function App() {
  return (
    <div className="App min-h-screen w-screen bg-pageBground pb-3 flex flex-row">
      <Drawer />
      <Main />
    </div>
  );
}

export default App;
