import './App.css';
import Signin from './Pages/Signin';
import SignInOptions from './Pages/SignInOptions';
import SignUp from './Pages/SignUp';
import { Route, Routes } from 'react-router-dom'; 

function App() {
  return (
    <div>
      <Signin/>
      <Routes>
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signinopt" element={<SignInOptions />} />
      </Routes>
    </div>
  );
}

export default App;
