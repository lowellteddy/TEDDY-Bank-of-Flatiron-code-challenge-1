import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Transactions from './components/Transactions';
import Form from './components/Form';
import Searchbar from './components/Searchbar';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Searchbar />
      <Form/>
      <Transactions/>
     

    </div>
  );
}

export default App;