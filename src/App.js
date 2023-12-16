import './App.css';
import BodyContainer from './Components/BodyContainer';
import Header from './Components/Header';
import MenuBar from './Components/MenuBar';

function App() {
  return (
    <div className="App">
      <Header/>
      <div className='Banner'>
        <MenuBar/>
        <BodyContainer/>
      </div>
     
    </div>
  );
}

export default App;
