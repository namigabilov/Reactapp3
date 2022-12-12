import './App.css';
import {BrowserRouter ,Routes ,Route} from 'react-router-dom'
import Header from './Components/Header';
import About from './Pages/About';
import Index from './Pages/Index';
import ExpensiveProducts from './Pages/ExpensiveProducts';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header />
        <Routes>
          <Route path='/' element={<Index />} />
          <Route path='/about' element={<About />} />
          <Route path='/expensiveProducts' element={<ExpensiveProducts />} />
        </Routes>
     </BrowserRouter>
     
    </div>
  );
}

export default App;
