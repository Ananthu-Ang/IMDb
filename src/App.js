import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import ImdbRoot from "./Components/ImdbRoot";
import ForgetPass1 from "./Pages/Forget/ForgetPass1";
import ForgetPass2 from "./Pages/Forget/ForgetPass2";
import IMDbFooter from "./Pages/IMDbFooter";
import IMDbHeader from "./Pages/IMDbHeader";
import SignInOptions from "./Pages/SignIn/SignInOptions";
import { Route, Routes } from "react-router-dom";
import Signin from "./Pages/SignIn/Signin";
import SignUp from "./Pages/SignUp/SignUp";
import Premalu from "./Pages/Movies/Premalu";
import Kill from "./Pages/Movies/Kill";
import Maharaja from "./Pages/Movies/Maharaja";
import Manjummel from "./Pages/Movies/Manjummel";
import Aavesham from "./Pages/Movies/Aavesham";

function App() {
  return (
    <div>
      <Routes>
        <Route index element={<ImdbRoot />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signinopt" element={<SignInOptions />} />
        <Route path="/frgtpassemail" element={<ForgetPass1 />} />
        <Route path="/forgetchanging" element={<ForgetPass2 />} />
        <Route path="/premalu-trailer" element={<Premalu />} />
        <Route path="/kill-trailer" element={<Kill />} />
        <Route path="/maharaja-trailer" element={<Maharaja />} />
        <Route path="/manjummelboys-trailer" element={<Manjummel />} />
        <Route path="/aavesham-trailer" element={<Aavesham />} />
      </Routes>
    </div>
  );
}

export default App;
