import Header from "./components/Header";
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from "./pages/Home";
import MacBookPro from "./pages/MacBookPro";

export default function App() {

  

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/macbook-pro" element={<MacBookPro />} />
      </Routes>
    </BrowserRouter>
  );
}
