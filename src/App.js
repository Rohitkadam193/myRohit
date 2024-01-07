import logo from './logo.svg';
import './App.css';
import Header from './componants/Header';
import Page from './componants/Page';
import Footer from './componants/Footer';
import Welcome from './componants/Welcome';
import Home from './componants/Home';
import Greet from './componants/Greet';
import Greeet from './componants/Greeet';


function App() {
  return (
    <div className="App">
    <Greet name="rohit" heroName="superman">
    <p>this is  props this is newhello book of the</p>
    </Greet>
    <Greeet/>
    <Home/>
    <Welcome />
      <Header/>
      <Page/>
      <Footer/>
      
     
    </div>
   
    
  );
}

export default App;
