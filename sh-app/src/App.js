import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';
import Counter from './components/Counter';
import ListDemo from './components/ListDemo';
import MailBox from './components/Mailbox';
import LoginForm from './components/LoginForm';
import FetchAllPost from './components/FetachAllPost';


  const firstName = "shruthi";
  const lastName = "babu";
function App() {
  return (
    <div className="App">
          <h3>SH-APP</h3>
          <Header uname={firstName} lname={lastName}/>
          {/* <Main/> */}
          {/* <Counter/>
          <ListDemo/> */}
      {/* <MailBox />
      <LoginForm /> */}
        <FetchAllPost/>
          <Footer/>
        
    </div>
  );
}

export default App;
