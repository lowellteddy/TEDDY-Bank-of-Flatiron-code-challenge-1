import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Transactions from './components/Transactions';
import Form from './components/Form';


function App() {
  return (
    <div className="App">
      <Navbar/>
      
      <Form/>
      <Transactions/>
     

    </div>
  );
}

export default App;