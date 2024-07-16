import './App.css';
import Dropdown from './Component/Dropdown';

function App() {
  const items = ['Option 1', 'Option 2', 'Option 3'];
  return (
    <div className="App">
      
      
      <Dropdown items={items}/>
    
    </div>
  );
}

export default App;
