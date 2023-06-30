 
import './App.css';
import Header from './Header';
import Hero from './Hero'
import Plans from './Plans';
import About from './About';
import Reviews from './Reviews';
import Footer from './Footer';
import Shape from './Shape';
 import polygon1 from './assets/polygon1.svg'

function App() {
  return (
    <div className="App"   >
     
       <Header/>
       <Hero/>
       <img className="polygona"src={polygon1}/>  <About/>
      
        
       <Plans/>
       <Reviews/>
       <Footer/>
    </div>
  );
}

export default App;
