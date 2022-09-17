import './App.css';
import ProductScreen from "./screens/ProductScreen"
import HomeScreen from './screens/homescreen';
import  {BrowserRouter,Link,Route,Routes} from 'react-router-dom';
function App() {
  return (
    <BrowserRouter>
    <div className='App'>
      <header>
        <Link to='/'>Karasuno</Link>
        </header>
        <main>
        <h1>Featured products</h1>
        <Routes>
        <Route path='/product/:slug' element ={<ProductScreen/>}></Route>
        <Route path='/' element ={<HomeScreen/>}></Route>
        </Routes>
          
        </main>
      
    </div>
    </BrowserRouter>
  );
}

export default App;
