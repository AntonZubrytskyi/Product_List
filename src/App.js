import './App.css';
import { useDispatch, useSelector} from "react-redux"
function App() {


  const products = useSelector(state => state.products);
  console.log(products);
  return (
    <div className="App">
     
    </div>
  );
}

export default App;
