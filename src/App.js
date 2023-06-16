import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Login from './components/Login';
import Signup from './components/Signup';
import ForgotPassword from './components/ForgotPassword';
import Otp from './components/Otp';
import NewPassword from './components/NewPassword';

function App() {
  return (
    <Router>
    <Routes>
      <Route path="/login" element={<Login/>} />
      <Route path="/" element={<Signup/>} />
      <Route path="/forgotpassword" element={<ForgotPassword/>} />
      <Route path="/otp" element={<Otp/>} />
      <Route path="/newpassword" element={<NewPassword/>} />
    </Routes>
   </Router>
  );
}

export default App;
