import './App.css';
import {Container} from 'react-bootstrap'
import ListTask from './components/ListTask';

function App() {
  return (
    <Container>
      <header>
        <h1>Meriem's ToDo List</h1>
      </header>
      <ListTask/>
    </Container>
  );
}

export default App;
