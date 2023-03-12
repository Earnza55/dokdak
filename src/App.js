//import logo from './assets/Lo.jpg'; ใส่รูป
//import './App.css';
import { Route, Routes } from 'react-router-dom';
import Header from "./components/Header";
import Home from "./pages/Home"; //เรียกใช้ฟังชันHome.js
import Signin from './pages/Signin';
import Signup from './pages/Signup';
import Profile from './pages/Profile';

function App() {
  return ( 
    <>
<Header/>
<Routes>
  <Route path="/" element={<Home />}></Route> 
  <Route path="/Sign-up" element={<Signup />}></Route> 
  <Route path="/Sign-in" element={<Signin />}></Route> 
  <Route path="/profile" element={<Profile />}></Route> 
</Routes>
    </>
    // ตรง path อย่าลืมเปลี่ยนชื่อให้ตรงกับ Header

    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://www.youtube.com/watch?v=lpwnzItInBo&list=RDlpwnzItInBo&start_radio=1"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       กดตรงนี้ที่หัวจุย
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
