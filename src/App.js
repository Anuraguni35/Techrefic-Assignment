 
import './App.css';
import Header from './components/Header'
import BookSec from './components/BookSec'
import MidSec from './components/MidSec'
import TabsSec from './components/TabsSec';
import CarouselSec from "./components/CaroucelSec"
import FootSec from './components/FootSec';
function App() {
  return (
    <div className="App">
      <Header/> 
     <BookSec/>
     <MidSec/> 
     <TabsSec/>
     <CarouselSec/>
     <FootSec/>
    </div>
  );
}

export default App;
