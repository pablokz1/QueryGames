import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/navbar/Header.jsx';
import Footer from './components/footer/footer.jsx';
import Home from './pages/home/home.jsx';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Header />
      <Home/>
      <Footer />

    </div>
  );
}

export default App;
