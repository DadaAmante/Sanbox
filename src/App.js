import './App.css';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Tasklist } from './components/Tasklist';

function App() {
  return (
    <div className="App">
      <>
      <Header />
      <Tasklist />
      <Footer />
      </>
    </div>
  );
}

export default App;
