import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';


  const firstName = "shruthi";
  const lastName = "babu";
function App() {
  return (
    <div className="App">
          <h3>SH-APP</h3>
          <Header uname={firstName} lname={lastName}/>
          <Main/>
          <Footer/>
    </div>
  );
}

export default App;
