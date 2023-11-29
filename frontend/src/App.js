import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/navbar/Header.jsx';
import Footer from './components/footer/footer.jsx';
import Home from './components/Home/Home';

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
