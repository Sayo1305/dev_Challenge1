import './App.css';
import {Navbar, Color  , Typography1 , Spaces , Button_nav , Inputsnav , Grid_nav} from './components';
import {Route , Routes} from 'react-router-dom'
function App() {
  return (
    <div className="App">
      <div className='navbar'>
        <Navbar/>
      </div>
      <div className='main'>
        <Routes>
          <Route path='/Color' element={<Color/>}/>
          <Route path='/Typography1' element={<Typography1/>}/>
          <Route path='/Spaces' element={<Spaces/>}/>
          <Route path='/Button_nav' element={<Button_nav/>}/>
          <Route path='/Inputsnav' element={<Inputsnav/>}/>
          <Route path='/Grid_nav' element={<Grid_nav/>}/>
        </Routes>
      </div>
    </div>
  );
}

export default App;
