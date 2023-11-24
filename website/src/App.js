import './App.scss';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeController from './screens/home/Controller';
import LoginController from './screens/login/Controller';


export default function App() {
  return (
    <BrowserRouter>
   
      <Routes>
      <Route path="/" element={<LoginController />} />
        <Route path="/home" element={<HomeController />} />
      </Routes>
    </BrowserRouter>
  );
}