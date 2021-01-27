import Table from './components/Table';
import Header from './components/Header';
import { messageService } from './services/service';

function App() {

  function hideTable() {
    messageService.sendMessage(false)
  }
  
  
  return (
    <div className="App">
      <Header/>

      <Table />
      <button onClick={hideTable}>ocultar</button>
    </div>
  );
}

export default App;
