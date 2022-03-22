// import logo from './logo.svg';
import './App.css';

function Header(){
  return(
    <header>
      <h1>Yerba Mate Culture</h1>
      <p>What is Yerba Mate Tea – A Refreshing, Healthy and Natural Drink</p>
    </header>
  )
}
function Container(){
  return(
 
      <div >
     
        <p >Yerba mate is an amazing plant and the tea brewed from its leaves has been consumed by humans for thousands of years. In addition to its good taste and refreshing quality, yerba mate tea also provides several health benefits, and enjoying it can be a nice social event.

Drinking yerba mate is also an excellent way of getting more energy to perform your physical exercise or to be able to make it through a long workday.</p>
      </div>
   
  )
}
function Footer(){
  return(
    <footer>
      <p>Enjoy your Yerba Mate Tea!</p>
 
    </footer>
  )
}

function App() {
  return (
    <div className="App">
   <div className="App-header"> <Header/></div>
     <div className="App-container"> <Container/></div>
 
      <Footer/>   
    </div>
  );
}

export default App;
