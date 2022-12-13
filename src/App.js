
import './App.css';
import RegisterForm from "./component/Register/RegisterForm"
import Home from './pages/Home';
import { BrowserRouter,Route ,Routes} from "react-router-dom";
import Update from './component/update/Update';

function App() {
  return (
    <BrowserRouter> 
    <Routes>
      <Route path="/home" element={<Home/>}/>
        <Route path="register" element={<RegisterForm/>} />
        <Route path="user/edit/:id" element={<Update/>} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
