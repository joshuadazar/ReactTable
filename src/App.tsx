import Table from './components/Table';
import Header from './components/Header';
import { Footer } from './components/Footer';
import { Main } from './components/Main';
import { messageService, NameArray, sendMessage } from './services/service';
import 'materialize-css/dist/css/materialize.min.css';
import { Names } from './models/INames';
import { useEffect } from 'react';
import {Form} from './components/Form';




const arr: Names[] = [
  {
    id: 1,
    name: 'josha'
  },
  {
    id: 2,
    name: 'lio'
  },
  {
    id: 3,
    name: 'sophia'
  },
  {
    id: 4,
    name: 'may'
  },
];



function App() {

  let title: string = "joshua"

  function hideTable() {
    messageService.sendMessage(false)
  }


  useEffect(() => {
    NameArray.sendNames(arr)
    sendMessage(title)
  });


  return (
    <div className="App">
      <Header />
      <div className="container">
        <Form/>
        <Table />
        <button onClick={hideTable}>ocultar</button>
        <Main title={title} />
        <input onChange={(e) => sendMessage(e.target.value)} type="text" />
      </div>
      <Footer />
    </div>
  );
}

export default App;
